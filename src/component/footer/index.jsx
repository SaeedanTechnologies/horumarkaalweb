import React from 'react'
import Shape1 from 'assets/banner-shape1.png'
import Shape2 from 'assets/banner-shape2.png'
import Shape3 from 'assets/banner-shape3.png'
//import FooterLogo from 'assets/footer_logo.png'
import FooterLogo from 'assets/headerlogo/logosApp.png'
import Gotop from 'assets/go_top.png'
import AppstoreBlue from 'assets/appstore_blue.png'
import Googleplayblue from 'assets/googleplay_blue.png'
import { Main } from './style'
const Footer = () => {
  return (
    <>
      <Main>
      <footer>
    <div className="top_footer" id="contact">
      {/* container start */}
      <div className="container">
        {/* row start */}
        <div className="row">
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
          {/* footer link 1 */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="abt_side">
              <div className="logo">
                {" "}
                <img src={FooterLogo} alt="image" style={{width:'79px',  marginLift: '12px'}}/>
              </div>
              <ul>
                <li>
                  <a href="#">info@horumarkaalweb.app</a>
                </li>
                <li>
                <a href="#"> Info@hiigsikaal.com</a>
              </li>
                <li>
                  <a href="#">06190190124</a>
                </li>
              </ul>
             
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
                <li>
                  <a href="#">
                    <i className="icofont-pinterest" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* footer link 2 */}
          <div className="col-lg-3 col-md-6 col-12">
            <div className="links">
              <h3>Useful Links</h3>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
          {/* footer link 3 */}
          <div className="col-lg-3 col-md-6 col-12">
            <div className="links">
              <h3>Help &amp; Suport</h3>
              <ul>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">How it works</a>
                </li>
                <li>
                  <a href="#">Terms &amp; conditions</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>
          </div>
          {/* footer link 4 */}
          <div className="col-lg-2 col-md-6 col-12">
            <div className="try_out">
              <h3>Let’s Try Out</h3>
            
            </div>
          </div>
        </div>
        {/* row end */}
      </div>
      {/* container end */}
    </div>
 
    {/* <div className="bottom_footer">
    
      <div className="container">
      
        <div className="row">
          <div className="col-md-6">
            <p>© Copyrights 2022. All rights reserved.</p>
          </div>
          <div className="col-md-6">
            <p className="developer_text">
              Design &amp; developed by{" "}
              <a
                href="https://themeforest.net/user/kalanidhithemes"
                target="blank"
              >
                Kalanidhi Themes
              </a>
            </p>
          </div>
        </div>
       
      </div>
     
    </div>*/}
    {/* go top button */}
    <div className="go_top">
      <span>
        <img src={Gotop} alt="image" />
      </span>
    </div>
  </footer>
      </Main>
    </>
  )
}

export default Footer;
