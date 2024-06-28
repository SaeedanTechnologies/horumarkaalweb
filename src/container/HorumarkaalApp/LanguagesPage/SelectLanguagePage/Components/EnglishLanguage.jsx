import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

import {
  searchTranslate,
  getTranslate,
  getConvertTextsoomaali,
} from "../../../../../store/actions/appActions"; // Ensure the correct path to your actions
import Loader from "../../../../../component/loader";
import SomaliTextToSpeech from "./SomaliTextToSpeech";
import { event } from "jquery";

const EnglishLanguage = ({ language, setLanguage }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [checkedSuggestions, setCheckedSuggestions] = useState([]);
  const [translations, setTranslations] = useState({
    soomaali: [],
    arabic: [],
  });

  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const [loadingTranslations, setLoadingTranslations] = useState(false);
  const searchBoxRef = useRef(null);
  const [audioPlayer] = useState(new Audio());
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  useEffect(() => {
   setFilteredSuggestions(language)
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
  

  const handleCheckboxChange = async (event, suggestion) => {
    const isChecked = event.target.checked;
    let newCheckedSuggestions;

    if (isChecked) {
      newCheckedSuggestions = [...checkedSuggestions, suggestion];
      setCheckedSuggestions(newCheckedSuggestions);
    } else {
      newCheckedSuggestions = checkedSuggestions.filter(
        (item) => item !== suggestion
      );
      setCheckedSuggestions(newCheckedSuggestions);
    }
  };

  const searchTranslations = async () => {
    try {
      setLoadingTranslations(true);
      const response = await dispatch(
        getTranslate(checkedSuggestions, "english")
      );
      if (response.success) {
        const newTranslations = Object.values(response.data.translations);
        setTranslations(newTranslations);
        setLoadingTranslations(false);
      } else {
        console.error("Translation API error:", response.message);
      }
    } catch (error) {
      console.error("Failed to get translation:", error);
    }
  };

  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ar-SA'; // Arabic (Saudi Arabia)
    window.speechSynthesis.speak(utterance);
  };

  const speakTextShumali = async (text, audioPlayer) => {
    try {
      const response = await dispatch(getConvertTextsoomaali(text));
      console.log("Audio file path:", response.file);

      if (response && response.success && response.file) {
        const audioFilePath = response.file;
        audioPlayer.src = audioFilePath;

        // Ensure the audio is loaded before playing
        audioPlayer.load();
        audioPlayer.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      } else {
        console.error("Failed to generate audio or file path is missing");
      }
    } catch (error) {
      console.error("Error converting text to Somali:", error);
    }
  };

  useEffect(() => {
    const handleAudioError = (e) => {
      console.error("Error loading audio file:", e);
    };

    audioPlayer.addEventListener("error", handleAudioError);
    return () => {
      audioPlayer.removeEventListener("error", handleAudioError);
    };
  }, [audioPlayer]);
 


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
          // onFocus={handleFocus}
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
            sx: {
              padding: 0,
            },
            endAdornment: (
              <InputAdornment position="end" style={{ padding: 0, margin: 0 }}>
                {loadingSuggestions ? (
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
        {loadingSuggestions ? (
          <Loader />
        ) : (
          filteredSuggestions?.length > 0 && (
            <List
              sx={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                backgroundColor: "white",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                maxHeight: "200px",
                overflowY: "auto",
                zIndex: 10,
                marginTop: "0.5rem",
              }}
            >
              {loadingSuggestions ? (
                <Loader />
              ) : (
                filteredSuggestions?.map((suggestion, index) => (
                  <ListItem key={index}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checkedSuggestions.includes(
                            suggestion.english
                          )}
                          onChange={(event) =>
                            handleCheckboxChange(event, suggestion.english)
                          }
                        />
                      }
                      label={suggestion.english}
                    />
                  </ListItem>
                ))
              )}
            </List>
          )
        )}
      </Box>

      <FormGroup
        sx={{
          width: "70%",
          mt: 2,
          height: "30vh",
          overflowY: "auto", // Set overflowY to 'auto'

          overflowX: "hidden",
          display: "flex", // Set display to 'flex'
          flexDirection: "row", // Stack items vertically
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
          {loadingTranslations ? (
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
                    <IconButton
                      onClick={() =>
                        speakTextShumali(text.soomaali, audioPlayer)
                      }
                    >
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
          }}
        >
          <Typography
            textAlign={"center"}
            sx={{ fontWeight: "700", fontSize: "1.5rem" }}
          >
            Arabic
          </Typography>
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
                  <IconButton onClick={() => speakText(text.arabic)}>
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
