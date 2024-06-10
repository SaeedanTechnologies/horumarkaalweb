import React, { useState } from "react";
// import Page from "../../../components/page/page";
import { Avatar, Box, Button, Typography, useTheme } from "@mui/material";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ArabicLanguage from "./Components/ArabicLanguage";
import ShomaliaLanguage from "./Components/ShomaliaLanguage";
import EnglishLanguage from "./Components/EnglishLanguage";
import { logoutUser } from "../../../../store/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SelectLanguageMain = () => {
  const theme = useTheme();
  const [value, setValue] = useState("1");
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  const handleQuiz = () => {
    navigate('/quiz');
  };

  const userName = useSelector((state)=>state.auth.user.firstname)
  console.log(userName)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate()
const dispatch = useDispatch()

  return (
    // <Page title="Select Language">
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
                sx={{ gap: '10px' }} // Add some gap between tabs
              >
                <Tab label="English" value="1" />
                <Tab label="Soomaali" value="2" />
                <Tab label="Arabic" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
          <EnglishLanguage/>

            </TabPanel>
            <TabPanel value="2">
             <ShomaliaLanguage/>
            </TabPanel>
            <TabPanel value="3">
          <ArabicLanguage/>
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    // </Page>
  );
};

export default SelectLanguageMain;
