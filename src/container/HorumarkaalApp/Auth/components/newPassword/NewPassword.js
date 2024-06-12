import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSnackbar } from "notistack";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { userPasswordChange } from "../../../../../features/api"; // Adjust the path as needed
import { userRegister } from "../../../../../store/actions/authActions";
const NewPassword = () => {
  const location = useLocation();
  const phone_number = location.state?.phone_number;
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const initialValues = {
    name: "",
    password: "",
    confirm_password: "",
  };

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState(initialValues);
  const [error, setError] = useState("");

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

  const handleSubmit = async (e) => {
    console.log(formValues.password, formValues.name, phone_number,"OOOPPP")
    e.preventDefault();
    if (formValues.password !== formValues.confirm_password) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    const payload = {
      name: formValues.name,
      password: formValues.password,
      phone_number: phone_number || "",
    };

    try {
      const response = await userRegister(payload);
      if (response.data.success) {
        enqueueSnackbar("Password changed successfully", { variant: "success" });
        navigate("/login");
      } else {
        enqueueSnackbar("Invalid. Please try again.", { variant: "error" });
      }
    } catch (err) {
      console.error("Response Error:", err.message);
      enqueueSnackbar("Invalid response. Please try again.", { variant: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#6a49f2",
      }}
    >
      <Box
        sx={{ backgroundColor: "white", padding: "3rem", borderRadius: "20px" }}
      >
        <Box textAlign={"center"}>
          <Typography variant="h1" sx={{ fontSize: "3rem", fontWeight: "900" }}>
            Create Account
          </Typography>
        </Box>
        <Box
          sx={{ width: "100%", marginTop: "3rem" }}
          component="form"
          onSubmit={handleSubmit}
        >
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
                startAdornment: <PersonIcon style={{ color: "#6a49f2" }} />,
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
                startAdornment: <LockIcon style={{ color: "#6a49f2" }} />,
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
              name="confirm_password"
              placeholder="Confirm Password"
              value={formValues.confirm_password}
              onChange={handleChange}
              fullWidth
              sx={{ ...textFieldStyles, marginTop: "0.3rem" }}
              size="small"
              type={showPassword.confirmPassword ? "text" : "password"}
              InputProps={{
                startAdornment: <LockIcon style={{ color: "#6a49f2" }} />,
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
              backgroundColor: "#6a49f2",
              padding: "0.5rem 0rem",
              textTransform: "none",
              borderRadius: "25px",
            }}
            disabled={loading}
          >
            {loading ? "Loading..." : "Sign up"}
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
              Already have an Account ?
            </Typography>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Typography sx={{ color: "#6a49f2", marginLeft: "0.5rem" }}>
                Login
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NewPassword;
