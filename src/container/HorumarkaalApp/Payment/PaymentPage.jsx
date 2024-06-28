import React, { useState , useEffect} from "react";
// import Page from "../../components/page";
import { Box, Button, InputAdornment, TextField, Typography, useTheme, MenuItem, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { logoutUser, updateUserIsPaidStatus, userLogout } from "../../../store/actions/authActions";
import { useDispatch, useSelector } from "react-redux";

const PaymentPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [selectedOption, setSelectedOption] = useState(localStorage.getItem('selectedOption') || '');

  useEffect(() => {
    localStorage.setItem('selectedOption', selectedOption);
  }, [selectedOption]);

 
  // const [formValues, setFormValues] = useState({ accountNo: "", selectedOption: "" });
  // console.log(formValues,'LLLVVG');
  const [formValues, setFormValues] = useState({
    accountNo: localStorage.getItem("accountNo") || "",
    selectedOption: localStorage.getItem("selectedOption") || ""
  });

  // Update local storage whenever formValues change
  useEffect(() => {
    localStorage.setItem("accountNo", formValues.accountNo);
    localStorage.setItem("selectedOption", formValues.selectedOption);
  }, [formValues]);

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleDropdownChange = (event) => {
    const selectedOption = event.target.value;

    const firstThreeDigits = selectedOption.substring(0, 3);
    setFormValues({ ...formValues, selectedOption, accountNo: firstThreeDigits });
  };

  const userId = useSelector((state)=>state.auth.user.id)


  const dispatch = useDispatch()
  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = "https://api.waafipay.net/asm";
    const requestBody = {
      schemaVersion: "1.0",
      requestId: "unique_requestid",
      timestamp: "client_timestamp",
      channelName: "WEB",
      serviceName: "API_PURCHASE",
      serviceParams: {
        merchantUid: "M0913556",
        apiUserId: "1007227",
        apiKey: "API-1979741904AHX",
        paymentMethod: "MWALLET_ACCOUNT",
        payerInfo: { accountNo: formValues.accountNo },
       
        transactionInfo: {
          referenceId: "RF123444",
          invoiceId: "INV1280215",
          amount: "1",
          currency: "USD",
          description: "direct purchase"
        }
      }
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
      });
      console.log(response,"response")


      if (response.status === 200) {

        const responseData = await response.json();

        // if (responseData.responseMsg === "RCS_SUCCESS") {
          enqueueSnackbar("Payment Approved", { variant: "success" });
          await dispatch(updateUserIsPaidStatus(userId));
          navigate('/select-language');

       // }
        // else {
        //   enqueueSnackbar(responseData.params.description, { variant: "error" });
        // }
      } else {
        enqueueSnackbar(`Error: ${response.status}`, { variant: "error" });
      }
    } catch (error) {
      enqueueSnackbar(`Error: ${error.message}`, { variant: "error" });

    }
  };

  const handleLogout = () => {
    dispatch(userLogout());
    navigate('/login');
  };

  const userName = useSelector((state)=>state.auth.user.firstname)
  console.log(userName)
  return (
<>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor:'#6a49f2'
        }}
      >
 <Box>
          <Button variant="contained" sx={{ position: 'absolute', top: 15, right: 15 }} onClick={handleLogout}>Logout</Button>


<Box sx={{display:'flex', cursor:'pointer', alignItems:'center', position: 'absolute', top: 15, right: 120}} onClick={()=>{
  navigate('/manage-profile')
}}>

<Avatar/>
<Typography sx={{color:'white', fontWeight:'600'}}>{userName}</Typography>

</Box>

        </Box>
        <Box sx={{backgroundColor:'white', borderRadius:'20px', padding:'3rem'}}>
          <Box>
            <Typography variant="h1" sx={{ fontSize: '2rem', fontWeight: '700' }}>
              Pay with Waffi Pay
             </Typography>
          </Box>
          <Box
            sx={{ width: "100%", marginTop: "3rem" }}
            component="form"
            onSubmit={handleSubmit}
          >
            <Box sx={{ textAlign: "start", marginTop: "1rem" }}>
              <TextField
                select
                label="Select Method"
                value={formValues.selectedOption}
                onChange={handleDropdownChange}
                fullWidth
                sx={{ marginTop: "1rem" }}
                size="small"
              >

                <MenuItem value="090"> Sahal</MenuItem>
                <MenuItem value="061">EVCPlus</MenuItem>
                <MenuItem value="063">Zaad</MenuItem>
              </TextField>
              <br/>
              <br/>

              {formValues.selectedOption && (
                <TextField
                  name="accountNo"
                  placeholder="Enter Account Number"
                  value={formValues.accountNo}
                  onChange={handleChange}
                  fullWidth
                  sx={{ marginTop: "0.3rem" }}
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountBalanceIcon style={{ color: theme.palette.primary.main }} />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            </Box>
            <br />
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
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
</>
  );
};

export default PaymentPage;
