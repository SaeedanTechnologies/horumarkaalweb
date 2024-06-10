import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  InputAdornment,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { getQuestions } from "../../../store/actions/appActions";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../../store/actions/authActions";

const QuizMain = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [type, setType] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    setType(value);
    dispatch(getQuestions({ type: value }));
  };

  const [questions, setQuestions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0); // State for correct answers count
  const [showResultModal, setShowResultModal] = useState(false); // State to control modal visibility

  const fetchQuestions = async () => {
    try {
      const response = await dispatch(getQuestions({ type }));
      setQuestions(response.data);
      setSelectedOption(null);
      setCorrectAnswers(0); // Reset correct answers count when fetching new questions
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [type]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswerSelection = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correct) {
      // If selected option is correct, increment correct answers count
      setCorrectAnswers((prevCount) => prevCount + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      setShowResultModal(true); // Show result modal when all questions are answered
    }
  };

  const handleCloseResultModal = () => {
    setShowResultModal(false);
    // Reset state values when modal is closed
    setType("");
    setQuestions([]);
    setSelectedOption(null);
    setCorrectAnswers(0);
    setCurrentQuestionIndex(0);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };


  const handleTranslation = () => {
    navigate('/select-language');
  };

  const userName = useSelector((state)=>state.auth.user.firstname)
  console.log(userName)


  const navigate = useNavigate()


  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
          color: "white",
          padding: "0rem 20%",
        }}
      >

<Box>
<Button variant="contained" sx={{ position: 'absolute', top: 15, right: 250, textTransform:'none', backgroundColor:'white', color:'black',':hover':{
  backgroundColor:'white',
  color:'black'
} }} onClick={handleTranslation}>Translation</Button>
          <Button variant="contained" sx={{ position: 'absolute', top: 15, right: 15, backgroundColor:'white', color:'black',textTransform:'none', ':hover':{
  backgroundColor:'white',
  color:'black'
}  }} onClick={handleLogout}>

          Logout
          </Button>


<Box sx={{display:'flex', cursor:'pointer', alignItems:'center', position: 'absolute', top: 15, right: 120}} onClick={()=>{
  navigate('/manage-profile')
}} gap={1}>

<Avatar/>
<Typography sx={{color:'white', fontWeight:'600'}}>{userName}</Typography>

</Box>
</Box>

        <Box sx={{ minWidth: 260 }}>
      <Typography sx={{textAlign:'center', fontSize:'1.3rem', fontWeight:'00'}}>Select Language for Quiz</Typography>
      <br/>
          <FormControl
            fullWidth
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
              "& .MuiInputBase-root": {
                padding: 0,
                borderRadius: "10px",
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
            }}
          >
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="type"
              value={type}
              onChange={handleChange}
            >
              <MenuItem value="english to soomaali">
                English to Soomaali
              </MenuItem>
              <MenuItem value="english to arabic">English to Arabic</MenuItem>
              <MenuItem value="arabic to english">Arabic to English</MenuItem>
              <MenuItem value="arabic to soomaali">
                Arabic to Soomaali
              </MenuItem>
              <MenuItem value="soomaali to english">
                Soomaali to English
              </MenuItem>
              <MenuItem value="soomaali to arabic">
                Soomaali to Arabic
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <br />
        {/* <TextField
          placeholder="Search"
          size="small"
          variant="outlined"
          sx={{
            "& .MuiInputBase-root": {
              padding: 0,
              borderRadius: "10px",
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
            borderRadius: "10px",
            backgroundColor: "white",
          }}
          InputProps={{
            sx: {
              padding: 0,
            },
            endAdornment: (
              <InputAdornment
                position="end"
                style={{ padding: 0, margin: 0 }}
              >
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
              </InputAdornment>
            ),
          }}
        /> */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
            gap: "5px",
          }}
        >
          {/* <Button
            variant="contained"
            sx={{
              color: "white",
              border: "1px solid white",
              textTransform: "none",
            }}
          >
            Quiz by Words
          </Button>
          <Button
            variant="contained"
            sx={{
              color: "white",
              border: "1px solid white",
              textTransform: "none",
            }}
          >
            All Quizzes
          </Button> */}
        </Box>

        {questions?.length > 0 && (
          <>
            <br />
            <Typography sx={{ fontSize: "1.5rem", fontWeight: "600" }}>
              {questions[currentQuestionIndex].question}
            </Typography>
            <br />
            <div style={{ display: "flex" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <input
                  type="radio"
                  id={`option1`}
                  name={`question`}
                  style={{ height: "1rem", width: "1rem" }}
                  value={questions[currentQuestionIndex].answer_1}
                  checked={
                    selectedOption === questions[currentQuestionIndex].answer_1
                  }
                  onChange={() =>
                    handleAnswerSelection(questions[currentQuestionIndex].answer_1)
                  }
                />
                <label htmlFor={`option1`} style={{ marginRight: "2rem" }}>
                  {questions[currentQuestionIndex].answer_1}
                </label>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <input
                  type="radio"
                  id={`option2`}
                  name={`question`}
                  style={{ height: "1rem", width: "1rem" }}
                  value={questions[currentQuestionIndex].answer_2}
                  checked={
                    selectedOption === questions[currentQuestionIndex].answer_2
                  }
                  onChange={() =>
                    handleAnswerSelection(questions[currentQuestionIndex].answer_2)
                  }
                />
                <label htmlFor={`option2`}>
                  {questions[currentQuestionIndex].answer_2}
                </label>
              </Box>
            </div>
            <br />
            <Button variant="contained" onClick={handleNextQuestion} sx={{backgroundColor:'white', textTransform:'none', color:'black', padding:'0.5rem 2rem'}}>
              Next
            </Button>
          </>
        )}

        {/* Result Modal */}
        <Modal
          open={showResultModal}
          onClose={handleCloseResultModal}
          aria-labelledby="result-modal-title"
          aria-describedby="result-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: "10px",
            }}
          >
            <Typography variant="h4" gutterBottom>
              Quiz Result
            </Typography>
            <Typography variant="body1" gutterBottom>
              Correct Answers: {correctAnswers}/{questions.length}
            </Typography>
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default QuizMain;
