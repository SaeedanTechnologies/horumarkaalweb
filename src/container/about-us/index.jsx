import React from 'react'
import { Link } from 'react-router-dom'
import Shape1 from 'assets/banner-shape1.png'
import Shape2 from 'assets/banner-shape2.png'
import Shape3 from 'assets/banner-shape3.png'
import Abt1 from 'assets/abt_01.png'
import Abt2 from 'assets/abt_02.png'
import Abt3 from 'assets/abt_03.png'
import PlayBlack from 'assets/play_black.png'
import Secure from 'assets/secure.png'
import Abtfunctional from 'assets/abt_functional.png'
import Communication from 'assets/communication.png'
import AbtSupport from 'assets/abt_support.png'
import Aboutmanin from 'assets/about_main.png'
import Download from 'assets/download.png'
import Followers from 'assets/followers.png'
import Reviews from 'assets/reviews.png'

import Countries from 'assets/countries.png'
import Expert1 from 'assets/experts_01.png'
import Expert2 from 'assets/experts_02.png'
import Expert3 from 'assets/experts_03.png'
import Expert4 from 'assets/experts_04.png'

import Paypal from 'assets/paypal.png'
import Spoty from 'assets/spoty.png'
import Shopboat from 'assets/shopboat.png'
import Slack from 'assets/slack.png'
import Envato from 'assets/envato.png'
// updated images
import SigninSnippet from 'assets/smallScreensSnippets/signin.svg'
import Aboutscreen from 'assets/smallScreensSnippets/about-screen.svg'
import Arabic from 'assets/smallScreensSnippets/arabic.svg'
import CreateAccount1 from 'assets/smallScreensSnippets/create_account.svg'
import CreateAccount2 from 'assets/smallScreensSnippets/createAccount.svg'
import Somali from 'assets/smallScreensSnippets/engtoSomali.svg'
import ExerciseAndQuizes from 'assets/smallScreensSnippets/exerciseAndQuizes.svg'
import Exercises from 'assets/smallScreensSnippets/exercises.svg'
import Glossary from 'assets/smallScreensSnippets/multiGlossary.svg'
import MultilingualGlossary from 'assets/smallScreensSnippets/multilingualGlossary.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Main } from './style'
const Aboutus = () => {
  return (
    <>
      <Main>
        {/* BredCrumb-Section */}
        <div className="bred_crumb">
          <div className="container">
            {/* shape animation  */}
            <span className="banner_shape1">
              {" "}
              <img src={Shape1} alt="image" />{" "}
            </span>
            <span className="banner_shape2">
              {" "}
              <img src={Shape2} alt="image" />{" "}
            </span>
            <span className="banner_shape3">
              {" "}
              <img src={Shape3} alt="image" />{" "}
            </span>
            <div className="bred_text">
              <h1>About us</h1>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <span>»</span>
                </li>
                <li>
                  <Link to='/about-us'>About us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* App-Solution-Section-Start */}
        <section className="row_am app_solution_section">
          {/* container start */}
          <div className="container">
            {/* row start */}
            <div className="row">
              <div className="col-lg-6">
                {/* UI content */}
                <div className="app_text">
                  <div
                    className="section_title"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-delay={100}
                  >
                    <h2>
                      <span>Horumarkaal app is a ground-breaking app </span>for
                      multilingual learning .
                    </h2>
                  </div>
                  <p data-aos="fade-up" data-aos-duration={1500}>
                    Horumarkaal is a multilingual glossary app designed by language
                    experts to help Somali-speaking students and individuals to
                    overcome language barriers and learn the English language. The
                    glossary app enables users instant access to more than 150,000
                    technical terms (text and audio) covering key major educational
                    scientific fields, such as chemistry, biology, physics, math,
                    geography, engineering, law, artificial intelligence AI, health,
                    IT &amp; computer, courts &amp; Justice, environment, philanthropy
                    and NGO’s, media, communication, banking, logistic, astronomy,
                    agriculture, transportation, maritime, urbanization, planning,
                    statics, fishing, energy, sport, cooking, vocational
                  </p>
                  <p data-aos="fade-up" data-aos-duration={1500}>
                    training, project management, tourism, labour, commerce, industry
                    and other related professions.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="app_images"
                  data-aos="fade-in"
                  data-aos-duration={1500}
                >
                  <ul>
                    <li>
                      <img src={Arabic} alt="arabic" style={{borderRadius:"12px"}} />
                    </li>
                    <li>
                      <a
                        className="popup-youtube play-button"
                        data-url="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
                        data-toggle="modal"
                        data-target="#myModal"
                        title="About Video"
                      >
                        <img src={Abt2} alt="" />
                        <div className="waves-block">
                          <div className="waves wave-1" />
                          <div className="waves wave-2" />
                          <div className="waves wave-3" />
                        </div>
                        <span className="play_icon">
                          <img src={PlayBlack} alt="image" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <img src={Aboutscreen} alt="somali"  style={{borderRadius:"12px"}} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* row end */}
          </div>
          {/* container end */}
        </section>
        {/* App-Solution-Section-end */}
        {/* Why we are section Start */}
        <section className="row_am why_we_section" data-aos="fade-in">
          <div className="why_inner">
            <div className="container">
              <div
                className="section_title"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-delay={100}
              >
                <h2>
                  <span>Why we are different</span> from others!
                </h2>
                <p>Horumarkaal multilingual app is the first of its kind .</p>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-3">
                  <div
                    className="why_box"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-delay={100}
                  >
                    <div className="icon">
                      <img src={Secure} alt="image" />
                    </div>
                    <div className="text">
                      <h3>interactive Learning </h3>
                      <p>
                        Secure code interactive Learning Offering users a flexible
                        &amp; convenient interactive personal learning.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div
                    className="why_box"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-delay={200}
                  >
                    <div className="icon">
                      <img src={Abtfunctional} alt="image" />
                    </div>
                    <div className="text">
                      <h3>Flexibility and Convenience</h3>
                      <p>
                        Fully functional Flexibility and Convenience Learners have the
                        freedom to choose preferred language to learn.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div
                    className="why_box"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-delay={300}
                  >
                    <div className="icon">
                      <img src={Communication} alt="image" />
                    </div>
                    <div className="text">
                      <h3>Text &amp; Audio</h3>
                      <p>
                        Best communication Text &amp; Audio Multilingual search and
                        Instant access to text and audio
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div
                    className="why_box"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-delay={400}
                  >
                    <div className="icon">
                      <img src={AbtSupport} alt="image" />
                    </div>
                    <div className="text">
                      <h3>Accessibility </h3>
                      <p>
                        Provide regular access to 35 subjects to enhance accessibility
                        &amp; inclusivity
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About-App-Section-Start */}
        <section className="row_am about_app_section about_page_sectino">
          {/* container start */}
          <div className="container">
            {/* row start */}
            <div className="row">
              <div className="col-lg-6">
                {/* about images */}
                <div className="abt_img" data-aos="fade-in" data-aos-duration={1500}>
                  <img src={Somali} alt="image" />
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
                    <h2> Reach fluency through practice</h2>
                    {/* p */}
                    <p>
                      Horumarkaal will help users to learn new words and special terms
                      in different technical fields to improve users' communication
                      skills, listening to pronunciation, searching and scrolling to
                      adopt personal learning plans, quizzes and exercise to help
                      users to choose preferred terms by typing the word's to get
                      corresponding meaning and vise-verse in English, Somali and
                      Arabic based on user’s preference. The app offers interactive
                      features and practice for language learners who are translating
                      to or from English.
                    </p>
                    <p>
                      Horumarkaal App is the perfect tool breaking language barriers
                      by learning vocabulary. Learning multilingual technical and
                      academic terms has never been easier! Unlock your full potential
                      while having fun and expanding your knowledge with Horumarkaal
                      web and mobile app.
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
                        <img src={Countries} alt="image" />
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
                </div>
              </div>
            </div>
            {/* row end */}
          </div>
          {/* container end */}
        </section>
        {/* About-App-Section-end */}
        {/*Experts Team Section Start  */}
        <section className="row_am experts_team_section">
          <div className="container">
            <div
              className="section_title"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-delay={100}
            >
              {/* h2 */}
              <h2>
                {" "}
                Our language <span> experts </span>
              </h2>
              {/* p */}
              <p>
                Horumarkaal language experts consist from diverse resource people,
                professional, linguists and academic people from diverse stakeholders
                to fostering human development, scale up, institutions, individuals,
                professionals, skills &amp; capacities.
              </p>
            </div>
            <div className="row">
              <div
                className="col-md-6 col-lg-3"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-delay={100}
              >
                <div className="experts_box">
                  <img src={Expert1} alt="image" />
                  <div className="text">
                    <h3>Steav Joe</h3>
                    <span>CEO &amp; Co-Founder</span>
                    <ul className="social_media">
                      <li>
                        <a href="#">
                          <i className="icofont-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-3"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-delay={200}
              >
                <div className="experts_box">
                  <img src={Expert2} alt="image" />
                  <div className="text">
                    <h3>Mark Dele</h3>
                    <span>Co-Founder</span>
                    <ul className="social_media">
                      <li>
                        <a href="#">
                          <i className="icofont-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-3"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-delay={300}
              >
                <div className="experts_box">
                  <img src={Expert3} alt="image" />
                  <div className="text">
                    <h3>Jolley Sihe</h3>
                    <span>Business Developer</span>
                    <ul className="social_media">
                      <li>
                        <a href="#">
                          <i className="icofont-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-3"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-delay={400}
              >
                <div className="experts_box">
                  <img src={Expert4} alt="image" />
                  <div className="text">
                    <h3>Rimy Nail</h3>
                    <span>Marketing &amp; Sales</span>
                    <ul className="social_media">
                      <li>
                        <a href="#">
                          <i className="icofont-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Query Section Start */}
        <section className="row_am query_section">
          <div className="query_inner" data-aos="fade-in" data-aos-duration={1500}>
            <div className="container">
              {/* shape animation  */}
              <span className="banner_shape1">
                {" "}
                <img src={Shape1} alt="image" />{" "}
              </span>
              <span className="banner_shape2">
                {" "}
                <img src={Shape2} alt="image" />{" "}
              </span>
              <span className="banner_shape3">
                {" "}
                <img src={Shape3} alt="image" />{" "}
              </span>
              <div className="section_title">
                <h2>Have any query about ?</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typese tting{" "}
                  <br /> indus orem Ipsum has beenthe standard dummy.
                </p>
              </div>
              <Link to='/about-us' className="btn white_btn">
                CONTACT US NOW
              </Link>
            </div>
          </div>
        </section>
        {/* Trusted Section start */}
        <section className="row_am trusted_section mt-0 about_trust_section">
          {/* container start */}
          <div className="container">
            {/* <div
              className="section_title"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-delay={100}
            >
              <h2>
                Trusted by <span>150+</span> companies
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typese tting{" "}
                <br /> indus orem Ipsum has beenthe standard dummy.
              </p>
            </div> */}
            {/* logos slider start */}
            <div className="company_logos">
              <div id="company_slider">
                {/* <Swiper
                  slidesPerView={5}
                  spaceBetween={10}
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
                  <SwiperSlide className="item">
                    <div className="logo">
                      <img src={Paypal} alt="image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="item">
                    <div className="logo">
                      <img src={Spoty} alt="image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="item">
                    <div className="logo">
                      <img src={Shopboat} alt="image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="item">
                    <div className="logo">
                      <img src={Slack} alt="image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="item">
                    <div className="logo">
                      <img src={Envato} alt="image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="item">
                    <div className="logo">
                      <img src={Paypal} alt="image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="item">
                  <div className="logo">
                    <img src={Spoty} alt="image" />
                  </div>
                  </SwiperSlide>
                  <SwiperSlide className="item">
                  <div className="logo">
                    <img src={Shopboat} alt="image" />
                  </div>
                  </SwiperSlide>

                </Swiper> */}
              </div>
            </div>
            {/* logos slider end */}
          </div>
          {/* container end */}
        </section>
        {/* Trusted Section ends */}
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
      </Main>

    </>
  )
}

export default Aboutus
