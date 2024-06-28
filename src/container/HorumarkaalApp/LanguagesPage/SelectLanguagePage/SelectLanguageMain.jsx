import React, { useState, useEffect } from "react";
// import Page from "../../../components/page/page";
import { Avatar, Box, Button, Typography, useTheme } from "@mui/material";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ArabicLanguage from "./Components/ArabicLanguage";
import ShomaliaLanguage from "./Components/ShomaliaLanguage";
import EnglishLanguage from "./Components/EnglishLanguage";
import { logoutUser, userLogout } from "../../../../store/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTranslationsData } from "../../../../store/actions/appActions";
import axios from 'axios';
const SelectLanguageMain = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [value, setValue] = useState("1");
  const handleLogout = () => {
    dispatch(userLogout());
    navigate('/login');
  };
  const [language, setLanguage]=useState([]);
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('Token not found in localStorage');
          return;
        }
        console.log(`Token: ${token}`);

        const res = await axios.post(
          "https://adminapp.horumarkaalweb.app/api/app/get-all-translate?length=0",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: 'application/json', 
            },
          }
        );
      
        setLanguage(res.data.data);
        setLoading(false)
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.error('Unauthorized - Token might be invalid or expired');
        } else {
          console.error(error, "error");
        }
      }
    };

    fetchData();
  }, []);

  const handleQuiz = () => {
    navigate('/quiz');
  };

  const userName = useSelector((state)=>state.auth.user.firstname)
  console.log(userName)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate()


  return (

    <>
    {loading ? (
      <loader />
      ) : (
        <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "3rem 10%",
        alignItems:'center'
        }}
      >

  <Box>
  <Button variant="contained" sx={{ position: 'absolute', top: 15, right: 250, textTransform:'none' }} onClick={handleQuiz}>Quiz</Button>
          <Button variant="contained" sx={{ position: 'absolute', textTransform:'none', top: 15, right: 15 }} onClick={handleLogout}>Logout</Button>


  <Box sx={{display:'flex',cursor:'pointer', alignItems:'center', position: 'absolute', top: 15, right: 120}} onClick={()=>{
  navigate('/manage-profile')
  }} gap={1}>

  <Avatar/>
  <Typography sx={{color:'black', fontWeight:'600'}}>{userName}</Typography>

  </Box>
  </Box>

        <Box>
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                borderColor: 'divider',
                marginBottom: '1rem', // Add some bottom margin for spacing
                borderRadius: '10px', // Add border radius to the tab container
                overflow: 'hidden' // Hide overflow to prevent border radius clipping
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                sx={{ gap: '10px' }} 
              >
                <Tab label="English" value="1" />
                <Tab label="Soomaali" value="2" />
                <Tab label="Arabic" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
            <EnglishLanguage language={language}  setLanguage={setLanguage}/>
            </TabPanel>
            <TabPanel value="2">
            <ShomaliaLanguage  language={language} setLanguage={setLanguage}/>
            </TabPanel>
            <TabPanel value="3">
          <ArabicLanguage language={language} setLanguage={setLanguage} />
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
      )}
    </>
      

  );
};

export default SelectLanguageMain;
