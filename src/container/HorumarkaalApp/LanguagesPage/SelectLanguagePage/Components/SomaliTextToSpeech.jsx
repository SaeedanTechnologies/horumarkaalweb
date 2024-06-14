import React, { useState } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import { Box, Button, Typography, IconButton } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import Loader from "../../../../../component/loader";
import api from "../../../../../utils/Api";
const useTextToSpeech = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);

  const textToSpeech = async (textToSpeak) => {
    if (!textToSpeak) {
      setError("Text to speak cannot be empty.");
      return;
    }
  
    const voice = "Cabdi";
    const url = `app/convert-text?voice=${voice}`; // Updated endpoint
  
    setLoading(true);
    setError(null);
  
    try {
      const response = await api.post(url, { text: textToSpeak });
  
      if (response.status === 200 && response.data.success) {
        const fileUrl = response.data.file;
        
        // Fetch the file using the provided URL
        const fileResponse = await axios.get(fileUrl, { responseType: "blob" });
        const blob = new Blob([fileResponse.data], { type: "audio/m4a" }); // Correct MIME type for m4a
        const audioUrl = URL.createObjectURL(blob);
        
        setAudioUrl(audioUrl);
        saveAs(blob, "output.m4a"); // Correct file extension for m4a
      } else {
        setError(`Failed to download file: ${response.status} - ${response.statusText}`);
      }
    } catch (e) {
      if (e.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(`Error: ${e.response.status} - ${e.response.data}`);
      } else if (e.request) {
        // The request was made but no response was received
        setError("Error: No response received from the server.");
      } else {
        // Something happened in setting up the request that triggered an Error
        setError(`Error: ${e.message}`);
      }
    } finally {
      setLoading(false);
    }
  
  };

  return { textToSpeech, loading, error, audioUrl };
};

const SomaliTextToSpeech = () => {
  const { textToSpeech, loading, error, audioUrl } = useTextToSpeech();

  const handleClick = () => {
    const text = "Hello, Ruhan sir, how are you?"; // Replace with your text
    textToSpeech(text);
  };

  return (
    <Box sx={{ padding: "2rem", textAlign: "center" }}>
      <Button variant="contained" onClick={handleClick} disabled={loading}>
        Convert to Speech
      </Button>
      {loading && <Loader />}
      {error && <Typography color="error">{error}</Typography>}
      {audioUrl && (
        <Box>
          <audio controls src={audioUrl} />
        </Box>
      )}
    </Box>
  );
};

export default SomaliTextToSpeech;
