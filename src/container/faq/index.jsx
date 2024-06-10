import React from 'react'
import Shape1 from 'assets/banner-shape1.png'
import Shape2 from 'assets/banner-shape2.png'
import Shape3 from 'assets/banner-shape3.png'
import Appstoreblue from 'assets/appstore_blue.png'
import Googleplaywhite from 'assets/googleplay_blue.png'
import DownloadScreen1 from 'assets/download-screen01.png'
import DownloadScreen2 from 'assets/download-screen02.png'
import { Link } from 'react-router-dom'
import { Main } from './style'

// All Image
import BannerImage from 'assets/mobilePics/BannerImage.png'
import EngtoArabic from 'assets/mobilePics/engtoArabic.svg'
import Congrats from 'assets/mobilePics/congrats.svg'
import HelpImg from 'assets/mobilePics/help.svg'
import History from 'assets/mobilePics/history.svg'
import Profile from 'assets/mobilePics/profile.svg'
import Signin from 'assets/mobilePics/signin.svg'
import Signup from 'assets/mobilePics/signup.svg'
import Exercise from 'assets/mobilePics/exercise.svg'
const Faq = () => {

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
        <h1>Have questions? look here</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <span>»</span>
          </li>
          <li>
            <Link to="/faq">Faq</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  {/* FAQ-Section start */}
  <section className="row_am faq_section">
    {/* container start */}
    <div className="container">
      {/* faq data */}
      <div className="faq_panel">
        <div className="accordion" id="accordionExample">
          <div className="card" data-aos="fade-up">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button
                  type="button"
                  className="btn btn-link active"
                  data-toggle="collapse"
                  data-target="#collapseOne"
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
          <div className="card" data-aos="fade-up">
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
          <div className="card" data-aos="fade-up">
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
          <div className="card" data-aos="fade-up">
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
          <div className="card" data-aos="fade-up">
            <div className="card-header" id="headingFive">
              <h2 className="mb-0">
                <button
                  type="button"
                  className="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseFive"
                >
                  <i className="icon_faq icofont-plus" />
                  Can i get code bug support for customization ?
                </button>
              </h2>
            </div>
            <div
              id="collapseFive"
              className="collapse"
              aria-labelledby="headingFive"
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
          <div className="card" data-aos="fade-up">
            <div className="card-header" id="headingSix">
              <h2 className="mb-0">
                <button
                  type="button"
                  className="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseSix"
                >
                  <i className="icon_faq icofont-plus" />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting ?
                </button>
              </h2>
            </div>
            <div
              id="collapseSix"
              className="collapse"
              aria-labelledby="headingSix"
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
          <div className="card" data-aos="fade-up">
            <div className="card-header" id="headingSeven">
              <h2 className="mb-0">
                <button
                  type="button"
                  className="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseSeven"
                >
                  <i className="icon_faq icofont-plus" />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting ?
                </button>
              </h2>
            </div>
            <div
              id="collapseSeven"
              className="collapse"
              aria-labelledby="headingSeven"
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
    {/* container end */}
  </section>
  {/* FAQ-Section end */}
  {/* Download-Free-App-section-Start  */}
  <section className="row_am free_app_section review_freeapp" id="getstarted">
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
                <h2>Let’s download free from apple and play store</h2>
                <p>
                  Instant free download from apple and play store orem Ipsum is
                  simply dummy text of the printing. and typese tting indus orem
                  Ipsum has beenthe standard
                </p>
              </div>
              <ul className="app_btn">
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
              </ul>
            </div>
          </div>
          {/* images */}
          <div className="col-md-6">
            <div className="free_img">
              <img src={Signup} alt="image" />
              <img
                className="mobile_mockup"
                src={Signin}
                alt="image"
              />
            </div>
          </div>
        </div>
        {/* row end */}
      </div>
    </div>
    {/* container end */}
  </section>
  {/* Download-Free-App-section-end  */}
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

export default Faq;
