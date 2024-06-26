import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSnackbar } from "notistack";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { useDispatch } from "react-redux";
import { userRegister } from "../../../../../store/actions/authActions"; // Adjust the path as needed

const NewSignUp = () => {
  const location = useLocation();
  //const phone = location.state?.phone_number;
  const phone = localStorage.getItem('phone_number');
  console.log(phone,"KLL")
  const initialValues = {
    firstname: "",
    lastname: "",
    password: "",
    confirmPassword: "",
    phone: phone,
  };

  const theme = useTheme();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState({ password: false, confirmPassword: false });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [error, setError] = useState("");
  const [formValues, setFormValues] = useState(initialValues);

  const handleClickShowPassword = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "25px",
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues.password !== formValues.confirmPassword) {
      setError("Passwords do not match");
      enqueueSnackbar("Passwords do not match", { variant: "error" });
      return;
    }
  
    setLoading(true);
  
    const { firstname, lastname, password, phone } = formValues;
  
    // Construct the payload object
    const payload = {
      firstname,
      lastname,
      phone,
      password
    };
  
    dispatch(userRegister(payload))
      .then(() => {
        enqueueSnackbar("User registered successfully", { variant: "success" });
        navigate("/login");
       
      })
      .catch((err) => {
        console.error("Error registering user:", err.message);
        if (err.response && err.response.data && err.response.data.phone) {
          enqueueSnackbar(err.response.data.phone[0], { variant: "error" });
        } else {
          enqueueSnackbar(err.message, { variant: "error" });
        }
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
              name="firstname"
              value={formValues.firstname}
              onChange={handleChange}
              fullWidth
              sx={{ ...textFieldStyles, marginTop: "0.3rem" }}
              size="small"
              placeholder="First Name"
              InputProps={{
                startAdornment: (
                  <PersonIcon style={{ color: '#6a49f2' }} />
                ),
              }}
            />
          </Box>
          <Box sx={{ textAlign: "start", marginTop: "1rem" }}>
            <TextField
              name="lastname"
              value={formValues.lastname}
              onChange={handleChange}
              fullWidth
              sx={{ ...textFieldStyles, marginTop: "0.3rem" }}
              size="small"
              placeholder="Last Name"
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
              type={showPassword.password ? "text" : "password"}
              InputProps={{
                startAdornment: (
                  <LockIcon style={{ color: '#6a49f2' }} />
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => handleClickShowPassword("password")}
                      edge="end"
                    >
                      {showPassword.password ? <VisibilityOff /> : <Visibility />}
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
              type={showPassword.confirmPassword ? "text" : "password"}
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
          {error && (
            <Typography color="error" sx={{ marginTop: "1rem" }}>
              {error}
            </Typography>
          )}
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
            disabled={loading}
          >
            {loading ? "Loading..." : "Sign up"}
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