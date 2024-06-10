import React, { useEffect, useState } from "react";
import { Box, Button, Card, IconButton, InputAdornment, TextField, Typography, useTheme } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { changePassword } from "../../../../store/actions/authActions";
import { useSnackbar } from "notistack";

const ChangePassword = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation()
  const dispatch = useDispatch();
  const token = location.state?.token;

  const [formValues, setFormValues] = useState({
    password: "",
    password_confirmation: "",

  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };
const {enqueueSnackbar} = useSnackbar()


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changePassword(formValues, token))
      .then((res) => {
        // alert("Password changed successfully!");
        enqueueSnackbar("Password changed successfully", { variant: "success" });

        navigate("/login");
      })
      .catch((err) => {
        // alert("Error changing password. Please try again.");
        console.error(err);
        enqueueSnackbar("Error changing password", { variant: "error" });

      });
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt:10
        }}
      >
       <Card padding={'3rem'}>

       <Box sx={{ textAlign: "center", display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', padding:'4rem', paddingBottom: "2rem" }}>
          <Typography variant="h1" sx={{ fontSize: "2rem", fontWeight: "600" }}>
            Change Your Password
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1rem", color: "grey" }}>
            Input your new desired password in the input fields below to create a new password.
          </Typography>

          <form onSubmit={handleSubmit}>
            <Box sx={{ textAlign: "start", marginTop: "1rem" }}>
              <label>Password</label>
              <TextField
                name="password"
                fullWidth
                sx={{ marginTop: "0.3rem" }}
                size="small"
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

            <Box sx={{ textAlign: "start", marginTop: "1rem" }}>
              <label>Confirm Password</label>
              <TextField
                name="password_confirmation"
                fullWidth
                sx={{ marginTop: "0.3rem" }}
                size="small"
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

            <Button
              type="submit"
              variant="contained"
              sx={{
                width: "100%",
                marginTop: "2rem",
                padding: "0.5rem 0rem",
                textTransform: "none",
                fontSize: "1rem",
              }}
            >
              Confirm
            </Button>
          </form>
        </Box>

       </Card>
      </Box>
    </>
  );
};

export default ChangePassword;


