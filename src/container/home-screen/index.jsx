import React, { useEffect, useState } from "react";
import { TextField, Typography } from "@mui/material";

import Shape1 from "assets/banner-shape1.png";
import Shape2 from "assets/banner-shape2.png";
import Shape3 from "assets/banner-shape3.png";
import Appstoreblue from "assets/appstore_blue.png";
import AppstoreWhite from "assets/appstore_white.png";
import Googleplaywhite from "assets/googleplay_blue.png";
import Googleplayblue from "assets/googleplay_white.png";
import Used1 from "assets/used01.png";
import Used2 from "assets/used02.png";
import Used3 from "assets/used03.png";
import Used4 from "assets/used04.png";
import Download from "assets/download.png";
import Followers from "assets/followers.png";
import Reviews from "assets/reviews.png";
// import BannerImg from 'assets/banner-image.png'
// story img
import Story1 from "assets/story01.png";
import Story2 from "assets/story02.png";
import Story3 from "assets/story03.png";
import Story4 from "assets/story04.png";
import Story5 from "assets/story05.png";
import Story6 from "assets/story06.png";
import Story7 from "assets/story07.png";
import Story8 from "assets/story08.png";
import Story9 from "assets/story09.png";

import Paypal from "assets/paypal.png";
import Spoty from "assets/spoty.png";
import Shopboat from "assets/shopboat.png";
import Slack from "assets/slack.png";
import Envato from "assets/envato.png";
import SecureData from "assets/secure_data.png";
import Functional from "assets/functional.png";
import Livechat from "assets/live-chat.png";
import SupportImg from "assets/support.png";
import FeatureFrame from "assets/features_frame.png";
import AboutFrame from "assets/about-frame.png";
import AboutScreen from "assets/about-screen.png";
import CountriesImg from "assets/countries.png";
import Modern1 from "assets/modern01.png";
import Modern2 from "assets/modern02.png";
import Modern3 from "assets/modern03.png";

import Downloadapp from "assets/download_app.jpg";
import CreateAccount from "assets/create_account.jpg";
import EnjoyApp from "assets/enjoy_app.jpg";
import BannerShap1 from "assets/banner-shape1.png";
import BannerShap2 from "assets/banner-shape2.png";
import BannerShap3 from "assets/banner-shape3.png";
import TtThumb from "assets/yt_thumb.png";
import PlayIcon from "assets/play_icon.png";

import TestimonialUser1 from "assets/testimonial_user1.png";
import TestimonialUser2 from "assets/testimonial_user2.png";
import TestimonialUser3 from "assets/testimonial_user3.png";
import AvatarTestimonial from "assets/avtar_testimonial.png";
// import Standard from 'assets/standard.png'
// import Premium from 'assets/premium.png'
// import Unlimited from 'assets/unlimited.png'
import DownloadScreen1 from "assets/download-screen01.png";
import DownloadScreen2 from "assets/download-screen02.png";
import Screen1 from "assets/screen-1.png";
import Screen2 from "assets/screen-2.png";
import Screen3 from "assets/screen-3.png";
import Screen4 from "assets/screen-4.png";
import Screen5 from "assets/screen-5.png";
import iconBg from "assets/icon_bg.png";
// pricing Services
import EvcPlus1 from "assets/pricePannel/evcPlusService-1.jpg";
import SahalService1 from "assets/pricePannel/sahalService-2.png";
import ZaadService from "assets/pricePannel/zaadService-3.png";
// All Image
import BannerImage from "assets/mobilePics/BannerImage.png";
import EngtoArabic from "assets/mobilePics/engtoArabic.svg";
import Congrats from "assets/mobilePics/congrats.svg";
import HelpImg from "assets/mobilePics/help.svg";
import History from "assets/mobilePics/history.svg";
import Profile from "assets/mobilePics/profile.svg";
import Signin from "assets/mobilePics/signin.svg";
import Signup from "assets/mobilePics/signup.svg";
import Exercise from "assets/mobilePics/exercise.svg";
import { useSnackbar } from "notistack";
// latest images
import SigninSnippet from "assets/smallScreensSnippets/signin.svg";
import Aboutscreen from "assets/smallScreensSnippets/about-screen.svg";
import Arabic from "assets/smallScreensSnippets/arabic.svg";
import CreateAccount1 from "assets/smallScreensSnippets/create_account.svg";
import CreateAccount2 from "assets/smallScreensSnippets/createAccount.svg";
import Somali from "assets/smallScreensSnippets/engtoSomali.svg";
import ExerciseAndQuizes from "assets/smallScreensSnippets/exerciseAndQuizes.svg";
import Exercises from "assets/smallScreensSnippets/exercises.svg";
import Glossary from "assets/smallScreensSnippets/multiGlossary.svg";
import MultilingualGlossary from "assets/smallScreensSnippets/multilingualGlossary.svg";
import SignupSnippet from "assets/smallScreensSnippets/signup.svg";
import MobileLogo from "assets/smallScreensSnippets/mobileLogo.svg";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
// import required modules
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { Main } from "./style";
import { subjects } from "../../modal/subject";
import { AccountTree } from "@mui/icons-material";
import ConfirmDialog from "./ConfirmDialog";
import { Button } from "bootstrap";
import { useNavigate } from "react-router-dom";
import { generateOtp } from "../../features/api";
const HomeScreen = () => {
  const navigate = useNavigate();
  const [monthlyPlan, setMonthlyPlan] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [accountNo, setAccountNo] = useState(
    localStorage.getItem("accountNo") || ""
  );
  const [formValues, setFormValues] = useState({
    accountNo: "",
    selectedOption: "",
  });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [serviceType, setServiceType] = useState("");
  useEffect(() => {
    const accountNoFromStorage = localStorage.getItem("accountNo") || "";
    setAccountNo(accountNoFromStorage);
  }, []);
  const [selectedOption, setSelectedOption] = useState("");
 
  useEffect(() => {
    const savedOption = localStorage.getItem("selectedOption");
    if (savedOption) {
      setSelectedOption(savedOption);
    }
  }, []);
  const [evcValue, setEvcValue] = useState("");
  const [sahalValue, setSahalValue] = useState("");
  const [zaadValue, setZaadValue] = useState("");
  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleDropdownChange = (event) => {
    const selectedOption = event.target.value;

    const firstThreeDigits = selectedOption.substring(0, 3);
    setFormValues({
      ...formValues,
      selectedOption,
      accountNo: firstThreeDigits,
    });
  };
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const savedOption = localStorage.getItem("selectedOption");
    if (savedOption) {
      setSelectedOption(savedOption);
    }
  }, []);

  const handletoggleScreen = () => {
    setMonthlyPlan(!monthlyPlan);
  };
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleInputChange = (serviceType, value) => {
    const regex = /^[0-9]{0,10}$/;
    if (!regex.test(value)) {
      return;
    }
    if (value.trim() === "") {
      switch (serviceType) {
        case "EVC":
          setEvcValue("");
          break;
        case "Sahal":
          setSahalValue("");
          break;
        case "Zaad":
          setZaadValue("");
          break;
        default:
          break;
      }
    } else {
      switch (serviceType) {
        case "EVC":
          setEvcValue(value);
          break;
        case "Sahal":
          setSahalValue(value);
          break;
        case "Zaad":
          setZaadValue(value);
          break;
        default:
          break;
      }
    }
  };


  const handleBuyClick = (serviceType) => {
    setServiceType(serviceType);
    setDialogOpen(true);
  };

  const handleConfirm = async () => {
    let selectedValue;
  
    switch (serviceType) {
      case 'EVC':
        selectedValue = evcValue;
        break;
      case 'Sahal':
        selectedValue = sahalValue;
        break;
      case 'Zaad':
        selectedValue = zaadValue;
        break;
      default:
        break;
    }
  
    // Validate the selected value
    let validPrefix = false;
  
    switch (serviceType) {
      case 'EVC':
        validPrefix = selectedValue.startsWith('061');
        break;
      case 'Sahal':
        validPrefix = selectedValue.startsWith('090');
        break;
      case 'Zaad':
        validPrefix = selectedValue.startsWith('063');
        break;
      default:
        break;
    }
  
    if (!validPrefix) {
      enqueueSnackbar(`Invalid number for ${serviceType}. It should start with ${serviceType === 'EVC' ? '061' : serviceType === 'Sahal' ? '090' : '063'}.`, { variant: 'error' });
      setDialogOpen(false);
      return;
    }
  
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
        payerInfo: { accountNo: selectedValue },
        transactionInfo: {
          referenceId: "RF123444",
          invoiceId: "INV1280215",
          amount: "8",
          currency: "USD",
          description: "direct purchase"
        }
      }
    };
    const number = selectedValue;
    const phone_number= selectedValue;
    localStorage.setItem('phone_number', phone_number)
    
    console.log(number,"HJKLHJKL")
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
      });
  
      if (response.status === 200) {
        const responseData = await response.json();
  
        if (responseData.responseMsg === "RCS_SUCCESS") {
          enqueueSnackbar("Payment Approved", { variant: "success" });
          navigate('/new-password');
        } else {
          enqueueSnackbar(responseData.params.description, { variant: "error" });
        }
      } else {
        enqueueSnackbar('API call failed', { variant: 'error' });
        // await sendOtp(number);
        // navigate('/new-password');
      }
    } catch (error) {
      enqueueSnackbar(`Error: ${error.message}`, { variant: "error" });
      // await sendOtp(number);
      // navigate('/new-password');
    }
    // navigate('/new-password');
    // await sendOtp(number);
    setDialogOpen(false);
  };
  
  // const sendOtp = async (number) => {
  //   let phone_number = number.trim(); 

  //   // Remove any non-numeric characters
  //   phone_number = phone_number.replace(/\D/g, '');
  
  //   // Add the +252 prefix if it doesn't already exist
  //   if (!phone_number.startsWith('+252')) {
  //     phone_number = '+252' + phone_number.substring(1);
  //   }
  //   // localStorage.setItem('phone_number', phone_number)
  //   try {
  //     const otpResponse = await fetch("https://adminapp.horumarkaalweb.app/api/app/send-otp", {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ phone_number }) 
  //     });
  
  //     if (otpResponse.ok) {
  //       enqueueSnackbar("OTP sent successfully", { variant: "success" });
  //       navigate('/verify-number-otp');
  //     } else {
  //       enqueueSnackbar('Failed to send OTP', { variant: 'error' });
  //     }
  //   } catch (otpError) {
  //     enqueueSnackbar(`Error: ${otpError.message}`, { variant: "error" });
  //   }
  // };
  
  
  // const handleConfirm = async () => {
  //   let selectedValue;
  
  //   switch (serviceType) {
  //     case 'EVC':
  //       selectedValue = evcValue;
  //       break;
  //     case 'Sahal':
  //       selectedValue = sahalValue;
  //       break;
  //     case 'Zaad':
  //       selectedValue = zaadValue;
  //       break;
  //     default:
  //       break;
  //   }
  
  //   const apiUrl = "https://api.waafipay.net/asm";
  //   const requestBody = {
  //     schemaVersion: "1.0",
  //     requestId: "unique_requestid",
  //     timestamp: "client_timestamp",
  //     channelName: "WEB",
  //     serviceName: "API_PURCHASE",
  //     serviceParams: {
  //       merchantUid: "M0913556",
  //       apiUserId: "1007227",
  //       apiKey: "API-1979741904AHX",
  //       paymentMethod: "MWALLET_ACCOUNT",
  //       payerInfo: { accountNo: selectedValue },
  //       transactionInfo: {
  //         referenceId: "RF123444",
  //         invoiceId: "INV1280215",
  //         amount: "1",
  //         currency: "USD",
  //         description: "direct purchase"
  //       }
  //     }
  //   };
  //   const number = selectedValue
    
  //   try {
  //     const response = await fetch(apiUrl, {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(requestBody)
  //     });
  
  //     if (response.status === 200) {
  //       const responseData = await response.json();
        
  //       if (responseData.responseMsg === "RCS_SUCCESS") {
  //         enqueueSnackbar("Payment Approved", { variant: "success" });
  //         navigate('/verify-password-otp');
  //       } else {
  //         // const otpResponse = await generateOtp(number);
  //         // if (otpResponse.responseMsg === "OTP_GENERATED_SUCCESS") {
  //         //   enqueueSnackbar("OTP Generated successfully", { variant: "success" });
  //         //   navigate('/verify-password-otp');
  //         // } else {
  //         //   enqueueSnackbar(otpResponse.params.description, { variant: "error" });
  //         // }
  //         enqueueSnackbar(responseData.params.description, { variant: "error" });
          
  //       }
  //     } else {
  //       // If first API call fails, generate OTP
       
  
      
  //     }
  //   } catch (error) {
  //     enqueueSnackbar(`Error: ${error.message}`, { variant: "error" });
  //      navigate("/new-password", { state: { number } });
  //   }
  
  //   setDialogOpen(false);
  // };
  

  return (
    <>
    <Main>
    {/* Banner-Section-Start */}
    <section className="banner_section">
      {/* container start */}
      <div className="container">
        {/* row start */}
        <div className="row">
          {/* shape animation  */}
          <span className="banner_shape1">
            {" "}
            {/* <img src={BannerImage} alt="image" />{" "} */}
          </span>
          <span className="banner_shape2">
            {" "}
            {/* <img src={Shape2} alt="image" />{" "} */}
          </span>
          <span className="banner_shape3">
            {" "}
            {/* <img src={Shape3} alt="image" />{" "} */}
          </span>
          <div
            className="col-lg-6 col-md-12"
            data-aos="fade-right"
            data-aos-duration={1500}
          >
            {/* banner text */}
            <div className="banner_text">
              {/* h1 */}
              <h1>Welcome to Horumarkaal app</h1>
              {/* p */}
              <p>
                Learning multilingual technical and academic terms has never
                been easier!
              </p>
            </div>
            {/* app buttons */}
            {/* <ul className="app_btn">
              <li>
                <a href="#">
                  <img
                    className="blue_img"
                    src={Appstoreblue}
                    alt="image"
                  />
                  <img
                    className="white_img"
                    src={AppstoreWhite}
                    alt="image"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="blue_img" src={Googleplaywhite} alt="image" />
                  <img className="white_img" src={Googleplayblue} alt="image" />
                </a>
              </li>
            </ul> */}
            {/* users */}
            {/* <div className="used_app">
              <ul>
                <li>
                  <img src={Used1} alt="image" />
                </li>
                <li>
                  <img src={Used2} alt="image" />
                </li>
                <li>
                  <img src={Used3} alt="image" />
                </li>
                <li>
                  <img src={Used4} alt="image" />
                </li>
              </ul>
              <p>
                12M + <br /> used this app
              </p>
            </div> */}
          </div>
          {/* banner slides start */}
          <div
            className="col-lg-6 col-md-12"
            data-aos="fade-in"
            data-aos-duration={1500}
          >
            <div className="banner_image">
              <img
                className="moving_animation"
                src={BannerImage}
                alt="image"
              />
            </div>
          </div>
          {/* banner slides end */}
        </div>
        {/* row end */}
      </div>
      {/* container end */}
      {/* wave animation start */}
      <div>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x={48}
              y={0}
              fill="rgba(255,255,255,0.7"
            />
            <use
              xlinkHref="#gentle-wave"
              x={48}
              y={3}
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x={48}
              y={5}
              fill="rgba(255,255,255,0.3)"
            />
            <use xlinkHref="#gentle-wave" x={48} y={7} fill="#f6f4fe" />
          </g>
        </svg>
      </div>
      {/* wave animation end */}
    </section>
    {/* Banner-Section-end */}
    {/* Trusted Section start */}
    <section className="row_am trusted_section">
      {/* container start */}
      <div className="container">
        <div
          // data-aos="fade-up"
          className="section_title"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-delay={100}
        >
          {/* h2 */}

          <h2>
            {" "}
            <span>35 </span>Maado ayuu ka kooban yahay appku oo isugu jira
            Ereyada Farsamada iyo Ereyda Akadimiga ah
          </h2>
          <h3>
            {/* <span>35</span> Subjects of key Academic and Technical Terminologies <br /> */}
            يتالف التطبيق من المصطلحات الفنية والاكاديمية لـ{" "}
            <span className="number-clr">35</span> مادة أو موضوع
            <br />
          </h3>
          {/* p */}
          <p>
            This app consist about 35 Subjects of key Academic and
            Technical Terminologies
          </p>
        </div>
        {/* logos slider start */}
        <div className="company_logos">
          <div id="company_slider">
            <Swiper
              style={{ height: "90px" }}
              slidesPerView={4}
              // spaceBetween={5}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              {subjects.map((item, index) => (
                <SwiperSlide className="item" key={item.id}>
                  <div className="logo">
                    <p style={{ cursor: "pointer", fontWeight: "bolder" }}>
                      {item.title}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/* logos slider end */}
      </div>
      {/* container end */}
    </section>
    {/* Trusted Section ends */}
    {/* Features-Section-Start */}
    <section className="row_am features_section" id="features">
      {/* container start */}
      <div className="container">
        <div
          className="section_title"
          data-aos="fade-up"
          // data-aos="fade-up"
          // data-aos-duration={1500}
          // data-aos-delay={100}
        >
          {/* h2 */}
          <h2>
            <span>Features</span> of Horumarkaal app!
          </h2>
          {/* p */}
          <p>
            Horumarkaal App is in English alphabetical order to help users
            instant access to more than 150,000 technical terms (text and
            audio) covering key major academic and educational scientific
            terms and technical terminologies of 35 subjects and fields and
            professions!
          </p>
        </div>
        <div className="feature_detail">
          {/* feature box left */}
          <div className="left_data feature_box">
            {/* feature box */}
            <div
              className="data_block"
              data-aos="fade-right"
              data-aos-duration={1500}
            >
              <div className="icon">
                <img src={SecureData} alt="image" />
              </div>
              <div className="text">
                <h4>interactive Learning </h4>
                <p>
                  Offering users a flexible &amp; convenient interactive
                  personal learning
                </p>
              </div>
            </div>
            {/* feature box */}
            <div
              className="data_block"
              data-aos="fade-right"
              data-aos-duration={1500}
            >
              <div className="icon">
                <img src={Functional} alt="image" />
              </div>
              <div className="text">
                <h4>Flexibility and Convenience</h4>
                <p>
                  Fully functional Flexibility and Convenience Learners have
                  the freedom to choose preferred language to learn.
                </p>
              </div>
            </div>
          </div>
          {/* feature box right */}
          <div className="right_data feature_box">
            {/* feature box */}
            <div
              className="data_block"
              data-aos="fade-left"
              data-aos-duration={1500}
            >
              <div className="icon">
                <img src={Livechat} alt="image" />
              </div>
              <div className="text">
                <h4>Text &amp; Audio </h4>
                <p>
                  Live chat Text &amp; Audio Multilingual search and Instant
                  access to text and audio
                </p>
              </div>
            </div>
            {/* feature box */}
            <div
              className="data_block"
              data-aos="fade-left"
              data-aos-duration={1500}
            >
              <div className="icon">
                <img src={SupportImg} alt="image" />
              </div>
              <div className="text">
                <h4>Accessibility </h4>
                <p>
                  24-7 Support Accessibility Provide regular access to 35
                  subjects to enhance accessibility &amp; inclusivity
                </p>
              </div>
            </div>
          </div>
          {/* feature image */}
          <div
            className="feature_img"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-delay={100}
          >
            <img src={Exercise} alt="image" />
          </div>
        </div>
      </div>
      {/* container end */}
    </section>
    {/* Features-Section-end */}
    {/* About-App-Section-Start */}
    <section className="row_am about_app_section">
      {/* container start */}
      <div className="container">
        {/* row start */}
        <div className="row">
          <div className="col-lg-6">
            {/* about images */}
            <div
              className="about_img"
              data-aos="fade-in"
              data-aos-duration={1500}
            >
              <div className="frame_img">
                <img
                  className="moving_position_animatin"
                  src={Signin}
                  alt="image"
                />
              </div>
              <div className="screen_img">
                <img
                  className="moving_animation"
                  src={Aboutscreen}
                  alt="image"
                  style={{ borderRadius: "12px" }}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            {/* about text */}
            <div className="about_text">
              <div
                className="section_title"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-delay={100}
              >
                {/* h2 */}
                <h2>
                  Some awesome words <span>about app.</span>
                </h2>
                {/* p */}
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry lorem Ipsum has been the industrys
                  standard dummy text ever since the when an unknown printer
                  took a galley of type and. Lorem ipsum dolor sit amet.
                </p>
              </div>
              {/* UL */}
              <ul
                className="app_statstic"
                id="counter"
                data-aos="fade-in"
                data-aos-duration={1500}
              >
                <li>
                  <div className="icon">
                    <img src={Download} alt="image" />
                  </div>
                  <div className="text">
                    <p>
                      <span className="counter-value" data-count={17}>
                        0
                      </span>
                      <span>M+</span>
                    </p>
                    <p>Download</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img src={Followers} alt="image" />
                  </div>
                  <div className="text">
                    <p>
                      {/* <span className="counter-value" data-count={08}>
                  0{" "}
                </span> */}
                      <span>M+</span>
                    </p>
                    <p>Followers</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img src={Reviews} alt="image" />
                  </div>
                  <div className="text">
                    <p>
                      <span className="counter-value" data-count={2300}>
                        1500
                      </span>
                      <span>+</span>
                    </p>
                    <p>Reviews</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img src={CountriesImg} alt="image" />
                  </div>
                  <div className="text">
                    <p>
                      <span className="counter-value" data-count={150}>
                        0
                      </span>
                      <span>+</span>
                    </p>
                    <p>Countries</p>
                  </div>
                </li>
              </ul>
              {/* UL end */}
              <a
                href="#"
                className="btn puprple_btn"
                data-aos="fade-in"
                data-aos-duration={1500}
              >
                START FREE TRIAL
              </a>
            </div>
          </div>
        </div>
        {/* row end */}
      </div>
      {/* container end */}
    </section>
    {/* About-App-Section-end */}
    {/* ModernUI-Section-Start */}
    <section className="row_am modern_ui_section">
      {/* container start */}
      <div className="container">
        {/* row start */}
        <div className="row">
          <div className="col-lg-6">
            {/* UI content */}
            <div className="ui_text">
              <div
                className="section_title"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-delay={100}
              >
                <h2>Beautiful design</h2>
                <p>
                  The app design presents a clean, minimalist approach with
                  a strong focus on usability and visual categorize.
                </p>
              </div>
              <ul className="design_block">
                <li data-aos="fade-up" data-aos-duration={1500}>
                  <h4>Carefully designed</h4>
                  {/* <p>
                    Lorem Ipsum is simply dummy text of the printing and type
                    esetting industry lorem Ipsum has.
                  </p> */}
                </li>
                <li data-aos="fade-up" data-aos-duration={1500}>
                  <h4>Seamless Sync</h4>
                  {/* <p>
                    Simply dummy text of the printing and typesetting inustry
                    lorem Ipsum has Lorem dollar summit.
                  </p> */}
                </li>
                <li data-aos="fade-up" data-aos-duration={1500}>
                  <h4>Access Drive</h4>
                  {/* <p>
                    Printing and typesetting industry lorem Ipsum has been the
                    industrys standard dummy text of type setting.
                  </p> */}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            {/* UI Image */}
            <div
              className="ui_images"
              data-aos="fade-in"
              data-aos-duration={1500}
            >
              <div className="left_img">
                <img
                  className="moving_position_animatin"
                  style={{ borderRadius: "12px" }}
                  src={Somali}
                  alt="image"
                />
              </div>
              {/* UI Image */}
              <div className="right_img">
                <img
                  className="moving_position_animatin"
                  src={SecureData}
                  alt="image"
                />
                <img
                  className="moving_position_animatin"
                  src={MultilingualGlossary}
                  alt="image"
                />
                <img
                  className="moving_position_animatin"
                  src={CreateAccount2}
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
        {/* row end */}
      </div>
      {/* container end */}
    </section>
    {/* ModernUI-Section-end */}
    {/* How-It-Workes-Section-Start */}
    <section className="row_am how_it_works" id="how_it_work">
      {/* container start */}
      <div className="container">
        <div className="how_it_inner">
          <div
            className="section_title"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-delay={300}
          >
            {/* h2 */}
            <h2>
              <span>How it works</span> - 3 easy steps
            </h2>
            {/* p */}
            <p>
              Horumarkaal multilingual application is working as mobile app,
              web app and online mobile app and offline mobile app which
              require enrolment to enable user’s access after registration.
            </p>
          </div>
          <div className="step_block">
            {/* UL */}
            <ul>
              {/* step */}
              <li>
                <div
                  className="step_text"
                  data-aos="fade-right"
                  data-aos-duration={1500}
                >
                  <h4>Download app</h4>
                  <div className="app_icon">
                    <a href="#">
                      <i className="icofont-brand-android-robot" />
                    </a>
                    <a href="#">
                      <i className="icofont-brand-apple" />
                    </a>
                    <a href="#">
                      <i className="icofont-brand-windows" />
                    </a>
                  </div>
                  <p>
                    Horumarkaal multilingual application is working as
                    mobile app, web app and online mobile app and offline
                    mobile app which require enrolment to enable user’s
                    access after registration.
                  </p>
                </div>
                <div className="step_number">
                  <h3>01</h3>
                </div>
                <div
                  className="step_img"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                >
                  <img
                    src={MobileLogo}
                    alt="MobileLogo"
                    style={{ borderRadius: "12px" }}
                  />
                </div>
              </li>
              {/* step */}
              <li>
                <div
                  className="step_text"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                >
                  <h4>Create account</h4>
                  <p>
                    Pay one-time fee and sign up for App account. One
                    account for all devices.
                  </p>
                </div>
                <div className="step_number">
                  <h3>02</h3>
                </div>
                <div
                  className="step_img"
                  data-aos="fade-right"
                  data-aos-duration={1500}
                >
                  <img
                    src={SignupSnippet}
                    alt="SignupSnippet"
                    style={{ borderRadius: "12px" }}
                  />
                </div>
              </li>
              {/* step */}
              <li>
                <div
                  className="step_text"
                  data-aos="fade-right"
                  data-aos-duration={1500}
                >
                  <h4>(3) Access and enjoy the app</h4>
                  {/* <span>Have any questions check our <a href="#">FAQs</a></span> */}
                  <p>
                    Discover Horumarkaal app &amp; boost your vocabulary,
                    like never before
                  </p>
                </div>
                <div className="step_number">
                  <h3>03</h3>
                </div>
                <div
                  className="step_img"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                >
                  <img src={ExerciseAndQuizes} alt="image" />
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* video section start */}
        <div
          className="yt_video"
          data-aos="fade-in"
          data-aos-duration={1500}
        >
          <div className="thumbnil">
            <span className="banner_shape1">
              {" "}
              <img src={BannerShap1} alt="image" />{" "}
            </span>
            <span className="banner_shape2">
              {" "}
              <img src={BannerShap2} alt="image" />{" "}
            </span>
            <span className="banner_shape3">
              {" "}
              <img src={BannerShap3} alt="image" />{" "}
            </span>
            <img src={TtThumb} alt="image" />
            <a
              className="popup-youtube play-button"
              data-url="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
              data-toggle="modal"
              data-target="#myModal"
              title="XJj2PbenIsU"
            >
              <span className="play_btn">
                <img src={PlayIcon} alt="image" />
                <div className="waves-block">
                  <div className="waves wave-1" />
                  <div className="waves wave-2" />
                  <div className="waves wave-3" />
                </div>
              </span>
              Let’s see virtually how it works
              <span>Watch video</span>
            </a>
          </div>
        </div>
        {/* video section end */}
      </div>
      {/* container end */}
    </section>
    {/* How-It-Workes-Section-end */}
    {/* Testimonial-Section start */}
    {/* <section className="row_am testimonial_section">
      <div className="container">
        <div
          className="section_title"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-delay={300}
        >
          <h2>
            What our <span>customer say</span>
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typese tting{" "}
            <br /> indus orem Ipsum has beenthe standard dummy.
          </p>
        </div>
        <div
          className="testimonial_block"
          data-aos="fade-in"
          data-aos-duration={1500}
        >
          <div id="testimonial_slider" className="owl-carousel owl-theme">
            <div className="item">
              <div className="testimonial_slide_box">
                <div className="rating">
                  <span>
                    <i className="icofont-star" />
                  </span>
                  <span>
                    <i className="icofont-star" />
                  </span>
                  <span>
                    <i className="icofont-star" />
                  </span>
                  <span>
                    <i className="icofont-star" />
                  </span>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </div>
                <p className="review">
                  “ Lorem Ipsum is simply dummy text of the printing and typese
                  tting us orem Ipsum has been lorem beenthe standar dummy. ”
                </p>
                <div className="testimonial_img">
                  <img src={TestimonialUser1} alt="image" />
                </div>
                <h3>Shayna John</h3>
                <span className="designation">Careative inc</span>
              </div>
            </div>
            <div className="item">
              <div className="testimonial_slide_box">
                <div className="rating">
                  <span>
                    <i className="icofont-star" />
                  </span>
                  <span>
                    <i className="icofont-star" />
                  </span>
                  <span>
                    <i className="icofont-star" />
                  </span>
                  <span>
                    <i className="icofont-star" />
                  </span>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </div>
                <p className="review">
                  “ Lorem Ipsum is simply dummy text of the printing and typese
                  tting us orem Ipsum has been lorem beenthe standar dummy. ”
                </p>
                <div className="testimonial_img">
                  <img src={TestimonialUser2} alt="image" />
                </div>
                <h3>Willium Den</h3>
                <span className="designation">Careative inc</span>
              </div>
            </div>
            <div className="item">
              <div className="testimonial_slide_box">
                <div className="rating">
                  <span>
                    <i className="icofont-star" />
                  </span>
                  <span>
                    <i className="icofont-star" />
                  </span>
                  <span>
                    <i className="icofont-star" />
                  </span>
                  <span>
                    <i className="icofont-star" />
                  </span>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </div>
                <p className="review">
                  “ Lorem Ipsum is simply dummy text of the printing and typese
                  tting us orem Ipsum has been lorem beenthe standar dummy. ”
                </p>
                <div className="testimonial_img">
                  <img src={TestimonialUser3} alt="image" />
                </div>
                <h3>Cyrus Stephen</h3>
                <span className="designation">Careative inc</span>
              </div>
            </div>
          </div>
          <div className="total_review">
            <div className="rating">
              <span>
                <i className="icofont-star" />
              </span>
              <span>
                <i className="icofont-star" />
              </span>
              <span>
                <i className="icofont-star" />
              </span>
              <span>
                <i className="icofont-star" />
              </span>
              <span>
                <i className="icofont-star" />
              </span>
              <p>5.0 / 5.0</p>
            </div>
            <h3>2578</h3>
            <a href="#">
              TOTAL USER REVIEWS <i className="icofont-arrow-right" />
            </a>
          </div>
          <div className="avtar_faces">
            <img src={AvatarTestimonial} alt="image" />
          </div>
        </div>
      </div>
    </section> */}
    {/* Testimonial-Section end */}
    {/* Pricing-Section */}
    <section className="row_am pricing_section" id="pricing">
      <div className="container">
        <div
          className="section_title"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="300"
        >
          <h2> One Time Payment purchase</h2>
          <p>Local users can buy with bellow mobile payment </p>
        </div>
        {/* <!-- toggle button --> */}
        {/* <div className="toggle_block" data-aos="fade-up" data-aos-duration="1500">
          <span className={`month ${!monthlyPlan ? 'active' : ''}`} >Monthly</span>
          <label className="switch">
            <input type="checkbox" onChange={handletoggleScreen} checked={monthlyPlan} />
            <span className="slider round"></span>
          </label>
          <span className={`years ${!monthlyPlan ? '' : 'active'}`} >Yearly</span>
          <span className="offer">50% off</span>
        </div> */}
        {!monthlyPlan ? (
              <>
                <div
                  className="pricing_pannel monthly_plan active"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  {/* <!-- row start --> */}
                  <div className="row" id="middleSection">
                    {/* <!-- pricing box 1 --> */}
                    <div className="col-md-4">
                      <div className="pricing_block">
                        <div className="icon">
                          <img src={EvcPlus1} alt="image" />
                        </div>
                        <div className="pkg_name">
                          <h3>EVC Plus Service</h3>
                        </div>
                        <span className="price">$8</span>
                        <ul className="benifits">
                          <li>ma ogoshahay inaad iibsato?</li>
                          <li>lacaga inaad bixiso EVCPLUS</li>
                          <li></li>
                        </ul>
                        <Typography>Geli Nambarkaaga</Typography>
                        <TextField
                          type="text"
                          value={evcValue}
                          onChange={(e) =>
                            handleInputChange("EVC", e.target.value)
                          }
                          variant="outlined"
                          size="small"
                         
                          placeholder="061"
                          inputProps={{ maxLength: 10, pattern: "[0-9]*" }}
                        />{" "}
                        <Typography>Enter your number</Typography>
                        <button
                          className="btn white_btn"
                          style={{ marginTop: "128px" }}
                          onClick={() => handleBuyClick("EVC")}
                        >
                          BUY- iibso
                        </button>
                      </div>
                    </div>

                    {/* <!-- pricing box 2 --> */}
                    <div className="col-md-4">
                      <div className="pricing_block highlited_block">
                        <div className="icon">
                          <img src={SahalService1} alt="image" />
                        </div>
                        <div className="pkg_name">
                          <h3>Sahal Service</h3>
                        </div>
                        <span className="price">$8</span>
                        <ul className="benifits">
                          <li>ma ogoshahay inaad iibsato?</li>
                          <li>lacaga inaad bixiso Sahal</li>
                          <li></li>
                        </ul>
                        <TextField
                          type="text"
                          value={sahalValue}
                          onChange={(e) =>
                            handleInputChange("Sahal", e.target.value)
                          }
                          variant="outlined"
                           placeholder="090"
                          size="small"
                          inputProps={{ maxLength: 10, pattern: "[0-9]*" }}
                        />
                        <button
                          className="btn white_btn"
                          style={{ marginTop: "100px" }}
                          onClick={() => handleBuyClick("Sahal")}
                        >
                          BUY-iibso
                        </button>
                      </div>
                    </div>

                    {/* <!-- pricing box 3 --> */}
                    <div className="col-md-4">
                      <div className="pricing_block">
                        <div className="icon">
                          <img src={ZaadService} alt="image" />
                        </div>
                        <div className="pkg_name">
                          <h3>Zaad Service</h3>
                        </div>
                        <span className="price">$8</span>
                        <ul className="benifits">
                          <li>ma ogoshahay inaad iibsato?</li>
                          <li>lacaga inaad bixiso Zaad</li>
                        </ul>
                        <TextField
                          type="text"
                          value={zaadValue}
                          onChange={(e) =>
                            handleInputChange("Zaad", e.target.value)
                          }
                          variant="outlined"
                           placeholder="063"
                          size="small"
                          inputProps={{ maxLength: 10, pattern: "[0-9]*" }}
                        />
                        <button
                          className="btn white_btn"
                          style={{ marginTop: "100px" }}
                          onClick={() => handleBuyClick("Zaad")}
                        >
                          BUY-iibso
                        </button>
                      </div>
                    </div>
                    <ConfirmDialog
                      open={dialogOpen}
                      handleClose={() => setDialogOpen(false)}
                      handleConfirm={handleConfirm}
                    />
                  </div>
                  {/* <!-- row end --> */}
                </div>
                {/* <!-- pricing box monthly end --> */}
              </>
            ) : (
              <>
                {/* <!-- pricing box yearly start --> */}
                <div
                  className={`pricing_pannel yearly_plan ${
                    monthlyPlan ? "active" : ""
                  }`}
                >
                  <div className="row">
                    {/* <!-- pricing box 1 --> */}
                    <div className="col-md-4">
                      <div className="pricing_block">
                        <div className="icon">
                          <img src={EvcPlus1} alt="image" />
                        </div>
                        <div className="pkg_name">
                          <h3>EVC Service</h3>
                          {/* <span>For the basics</span> */}
                        </div>
                        <span className="price">$8</span>
                        <ul className="benifits">
                          <li>ma ogoshahay inaad iibsato?</li>
                          <li>lacaga inaad bixiso EVCPLUS</li>
                          {/* <li>
                              <p>Up to 10 Website</p>
                            </li>
                            <li>
                              <p>100 GB disk space</p>
                            </li>
                            <li>
                              <p>25 Customize sub pages</p>
                            </li>
                            <li>
                              <p>4 Domains access</p>
                            </li>
                            <li>
                              <p>Support on request</p>
                            </li> */}
                        </ul>
                        <a
                          href="#"
                          class="btn white_btn"
                          style={{ marginTop: "100px" }}
                        >
                          BUY-iibso
                        </a>
                      </div>
                    </div>

                    {/* <!-- pricing box 2 --> */}
                    <div className="col-md-4">
                      <div className="pricing_block highlited_block">
                        <div className="icon">
                          <img src={SahalService1} alt="image" />
                        </div>
                        <div className="pkg_name">
                          <h3>Sahal Service</h3>
                          {/* <span>For the professionals</span> */}
                        </div>
                        <span className="price">$8</span>
                        <ul className="benifits">
                          <li>ma ogoshahay inaad iibsato? </li>
                          <li>lacaga inaad bixiso Sahal</li>
                          {/* <li>
                              <p>Unlimited Website</p>
                            </li>
                            <li>
                              <p>400 GB disk space</p>
                            </li>
                            <li>
                              <p>40 Customize sub pages</p>
                            </li>
                            <li>
                              <p>20 Domains access</p>
                            </li>
                            <li>
                              <p>24/7 Customer support</p>
                            </li> */}
                        </ul>
                        <a
                          href="#"
                          class="btn white_btn"
                          style={{ marginTop: "25px" }}
                        >
                          BUY- iibso
                        </a>
                      </div>
                    </div>

                    {/* <!-- pricing box 3 --> */}
                    <div className="col-md-4">
                      <div className="pricing_block">
                        <div className="icon">
                          <img src={ZaadService} alt="image" />
                        </div>
                        <div className="pkg_name">
                          <h3>Zaad Service</h3>
                          {/* <span>For small team</span> */}
                        </div>
                        <span className="price">$8</span>
                        <ul className="benifits">
                          <li>ma ogoshahay inaad iibsato?</li>
                          <li>lacaga inaad bixiso Zaad</li>
                          {/* <li>
                              <p>Up to 20 Website</p>
                            </li>
                            <li>
                              <p>200 GB disk space</p>
                            </li>
                            <li>
                              <p>25 Customize sub pages</p>
                            </li>
                            <li>
                              <p>8 Domains access</p>
                            </li>
                            <li>
                              <p>24/7 Customer support</p>
                            </li> */}
                        </ul>
                        <a
                          href="#"
                          class="btn white_btn"
                          style={{ marginTop: "25px" }}
                        >
                          BUY- iibso
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- pricing box yearly end --> */}
              </>
            )}

            <p
              className="contact_text"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Not sure what to choose ? <a href="#">contact us</a> for custom
              packages
            </p>
          </div>
          {/* <!-- container start end --> */}
        </section>
        {/* Pricing-Section end */}
        {/* FAQ-Section start */}
        {/* <section className="row_am faq_section">
          <div className="container">
            <div
              className="section_title"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-delay={300}
            >
              <h2>
                <span>FAQ</span> - Frequently Asked Questions
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typese tting{" "}
                <br /> indus orem Ipsum has beenthe standard dummy.
              </p>
            </div>
            <div className="faq_panel">
              <div className="accordion" id="accordionExample">
                <div className="card" data-aos="fade-up" data-aos-duration={1500}>
                  <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                      <button
                        type="button"
                        className="btn btn-link active"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        onClick={() => toggleFAQ(1)}
                        aria-expanded={openIndex === 1}
                      >
                        <i className="icon_faq icofont-plus" /> How can i pay ?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry lorem Ipsum has. been the industrys
                        standard dummy text ever since the when an unknown printer
                        took a galley of type and scrambled it to make a type specimen
                        book. It has survived not only five cen turies but also the
                        leap into electronic typesetting, remaining essentially
                        unchanged.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card" data-aos="fade-up" data-aos-duration={1500}>
                  <div className="card-header" id="headingTwo">
                    <h2 className="mb-0">
                      <button
                        type="button"
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                      >
                        <i className="icon_faq icofont-plus" /> How to setup account ?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry lorem Ipsum has. been the industrys
                        standard dummy text ever since the when an unknown printer
                        took a galley of type and scrambled it to make a type specimen
                        book. It has survived not only five cen turies but also the
                        leap into electronic typesetting, remaining essentially
                        unchanged.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card" data-aos="fade-up" data-aos-duration={1500}>
                  <div className="card-header" id="headingThree">
                    <h2 className="mb-0">
                      <button
                        type="button"
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                      >
                        <i className="icon_faq icofont-plus" />
                        What is process to get refund ?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry lorem Ipsum has. been the industrys
                        standard dummy text ever since the when an unknown printer
                        took a galley of type and scrambled it to make a type specimen
                        book. It has survived not only five cen turies but also the
                        leap into electronic typesetting, remaining essentially
                        unchanged.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card" data-aos="fade-up" data-aos-duration={1500}>
                  <div className="card-header" id="headingFour">
                    <h2 className="mb-0">
                      <button
                        type="button"
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                      >
                        <i className="icon_faq icofont-plus" />
                        What is process to get refund ?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry lorem Ipsum has. been the industrys
                        standard dummy text ever since the when an unknown printer
                        took a galley of type and scrambled it to make a type specimen
                        book. It has survived not only five cen turies but also the
                        leap into electronic typesetting, remaining essentially
                        unchanged.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* FAQ-Section end */}
        {/* Beautifull-interface-Section start */}
        <section className="row_am interface_section">
          {/* container start */}
          <div className="container-fluid">
            <div
              className="section_title"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-delay={300}
            >
              {/* h2 */}
              <h2>
                Beautifull <span>interface</span>
              </h2>
              {/* p */}
              <p>
                The interface uses ample white and a blue color palette, which
                directs attention to key elements like <br /> account balances
                and transaction buttons, enhancing their accessibility. The app
                design presents a <br />
                clean, minimalist approach with a strong focus on usability and
                visual categorize.
              </p>
            </div>
            {/* screen slider start */}
            <div>
              <div>
                <Swiper
                  slidesPerView={5}
                  // spaceBetween={190}
                  loop={true}
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  coverflowEffect={{
                    rotate: 10,
                    stretch: 20,
                    depth: 100,
                    modifier: 2,
                    slideShadows: true,
                  }}
                  pagination={true}
                  modules={[EffectCoverflow, Pagination, Autoplay]}
                  className="mySwiper"
                >
                  <SwiperSlide className="item">
                    <div className="screen_frame_img">
                      <img src={Signin} alt="image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="item">
                    <div className="screen_frame_img">
                      <img src={Signup} alt="image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="item">
                    <div className="screen_frame_img">
                      <img src={HelpImg} alt="image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="item">
                    <div className="screen_frame_img">
                      <img src={EngtoArabic} alt="image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="item">
                    <div className="screen_frame_img">
                      <img src={Exercise} alt="image" />
                    </div>
                  </SwiperSlide>
                
                </Swiper>
              </div>
            </div>
            {/* screen slider end */}
          </div>
          {/* container end */}
        </section>
        {/* Beautifull-interface-Section end */}
        {/* Download-Free-App-section-Start  */}
        <section className="row_am free_app_section" id="getstarted">
          {/* container start */}
          <div className="container">
            <div
              className="free_app_inner"
              data-aos="fade-in"
              data-aos-duration={1500}
              data-aos-delay={100}
            >
              {/* row start */}
              <div className="row">
                {/* content */}
                <div className="col-md-6">
                  <div className="free_text">
                    <div className="section_title">
                      <h2>Let’s download </h2>
                      <h3 className="payment-offer">
                        We offer to local customer’s easy payment options.
                      </h3>
                      <p>
                        Instant access to the app via Waafipay partners which
                        will gives you fast, secure access to your everyday
                        essentials. Buy via EVCPluc, Sahal & Zaad then register
                        to enjoy the app.
                      </p>
                    </div>
                    {/* <ul className="app_btn">
                      <li>
                        <a href="#">
                          <img src={Appstoreblue} alt="image" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={Googleplaywhite} alt="image" />
                        </a>
                      </li>
                    </ul> */}
                  </div>
                </div>
                {/* images */}
                <div className="col-md-6">
                  <div className="free_img">
                    <img src={Signup} alt="image" />
                    <img className="mobile_mockup" src={Signin} alt="image" />
                  </div>
                </div>
              </div>
              {/* row end */}
            </div>
          </div>
          {/* container end */}
        </section>
        {/* Download-Free-App-section-end  */}
        {/* Story-Section-Start */}
        <section className="row_am latest_story" id="blog">
          {/* container start */}
          <div className="container">
            <div
              className="section_title"
              data-aos="fade-in"
              data-aos-duration={1500}
              data-aos-delay={100}
            >
              <h2>
                To: <span>Choose preferred language </span>
              </h2>
              {/* <p>
                Lorem Ipsum is simply dummy text of the printing and typese tting{" "}
                <br /> indus orem Ipsum has beenthe standard dummy.
              </p> */}
            </div>
            {/* row start */}
            <div className="row">
              {/* story */}
              <div className="col-md-4">
                <div
                  className="story_box"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                >
                  <div className="story_img">
                    <img src={ExerciseAndQuizes} alt="image" />
                    <span>45 min ago</span>
                  </div>
                  <div className="story_text">
                    <h3>Cool features added!</h3>
                    {/* <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry lorem Ipsum has.
                    </p> */}
                    <a href="#">READ MORE</a>
                  </div>
                </div>
              </div>
              {/* story */}
              <div className="col-md-4">
                <div
                  className="story_box"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                >
                  <div className="story_img">
                    <img src={Arabic} alt="image" />
                    <span>45 min ago</span>
                  </div>
                  <div className="story_text">
                    <h3>Top rated app! Yupp.</h3>
                    {/* <p>
                      Simply dummy text of the printing and typesetting industry lorem
                      Ipsum has Lorem Ipsum is.
                    </p> */}
                    <a href="#">READ MORE</a>
                  </div>
                </div>
              </div>
              {/* story */}
              <div className="col-md-4">
                <div
                  className="story_box"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                >
                  <div className="story_img">
                    <img src={ExerciseAndQuizes} alt="image" />
                    <span>45 min ago</span>
                  </div>
                  <div className="story_text">
                    <h3>Creative ideas on app.</h3>
                    {/* <p>
                      Printing and typesetting industry lorem Ipsum has Lorem simply
                      dummy text of the.
                    </p> */}
                    <a href="#">READ MORE</a>
                  </div>
                </div>
              </div>
            </div>
            {/* row end */}
          </div>
          {/* container end */}
        </section>
        {/* Story-Section-end */}
        {/* News-Letter-Section-Start */}
        <section className="newsletter_section">
          {/* container start */}
          <div className="container">
            <div className="newsletter_box">
              <div
                className="section_title"
                data-aos="fade-in"
                data-aos-duration={1500}
                data-aos-delay={100}
              >
                {/* h2 */}
                <h2>Subscribe newsletter</h2>
                {/* p */}
                <p>Be the first to recieve all latest post in your inbox</p>
              </div>
              <form
                action=""
                data-aos="fade-in"
                data-aos-duration={1500}
                data-aos-delay={100}
              >
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group">
                  <button className="btn">SUBMIT</button>
                </div>
              </form>
            </div>
          </div>
          {/* container end */}
        </section>
        {/* News-Letter-Section-end */}

        {/* VIDEO MODAL */}
        <div
          className="modal fade youtube-video"
          id="myModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myModalLabel"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <button
                id="close-video"
                type="button"
                className="button btn btn-default text-right"
                data-dismiss="modal"
              >
                <i className="icofont-close-line-circled" />
              </button>
              <div className="modal-body">
                <div id="video-container" className="video-container">
                  <iframe
                    id="youtubevideo"
                    src=""
                    width={640}
                    height={360}
                    frameBorder={0}
                    allowFullScreen=""
                  />
                </div>
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
        <div className="purple_backdrop" />
      </Main>
    </>
  );
};

export default HomeScreen;
