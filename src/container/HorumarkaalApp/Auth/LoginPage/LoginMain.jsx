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
import { useDispatch } from "react-redux";
import { userLogin } from "../../../../store/actions/authActions";

const Login_Main = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  //const { phone, password } = location.state || {};
  
  const phoneNumber = localStorage.getItem('phone_number');



let phone = typeof phoneNumber === 'string' ? phoneNumber.trim() : '';



  phone = phone.replace(/\D/g, '');

  
  if (!phone.startsWith('+252')) {
    phone = '+252' + phone.substring(1);
  }
  console.log(phone, "phone num")
  const initialValues = {
    phone: phone,
    password: "",
  };
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

    dispatch(userLogin(formValues))
      .then((res) => {

        const isPaid = res.data.data.user.is_paid === "1";

        setFormValues(initialValues);

        navigate("/select-language");

      })
      .catch((err) => {

        enqueueSnackbar("Please enter valid phone password", {
          variant: "error",
        });

        console.log(err);
      });
  };




  return (
    <>


        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh', backgroundColor:'#6a49f2'}}>
            <Box sx={{backgroundColor:'white', padding:'3rem', borderRadius:'20px'}}>
            <Box sx={{textAlign:'center'}}>
          <Typography variant="h1" sx={{ fontSize: "3rem", fontWeight: "900" }}>
            Login
          </Typography>
        </Box>

        <Box
          sx={{ width: "100%", marginTop: "3rem" }}
          component="form"
          onSubmit={handleSubmit}
        >
          <Box sx={{ textAlign: "start", marginTop: "1rem" }}>
            <TextField
              name="phone"
              placeholder="phone"
              value={formValues.phone}
              onChange={handleChange}
              fullWidth
              sx={{ ...textFieldStyles, marginTop: "0.3rem" }}
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="start"
                    >
                      <phoneIcon
                        style={{ color: theme.palette.primary.main }}
                      />
                    </IconButton>
                  </InputAdornment>
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
                  <InputAdornment position="start">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="start"
                    >
                      <LockIcon style={{ color: theme.palette.primary.main }} />
                    </IconButton>
                  </InputAdornment>
                ),

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
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              textAlign: "start",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            <Link to="/forget-password" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: theme.palette.primary.main,
                  marginLeft: "0.5rem",
                }}
              >
                Forget Password
              </Typography>
            </Link>
          </Box>

          {/* <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              textAlign: "start",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            <Link to="/verify-otp" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: theme.palette.primary.main,
                  marginLeft: "0.5rem",
                }}
              >
                OTP test screen
              </Typography>
            </Link>
          </Box> */}
<br/>
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "100%",
              padding: "0.5rem 0rem",
              textTransform: "none",
              borderRadius: "25px",
            }}
          >
            Login
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              textAlign: "start",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            <Typography sx={{ marginLeft: "1rem" }}>
              Don't have an Account ?
            </Typography>
            <Link to="/new-password" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: theme.palette.primary.main,
                  marginLeft: "0.5rem",
                }}
              >
                Signup
              </Typography>
            </Link>
          </Box>

          {/* {loading ? (
                    <Loader />
                  ) : (
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        width: "100%",
                        padding: "0.5rem 0rem",
                        textTransform: "none",
                      }}
                    >
                      Sign up
                    </Button>
                  )} */}
        </Box>
            </Box>
        </Box>


    </>
  );
};

export default Login_Main;
