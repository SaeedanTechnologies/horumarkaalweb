import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { ArrowBack, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
  Card
} from "@mui/material";

import { logoutUser, updatePassword } from "../../../store/actions/authActions";
import { useSnackbar } from "notistack";

const ManageProfileMain = () => {


  const userData = useSelector((state)=>state.auth.user)
  console.log(userData, 'user Dataaaa')

  const initialValues = {
    password: "",
    password_confirmation: "",
  };

  const { enqueueSnackbar } = useSnackbar();
  const [formValues, setFormValues] = useState(initialValues);
  const [countries, setCountries] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const userDataRedux = useSelector((state) => state?.auth?.user);
  const token = useSelector((state) => state?.auth?.token);

console.log(token, 'userd dataaaaaa')




const handleChange = (e) => {
  const { name, value } = e.target;
  setFormValues(prevValues => ({
    ...prevValues,
    [name]: value
  }));
};

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);
  const handleClickShowCurrentPassword = () =>
    setShowCurrentPassword(!showCurrentPassword);


  const handleSubmitPassword = async (e) => {
    e.preventDefault();
    // if (formValues.password !== formValues.password_confirmation) {
    //   enqueueSnackbar("Password do not match", { variant: "error" });
    //   return;
    // }

    try {
      await dispatch(updatePassword(formValues, token));
      enqueueSnackbar("Password Updated Successfully", { variant: "success" });
      setFormValues(initialValues);
    } catch (error) {
      enqueueSnackbar("Error updating Password", { variant: "error" });
    }
  };

  const textFieldStyle = {
    marginTop: "1rem",
    "& .MuiInputBase-root": {
      border: "none",
      "&:hover": {
        borderColor: "transparent",
      },
      "&.Mui-focused": {
        boxShadow: "none",
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      display: "none",
    },
    borderRadius: "5px",
    backgroundColor: "#f6f7f9",
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };
  const handleQuiz = () => {
    navigate('/quiz');
  };

  const userName = useSelector((state)=>state.auth.user.firstname)

  return (



    <Box sx={{ padding: "1rem 5%" }}>

      <Typography
        variant="h1"
        sx={{ fontSize: "1.5rem", fontWeight: "700", mt: 3 }}
      >
        My Account
      </Typography>

      <Box>
      <Button variant="contained" sx={{ position: 'absolute', top: 15, right: 250, textTransform:'none' }} onClick={handleQuiz}>Quiz</Button>
          <Button variant="contained" sx={{ position: 'absolute', top: 15, right: 15 }} onClick={handleLogout}>Logout</Button>


<Box sx={{display:'flex', cursor:'pointer', alignItems:'center', position: 'absolute', top: 15, right: 120}} onClick={()=>{
  navigate('/manage-profile')
}} gap={1}>

<Avatar/>
<Typography sx={{color:'black', fontWeight:'600'}}>{userName}</Typography>

</Box>
</Box>

      <Card sx={{padding:'3rem', mt:3}}>
      <form>
        <Grid container spacing={3} sx={{ margin: "1rem 0rem" }}>

          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontSize: "1.2rem" }}>First Name</label>
              <TextField
                // name="first_name"
                placeholder="First Name"
                sx={textFieldStyle}
                value={userDataRedux.firstname}
                InputProps={{
        readOnly: true,
      }}
                // onChange={handleChange}
              />
            </Box>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontSize: "1.2rem" }}>Last Name</label>
              <TextField
                // name="last_name"
                placeholder="Last Name"
                sx={textFieldStyle}
                value={userDataRedux.lastname}
                // onChange={handleChange}
                InputProps={{
        readOnly: true,
      }}
              />
            </Box>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontSize: "1.2rem" }}>Email Address</label>
              <TextField
                // name="email"
                placeholder="Email"
                sx={textFieldStyle}
                InputProps={{
        readOnly: true,
      }}
                value={userDataRedux.email}
                // onChange={handleChange}
              />
            </Box>

          </Grid>

          <Grid item lg={4} md={6} sm={12} xs={12}>
  <Box sx={{ display: "flex", flexDirection: "column" }}>
    <label style={{ fontSize: "1.2rem" }}>Payment Status</label>
    <TextField
      placeholder="Payment Status"
      sx={textFieldStyle}
      value={userDataRedux.is_paid == 1 ? "Paid" : "Unpaid"}
      // onChange={handleChange}
      InputProps={{
        readOnly: true,
      }}
    />
  </Box>
</Grid>







        </Grid>

      </form>
{/*
      <Box sx={{ padding: "1rem 2%" }}>
        <Typography
          sx={{ fontSize: "2rem", fontWeight: "600", marginBottom: "1rem" }}
        >
          Change Password
        </Typography>
        <Divider />

        <Grid container spacing={5} sx={{ marginTop: "0rem" }}>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontSize: "1.2rem" }}>Current Password</label>
              <TextField
                name="current_password"
                placeholder="Current Password"
                sx={textFieldStyle}
                type={showCurrentPassword ? "text" : "password"}
                value={formValues.current_password}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowCurrentPassword}
                        edge="end"
                      >
                        {showCurrentPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={5} sx={{ marginTop: "0rem" }}>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontSize: "1.2rem" }}>New Password</label>
              <TextField
                name="password"
                placeholder="New Password"
                sx={textFieldStyle}
                type={showPassword ? "text" : "password"}
                value={formValues.password}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Grid>

          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontSize: "1.2rem" }}>Confirm Password</label>
              <TextField
                name="password_confirmation"
                placeholder="Confirm Password"
                sx={textFieldStyle}
                type={showConfirmPassword ? "text" : "password"}
                value={formValues.password_confirmation}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        edge="end"
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'end', mt: 2 }}>
          <Button
            variant="contained"
            sx={{ justifyContent: 'end', textTransform: 'none', fontSize: '1.1rem', padding: '0.5rem 2rem' }}
            onClick={handleSubmitPassword}
          >
            Update Password
          </Button>
        </Box>
      </Box>
       */}

      </Card>
    </Box>

  );
};

export default ManageProfileMain;
