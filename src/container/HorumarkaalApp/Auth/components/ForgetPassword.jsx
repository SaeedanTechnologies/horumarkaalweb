import React, { useState } from "react";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { forgetPasswordSendEmail } from "../../../../store/actions/authActions";
import { useSnackbar } from "notistack";

const ForgetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({ email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const {enqueueSnackbar} = useSnackbar()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgetPasswordSendEmail(formValues))
      .then((res) => {
        const { id } = res.data.data;
        // alert("Email sent successfully!");
        enqueueSnackbar("Email sent successfully", { variant: "success" });

        navigate('/verify-password-otp',  { state: { email: formValues.email , id} })

      })
      .catch((err) => {
        // alert("Error sending email. Please try again.");
        console.error(err);
        enqueueSnackbar("Email not send", { variant: "error" });

      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mt:5
      }}
    >
     <Card sx={{padding:'3rem 0rem'}}>
     <Box sx={{ display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', textAlign: "center", paddingBottom: "2rem", }}>
        <Typography variant="h1" sx={{ fontSize: "2rem", fontWeight: "600" }}>
          Forget Your Password
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "1rem", color: "grey", width:'50%' }}>
          Don’t worry we can help you out! if you still remember your email
          address you can quickly reset your password.
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box sx={{ textAlign: "start", marginTop: "1rem" }}>
            <label htmlFor="email">Email</label>
            <TextField
              type="email"
              required
              fullWidth
              sx={{ marginTop: "1rem" }}
              size="small"
              name="email"
              id="email"
              value={formValues.email}
              onChange={handleChange}
              label="Email"
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
            Request password change
          </Button>
        </form>
      </Box>
     </Card>
    </Box>
  );
};

export default ForgetPassword;
