import api from "../../utils/Api";

export const searchTranslate = (searchTerm, lang) => async (dispatch) => {
    try {
        const res = await api.post("app/search-translate", { query: searchTerm, lang });

        return res.data;
    } catch (err) {
        throw err;
    }
};

export const getTranslate = (word, lang) => async (dispatch) => {
    try {
        const res = await api.post("app/get-translate", { word: word, lang });

        return res.data;
    } catch (err) {
        throw err;
    }
};
export const getConvertTextsoomaali = (text) => async (dispatch) => {
    try {
      const res = await api.post("app/convert-text", { text });
      return res.data;
    } catch (err) {
      throw err;
    }
  };
export const getQuestions = (value) => async (dispatch) => {
    try {
        const res = await api.post("app/get-questions", value);

        return res.data;
    } catch (err) {
        throw err;
    }
};

export const NumberverifyOtp = ({ otp }) => async () => {
    try {
      const response = await api.post('auth/otp/verify', { otp});
  
      return response
    } catch (error) {
  
      throw error;
    }
  };