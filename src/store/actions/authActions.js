import api from "../../utils/Api";

export const userRegister = (formValues) => async (dispatch) => {
  try {
    const res = await api.post("auth/register", formValues);

    console.log('Response from API:', res);

    return res;
  } catch (err) {
    throw err;
  }
};

export const userLogin = (formValues) => async (dispatch) => {
  try {
    const res = await api.post("auth/login", formValues);
    const { token, user } = res.data.data;
    const data = res.data.token;
   const tokendata= localStorage.setItem("token", token);
  console.log(token,"kll")
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: {
        data: {
          token,
          user,
        },
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};


export const forgetPassword = (formValues) => async (dispatch) => {
  try {
    const res = await api.post("auth/password/forgot", formValues);

    console.log('Response from API:', res);

    return res;
  } catch (err) {
    throw err;
  }
};


export const updateUserIsPaidStatus = (userId) => async (dispatch) => {
  try {
    const res = await api.put(`app/user/${userId}`, {is_paid:'1' });

    return res;
  } catch (err) {
    throw err;
  }
};


export const sendVerificationEmail = (email) => async (dispatch) => {
  try {
    const res = await api.post("auth/password/forgot", {email});

    console.log('Response from API:', res);

    return res;
  } catch (err) {
    throw err;
  }
};

export const verifyOtp = ({email, otp, user_id }) => async (dispatch) => {
  try {
    const response = await api.post('auth/otp/verify', {email, otp, user_id });

    return response
  } catch (error) {

    throw error;
  }
};

export const forgetPasswordSendEmail = (formValues) => async (dispatch) => {
  try {
    const res = await api.post("auth/password/forgot", formValues);

    console.log('Response from API:', res);

    return res;
  } catch (err) {
    throw err;
  }
};

export const changePassword = (formValues, token) => async (dispatch) => {
  try {
    const response = await api.post('auth/password/reset',  { ...formValues, token });

    return response
  } catch (error) {

    throw error;
  }
};

export const updatePassword = (formValues, token) => async (dispatch) => {
  try {
    const response = await api.post('auth/password/reset', { ...formValues, token});

    return response
  } catch (error) {

    throw error;
  }
};


export const LOGOUT_USER = 'LOGOUT_USER';

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const userLogout = () => async (dispatch) => {
  try {
    
    await api.get("auth/logout");

   
    localStorage.removeItem('token');

    dispatch({
      type: "LOGOUT_USER",
    });

    return Promise.resolve();
  } catch (err) {
    console.error("Error logging out", err);
    return Promise.reject(err);
  }
};