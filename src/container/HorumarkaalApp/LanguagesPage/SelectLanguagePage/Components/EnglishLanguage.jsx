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

const EnglishLanguage = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [checkedSuggestions, setCheckedSuggestions] = useState([]);
  const [translations, setTranslations] = useState({
    soomaali: [],
    arabic: [],
  });
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const [loadingTranslations, setLoadingTranslations] = useState(false);
  const searchBoxRef = useRef(null);
  const [audioPlayer] = useState(new Audio());  // Create a state for the audio player
  const handleSearchChange = async (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      try {
        setLoadingSuggestions(true);
        // Dispatch API call to fetch suggestions
        const suggestions = await dispatch(searchTranslate(value, "English"));
        const filtered = suggestions.data.filter((suggestion) =>
          suggestion.toLowerCase().startsWith(value.toLowerCase())
        );
        setFilteredSuggestions(filtered);
      } catch (error) {
        console.error("Failed to fetch suggestions:", error);
      } finally {
        setLoadingSuggestions(false); // Stop loading suggestions
      }
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleFocus = async () => {
    if (searchTerm === "") {
      try {
        setLoadingSuggestions(true);
        // Dispatch API call to fetch all suggestions
        const suggestions = await dispatch(searchTranslate("", "English"));
        setFilteredSuggestions(suggestions.data);
      } catch (error) {
        console.error("Failed to fetch suggestions:", error);
      } finally {
        setLoadingSuggestions(false); // Stop loading suggestions
      }
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

    try {
      // Dispatch API call to get translation
      setLoadingTranslations(true);
      const response = await dispatch(getTranslate(suggestion, "english"));
      if (response.success) {
        const newTranslations = { ...translations };
        const translationData = response.data.translations[suggestion];

        if (translationData) {
          if (isChecked) {
            newTranslations.soomaali.push(translationData.soomaali);
            newTranslations.arabic.push(translationData.arabic);
          } else {
            newTranslations.soomaali = newTranslations.soomaali.filter(
              (translation) => translation !== translationData.soomaali
            );
            newTranslations.arabic = newTranslations.arabic.filter(
              (translation) => translation !== translationData.arabic
            );
          }

          setTranslations(newTranslations);
        } else {
          console.error(
            "Translation data is not in the expected format:",
            translationData
          );
        }
      } else {
        console.error("Translation API error:", response.message);
      }
    } catch (error) {
      console.error("Failed to get translation:", error);
    } finally {
      setLoadingTranslations(false); // Stop loading translations
    }
  };

  const handleClickOutside = (event) => {
    if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
      setFilteredSuggestions([]);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const speakText = (text) => {
    const message = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(message);
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
        audioPlayer.play().catch(error => {
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
      // alert("Failed to load audio file. Please try a different browser or check the console for more details.");
    };

    audioPlayer.addEventListener('error', handleAudioError);
    return () => {
      audioPlayer.removeEventListener('error', handleAudioError);
    };
  }, [audioPlayer]);
  // const speakTextShumali = async (text) => {
  //   try {
  //     const response = await dispatch(getConvertTextsoomaali(text));
  //     console.log("Audio file path:", response.file);

  //     if (response && response.success && response.file) {
  //       const audioFilePath = response.file;
  //       audioPlayer.src = audioFilePath;
  //       audioPlayer.play();  // Play the audio
  //     } else {
  //       console.error("Failed to generate audio or file path is missing");
  //     }
      
  //   } catch (error) {
  //     console.error("Error converting text to Somali:", error);
  //   }
  // };

  


  // const speakTextShumali = async (text) => {
  //   try {
  
  //     const response = await dispatch(getConvertTextsoomaali(text));
  
  //     if (response && response.success && response.file) {
  //       const audioFilePath = response.file;

  //       const audioElement = document.createElement("audio");

  //       audioElement.controls = true;
  //       audioElement.src = audioFilePath;
  //       const audioContainer = document.getElementById("audioContainer");

  //       audioContainer.innerHTML = "";

  //       audioContainer.appendChild(audioElement);

  //       console.log("Audio generated successfully!");
  //     } else {
  //       console.error("Failed to generate audio or file path is missing");
  //     }
  //   } catch (error) {
  //     console.error("Error converting text to Somali:", error);
  //   }
  // };

  
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
          onFocus={handleFocus}
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
          filteredSuggestions.length > 0 && (
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
                filteredSuggestions.map((suggestion, index) => (
                  <ListItem key={index}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checkedSuggestions.includes(suggestion)}
                          onChange={(event) =>
                            handleCheckboxChange(event, suggestion)
                          }
                        />
                      }
                      label={suggestion}
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
            translations.soomaali.length > 0 && (
              <Box>
                {translations.soomaali.map((text, index) => (
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
                    <Typography>{text}</Typography>
                    <IconButton onClick={() => speakTextShumali(text, audioPlayer)}>
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
          {translations.arabic.length > 0 && (
            <Box>
              {translations.arabic.map((text, index) => (
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
                  <Typography>{text}</Typography>
                  <IconButton onClick={() => speakText(text)}>
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

