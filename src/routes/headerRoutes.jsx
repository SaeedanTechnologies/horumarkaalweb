import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from 'container/home-screen';
import Pricing from 'container/pricing';
import Aboutus from 'container/about-us';
import Reviews from 'container/reviews';
import Contact from 'component/contact';
import Faq from 'container/faq';
import Bloglist from 'container/blog-list';
import Blogsingle from 'container/blog-single';
import Signup_Main from '../container/HorumarkaalApp/Auth/SignupPage/Signup_Main';
import LoginMain from '../container/HorumarkaalApp/Auth/LoginPage/LoginMain';
import PaymentPage from '../container/HorumarkaalApp/Payment/PaymentPage';
import LanguageMain from '../container/HorumarkaalApp/LanguagesPage/LanguageMain/LanguageMain';
import SelectLanguageMain from '../container/HorumarkaalApp/LanguagesPage/SelectLanguagePage/SelectLanguageMain';
import Quiz from '../container/HorumarkaalApp/Quizes/QuizMain';
import VerifyEmailOTP from '../container/HorumarkaalApp/Auth/VerifyEmailOTP';
import ForgetPassword from '../container/HorumarkaalApp/Auth/components/ForgetPassword';
import ChangePassword from '../container/HorumarkaalApp/Auth/components/ChangePassword';
import VerifyPasswordOTP from '../container/HorumarkaalApp/Auth/components/VerifyPasswordOTP';
import PrivateRoute from '../container/HorumarkaalApp/PrivateRoute' // Adjust the path according to your file structure
import ManageProfileMain from '../container/HorumarkaalApp/ManageProfile/ManageProfileMain';
import NumberVerifcationOtp from '../container/HorumarkaalApp/Auth/components/phoneNumber/NumberVerifcationOtp';
import NewPassword from '../container/HorumarkaalApp/Auth/components/newPassword/NewPassword';

const HeaderRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/review" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog-list" element={<Bloglist />} />
        <Route path="/blog-single" element={<Blogsingle />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/sign-up" element={<Signup_Main />} />
        <Route path="/login" element={<LoginMain />} />
        <Route path="/verify-email" element={<VerifyEmailOTP />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/verify-password-otp" element={<VerifyPasswordOTP />} />
        <Route path="/verify-number-otp" element={<NumberVerifcationOtp />} />
        <Route path="/new-password" element={<NewPassword />} />
        {/* Private Routes */}
        <Route path="/payment" element={<PrivateRoute element={PaymentPage} />} />
        <Route path="/language-main" element={<PrivateRoute element={LanguageMain} />} />
        <Route path="/select-language" element={<PrivateRoute element={SelectLanguageMain} />} />
       

        <Route path="/quiz" element={<PrivateRoute element={Quiz} />} />
        <Route path="/manage-profile" element={<PrivateRoute element={ManageProfileMain} />} />

      </Routes>
    </>
  );
};

export default HeaderRoutes;
