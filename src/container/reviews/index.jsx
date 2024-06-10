import React from 'react'

import Shape1 from 'assets/banner-shape1.png'
import Shape2 from 'assets/banner-shape2.png'
import Shape3 from 'assets/banner-shape3.png'

import DownloadScreen1 from 'assets/download-screen01.png'
import DownloadScreen2 from 'assets/download-screen02.png'
import Appstoreblue from 'assets/appstore_blue.png'
import Googleplayblue from 'assets/googleplay_blue.png'
import Review1 from 'assets/review_01.png'
import Review2 from 'assets/review_02.png'
import Review3 from 'assets/review_03.png'
import Review4 from 'assets/review_04.png'
import Review5 from 'assets/review_05.png'
import Review6 from 'assets/review_06.png'
import Review7 from 'assets/review_07.png'
import Review8 from 'assets/review_08.png'
import Review9 from 'assets/review_09.png'
import { Link } from 'react-router-dom'
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
import { Main } from './style'
const Reviews = () => {

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
        <h1>Reviews</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <span>»</span>
          </li>
          <li>
            <Link to='/review'>Reviews</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  {/*Review List Section Start*/}
  <section className="row_am review_list_section">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="review_box">
            <div className="rating">
              <ul>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
              </ul>
            </div>
            <h3>App working smoothly fast</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              ndus try lorem Ipsum hasbeen the trysan dard dummy text here.
            </p>
            <div className="reviewer">
              <div className="avtar">
                <img src={Review1} alt="image" />
              </div>
              <div className="text">
                <h3>Shayna John</h3>
                <span>Careative inc</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="review_box">
            <div className="rating">
              <ul>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
              </ul>
            </div>
            <h3>UI and UX is excellence !</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              ndus try lorem Ipsum hasbeen the trysan dard dummy text here.
            </p>
            <div className="reviewer">
              <div className="avtar">
                <img src={Review2} alt="image" />
              </div>
              <div className="text">
                <h3>Jolly Shie</h3>
                <span>CEO - abc agency</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="review_box">
            <div className="rating">
              <ul>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
              </ul>
            </div>
            <h3>Service support on time.</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              ndus try lorem Ipsum hasbeen the trysan dard dummy text here.
            </p>
            <div className="reviewer">
              <div className="avtar">
                <img src={Review3} alt="image" />
              </div>
              <div className="text">
                <h3>Steve Joe</h3>
                <span>Vybo Creative</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="review_box">
            <div className="rating">
              <ul>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
              </ul>
            </div>
            <h3>Easy documentation.</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              ndus try lorem Ipsum hasbeen the trysan dard dummy text here.
            </p>
            <div className="reviewer">
              <div className="avtar">
                <img src={Review4} alt="image" />
              </div>
              <div className="text">
                <h3>Shayna John</h3>
                <span>Careative inc</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="review_box">
            <div className="rating">
              <ul>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
              </ul>
            </div>
            <h3>UI and UX is excellence !</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              ndus try lorem Ipsum hasbeen the trysan dard dummy text here.
            </p>
            <div className="reviewer">
              <div className="avtar">
                <img src={Review5} alt="image" />
              </div>
              <div className="text">
                <h3>Jolly Shie</h3>
                <span>CEO - abc agency</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="review_box">
            <div className="rating">
              <ul>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
              </ul>
            </div>
            <h3>Service support on time.</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              ndus try lorem Ipsum hasbeen the trysan dard dummy text here.
            </p>
            <div className="reviewer">
              <div className="avtar">
                <img src={Review6} alt="image" />
              </div>
              <div className="text">
                <h3>Steve Joe</h3>
                <span>Vybo Creative</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="review_box">
            <div className="rating">
              <ul>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
              </ul>
            </div>
            <h3>App working smoothly fast</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              ndus try lorem Ipsum hasbeen the trysan dard dummy text here.
            </p>
            <div className="reviewer">
              <div className="avtar">
                <img src={Review7} alt="image" />
              </div>
              <div className="text">
                <h3>Shayna John</h3>
                <span>Careative inc</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="review_box">
            <div className="rating">
              <ul>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
              </ul>
            </div>
            <h3>UI and UX is excellence !</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              ndus try lorem Ipsum hasbeen the trysan dard dummy text here.
            </p>
            <div className="reviewer">
              <div className="avtar">
                <img src={Review8} alt="image" />
              </div>
              <div className="text">
                <h3>Jolly Shie</h3>
                <span>CEO - abc agency</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="review_box">
            <div className="rating">
              <ul>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="icofont-star" />
                  </span>
                </li>
              </ul>
            </div>
            <h3>Service support on time.</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              ndus try lorem Ipsum hasbeen the trysan dard dummy text here.
            </p>
            <div className="reviewer">
              <div className="avtar">
                <img src={Review9} alt="image" />
              </div>
              <div className="text">
                <h3>Steve Joe</h3>
                <span>Vybo Creative</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Review List Section End */}
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
                    <img src={Googleplayblue} alt="image" />
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

export default Reviews;
