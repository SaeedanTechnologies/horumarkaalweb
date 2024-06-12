import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  useTheme,
  Typography,
} from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { useSnackbar } from "notistack";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

import { userRegister } from "../../../../../store/actions/authActions";
import { useDispatch } from "react-redux";

const NewSignUp = () => {
    const location = useLocation();
    const phone_number = location.state?.phone_number;
  const initialValues = {
    name: "",
    password: "",
    confirmPassword: "",
   phone_number: phone_number  
  };

  const theme = useTheme();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();


  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "25px",
    },
  };

  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, password } = formValues;
    const { phone_number } = initialValues;

    // Check if passwords match
    if (formValues.password !== formValues.confirmPassword) {
      enqueueSnackbar("Passwords do not match", { variant: "error" });
      setLoading(false);
      return;
    }

    dispatch(userRegister({ name, phone_number, password }))
      .then(() => {
        enqueueSnackbar("User registered successfully", { variant: "success" });
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.message, "error registering user");
        enqueueSnackbar(err.message, { variant: "error" });
        setLoading(false);
      });
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh', backgroundColor: '#6a49f2' }}>
      <Box sx={{ backgroundColor: 'white', padding: '3rem', borderRadius: '20px' }}>
        <Box textAlign={'center'}>
          <Typography variant="h1" sx={{ fontSize: "3rem", fontWeight: "900" }}>
            Signup
          </Typography>
        </Box>
        <Box sx={{ width: "100%", marginTop: "3rem" }} component="form" onSubmit={handleSubmit}>
          <Box sx={{ textAlign: "start" }}>
            <TextField
              name="name"
              value={formValues.name}
              onChange={handleChange}
              fullWidth
              sx={{ ...textFieldStyles, marginTop: "0.3rem" }}
              size="small"
              placeholder="Name"
              InputProps={{
                startAdornment: (
                  <PersonIcon style={{ color: '#6a49f2' }} />
                ),
              }}
            />
          </Box>
          <Box sx={{ textAlign: "start", marginTop: "1rem" }}>
            <TextField
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
              fullWidth
              sx={{ ...textFieldStyles, marginTop: "0.3rem" }}
              size="small"
              type={showPassword ? "text" : "password"}
              InputProps={{
                startAdornment: (
                  <LockIcon style={{ color: '#6a49f2' }} />
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box sx={{ textAlign: "start", marginTop: "1rem" }}>
            <TextField
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formValues.confirmPassword}
            
              onChange={handleChange}
              fullWidth
              sx={{ ...textFieldStyles, marginTop: "0.3rem" }}
              size="small"
              type={showPassword ? "text" : "password"}
              InputProps={{
                startAdornment: (
                  <LockIcon style={{ color: '#6a49f2' }} />
                ),
                endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => handleClickShowPassword("confirmPassword")}
                        edge="end"
                      >
                        {showPassword.confirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
              }}
            />
          </Box>
          <br />
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "100%",
              backgroundColor: '#6a49f2',
              padding: "0.5rem 0rem",
              textTransform: "none",
              borderRadius: "25px",
            }}
          >
            Sign up
          </Button>
          <Box sx={{ display: "flex", justifyContent: "start", textAlign: "start", marginTop: "1rem", marginBottom: "1rem" }}>
            <Typography sx={{ marginLeft: "1rem" }}>Already have an Account ?</Typography>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Typography sx={{ color: '#6a49f2', marginLeft: "0.5rem" }}>Login</Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NewSignUp;