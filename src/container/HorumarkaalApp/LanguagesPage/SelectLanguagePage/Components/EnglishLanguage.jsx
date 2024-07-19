import React, { useState, useEffect, useRef, useMemo } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  ListItem,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { FixedSizeList } from "react-window";
import {
  getTranslate,
  getConvertTextsoomaali,
} from "../../../../../store/actions/appActions";
import Loader from "../../../../../component/loader";
import debounce from "lodash.debounce";
import CloseIcon from "@mui/icons-material/Close";

const EnglishLanguage = ({ language }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [checkedSuggestions, setCheckedSuggestions] = useState([]);
  const [translations, setTranslations] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchBoxRef = useRef(null);
  const [audioPlayer] = useState(new Audio());
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    setFilteredSuggestions(language);
  }, [language]);

  const handleSearchChange = (event) => {
    const value = event.target.value ?? "";
    setSearchTerm(value);
    console.log(value, "searchvalue");
    if (value?.trim() !== "") {
      const filteredSuggestions = language.filter((item) =>
        item?.english?.toLowerCase().includes(value?.toLowerCase())
      );
      setFilteredSuggestions(filteredSuggestions);
    } else {
      setFilteredSuggestions(language);
    }
  };

  const handleCheckboxChange = (event, suggestion) => {
    const isChecked = event.target.checked;
    setCheckedSuggestions((prevChecked) =>
      isChecked
        ? [...prevChecked, suggestion]
        : prevChecked.filter((item) => item !== suggestion)
    );
  };

  const searchTranslations = async () => {
    setLoading(true);
    try {
      const response = await dispatch(
        getTranslate(checkedSuggestions, "english")
      );
      if (response.success) {
        setTranslations(Object.values(response.data.translations));
      } else {
        console.error("Translation API error:", response.message);
      }
    } catch (error) {
      console.error("Failed to get translation:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    // Load voices and set up an event listener to update the voices list
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const speakTextArabic = (text) => {
    if (!("speechSynthesis" in window)) {
      alert("Sorry, your browser does not support text to speech!");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    const arabicVoice = voices.find((voice) => voice.lang === "ar-SA");

    if (!arabicVoice) {
      alert("Sorry, Arabic voice is not available in your browser.");
      return;
    }

    utterance.voice = arabicVoice;
    window.speechSynthesis.speak(utterance);
  };

  const speakTextShumali = async (text) => {
    try {
      const response = await dispatch(getConvertTextsoomaali(text));
      if (response.success && response.file) {
        audioPlayer.src = response.file;
        audioPlayer
          .play()
          .catch((error) => console.error("Error playing audio:", error));
      } else {
        console.error("Failed to generate audio or file path is missing");
      }
    } catch (error) {
      console.error("Error converting text to Somali:", error);
    }
  };

  useEffect(() => {
    const handleAudioError = (e) =>
      console.error("Error loading audio file:", e);
    audioPlayer.addEventListener("error", handleAudioError);
    return () => {
      audioPlayer.removeEventListener("error", handleAudioError);
    };
  }, [audioPlayer]);

  const Row = ({ index, style }) => (
    <ListItem style={style} key={index}>
      <FormControlLabel
        control={
          <Checkbox
            checked={checkedSuggestions.includes(
              filteredSuggestions[index].english
            )}
            onChange={(event) =>
              handleCheckboxChange(event, filteredSuggestions[index].english)
            }
          />
        }
        label={filteredSuggestions[index].english}
      />
    </ListItem>
  );

  const clearCheckedSuggestions = () => {
    setCheckedSuggestions([]);
    setTranslations([]);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", position: "relative" }}
        ref={searchBoxRef}
      >
        <TextField
          placeholder="Search"
          size="small"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{
            "& .MuiInputBase-root": {
              padding: 0,
              borderRadius: "25px",
              "&:hover": {
                borderColor: "#f7f7f7",
              },
              "&.Mui-focused": {
                boxShadow: "none",
              },
            },
            "& .MuiOutlinedInput-notchedOutline": {
              color: "#f7f7f7",
            },
            borderRadius: "25px",
            backgroundColor: "white",
          }}
          InputProps={{
            sx: { padding: 0 },
            endAdornment: (
              <InputAdornment position="end">
                {loading ? (
                  <Loader />
                ) : (
                  <Button
                    onClick={searchTranslations}
                    sx={{
                      backgroundColor: "transparent",
                      color: "grey",
                      padding: "0.5rem",
                      borderRadius: "0px 5px 5px 0px",
                      ":hover": {
                        backgroundColor: "transparent",
                        color: "grey",
                      },
                    }}
                  >
                    <SearchOutlinedIcon />
                  </Button>
                )}
              </InputAdornment>
            ),
          }}
        />
        {filteredSuggestions.length > 0 && (
          <FixedSizeList
            height={200}
            width="100%"
            itemSize={46}
            itemCount={filteredSuggestions.length}
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              zIndex: 10,
              marginTop: "0.5rem",
            }}
          >
            {Row}
          </FixedSizeList>
        )}
      </Box>

      <FormGroup
        sx={{
          width: "70%",
          mt: 2,
          height: "30vh",
          overflowY: "auto",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {checkedSuggestions.map((suggestion, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                checked={checkedSuggestions.includes(suggestion)}
                onChange={(event) => handleCheckboxChange(event, suggestion)}
              />
            }
            label={suggestion}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              "& .MuiFormControlLabel-label": {
                marginRight: "auto",
              },
            }}
            labelPlacement="start"
          />
        ))}
      </FormGroup>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginTop: "2rem",
          position: "absolute",
          bottom: 0,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#b4acff",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "30vh",
            overflow: "auto",
            minWidth: "300px",
          }}
        >
          <Typography
            sx={{ fontSize: "1.5rem", fontWeight: "700" }}
            textAlign={"center"}
          >
            Soomaali
          </Typography>
          <br />
          {loading ? (
            <Loader />
          ) : (
            translations.length > 0 && (
              <Box>
                {translations.map((text, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      maxWidth: "500px",
                      marginBottom: "1rem",
                    }}
                    gap={5}
                    id="audioContainer"
                  >
                    <Typography>{text.soomaali}</Typography>
                    <IconButton onClick={() => speakTextShumali(text.soomaali)}>
                      <VolumeUpIcon />
                    </IconButton>
                  </Box>
                ))}
              </Box>
            )
          )}
        </Box>

        <Box
          sx={{
            backgroundColor: "#e0c7ff",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "30vh",
            overflow: "auto",
            minWidth: "300px",
            position: "relative", // To position the close icon properly
          }}
        >
          <Typography
            textAlign={"center"}
            sx={{ fontWeight: "700", fontSize: "1.5rem" }}
          >
            Arabic
          </Typography>
          <IconButton
            onClick={clearCheckedSuggestions}
            sx={{
              position: "absolute",
              right: "5px", // Adjust as needed
              top: "5px", // Adjust as needed
            }}
          >
            <CloseIcon />
          </IconButton>
          <br />
          {translations.length > 0 && (
            <Box>
              {translations.map((text, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    maxWidth: "500px",
                    marginBottom: "1rem",
                  }}
                  gap={5}
                >
                  <Typography>{text.arabic}</Typography>
                  <IconButton onClick={() => speakTextArabic(text.arabic)}>
                    <VolumeUpIcon />
                  </IconButton>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default EnglishLanguage;
