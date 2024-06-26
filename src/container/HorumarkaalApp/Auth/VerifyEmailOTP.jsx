import {
  Box,
  Button,
  Card,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { verifyOtp } from "../../../store/actions/authActions";
import { Link } from "react-router-dom";

const VerifyEmailOTP = () => {
  const theme = useTheme();
  // const inputRefs = Array(6).fill().map(() => useRef());
  const inputRefs = [useRef(), useRef(), useRef(), useRef(), useRef(),useRef()];
  const [otpValue, setOTPValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const email = location.state?.email;
  const user_id = location.state?.id;


  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (value.length === 1) {
      if (index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
      const newOTPValue =
        otpValue.slice(0, index) + value + otpValue.slice(index + 1);
      setOTPValue(newOTPValue);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && e.target.value === "") {
      inputRefs[index - 1].current.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedValue = e.clipboardData.getData("text");
    const pastedOTP = pastedValue.slice(0, inputRefs.length);

    for (let i = 0; i < inputRefs.length; i++) {
      const inputRef = inputRefs[i];
      inputRef.current.value = pastedOTP[i];
      handleInputChange({ target: { value: pastedOTP[i] } }, i);
    }
  };

  const handleSubmit = () => {
    if (!email) {
      enqueueSnackbar("No email found. Please try again.", { variant: "error" });
      return;
    }

    if (otpValue.length !== inputRefs.length) {
      enqueueSnackbar("Please enter a complete OTP.", { variant: "error" });
      return;
    }

    dispatch(verifyOtp({email, otp: otpValue, user_id }))
      .then((res) => {
        const token = res.data.data.token
        enqueueSnackbar("OTP verified successfully", { variant: "success" });
        navigate("/login", { state: {token} });
      })
      .catch((err) => {
        console.log(err.message, "error verifying OTP");
        enqueueSnackbar("Invalid OTP. Please try again.", { variant: "error" });
      });
  };

  return (
    <Box sx={{ padding: '4rem 30%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card
        elevation={0}
        sx={{ textAlign: 'center', border: "1px solid #e2e2e2", px: 3, py: 4, height: "70vh", borderRadius: '20px' }}
      >
        <Typography variant="h1" sx={{ fontSize: "1.2rem", fontWeight: "600" }}>
          Verification OTP
        </Typography>
        <Typography sx={{ fontSize: "1rem", color: "grey", mt: 1 }}>
          Please enter your 6 digits pin that we have sent to your email
        </Typography>
        <Box
          sx={{
            height: "30vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            {inputRefs.map((ref, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginRight: 5,
                  marginTop: '5rem'
                }}
              >
                <TextField
                  required
                  inputRef={ref}
                  onChange={(e) => handleInputChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onPaste={handlePaste}
                  margin="normal"
                  fullWidth
                  inputProps={{
                    maxLength: 1,
                    style: { textAlign: "center" },
                    inputMode: "numeric",
                  }}
                  style={{ textAlign: "center", width: "50px" }}
                />
              </div>
            ))}
          </div>
          <Box
            sx={{
              marginTop: "1rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "0.9rem" }}>
              Didn’t receive the OTP?
            </Typography>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography sx={{ color: theme.palette.primary.main }}>
                Resend OTP
              </Typography>
            </Link>
          </Box>
          <Button
            variant="contained"
            sx={{
              marginTop: '3rem',
              marginLeft: "1rem",
              padding: "0.8rem 1.5rem",
              textTransform: "none",
              fontSize: "0.8rem",
              width: '70%'
            }}
            onClick={handleSubmit}
          >
            Verify & Proceed
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default VerifyEmailOTP;
