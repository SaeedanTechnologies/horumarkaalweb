import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Main } from './style';
import Logo from 'assets/headerlogo/logosApp.png';
import Googleplayblue from 'assets/googleplay_blue.png';
import './indexheader.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToMiddleSection = () => {
    const middleSection = document.getElementById('middleSection');
    middleSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Header Start */}
      <Main>
        <header>
          {/* container start */}
          <div className="container">
            {/* navigation bar */}
            <nav className="navbar navbar-expand-lg">
              <div className="main-dev-data">
                <Link to="/" className="navbar-brand">
                  <img src={Logo} alt="image" style={{ width: '79px', marginLeft: '12px' }} />
                  <h6 style={{ color: 'white', fontSize: '15px' }} className="mobile-screen">
                    Horumarkaal App
                  </h6>
                </Link>
                <br></br>

                <div className="footer-data">
                  <li style={{ background: 'white' }}>
                    <a href="https://play.google.com/store/apps/details?id=com.horumarkaalapp.multitranslation">
                      <img src={Googleplayblue} alt="image" />
                    </a>
                  </li>
                  <h6 style={{ color: 'white', marginTop: '10px' }}>{" "} Kala soo deg</h6>
                  <h6 style={{ color: 'white', margin: '12px' }}>{" "} Download</h6>
                </div>
              </div>

              {/* Toggle button */}
              <button
                className="navbar-toggler"
                type="button"
                onClick={toggleMenu}
                aria-controls="navbarSupportedContent"
                aria-expanded={isMenuOpen ? 'true' : 'false'}
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Menu items */}
              <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link to="/" className="nav-link my-link-data" >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link my-link-data" href="#features">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link my-link-data" href="#how_it_work">
                      How it works
                    </a>
                  </li>
                  {/* Secondary menu */}
                  <li className="nav-item has_dropdown">
                    <a className="nav-link my-link-data" href="#">
                      Pages
                    </a>
                    <span className="drp_btn">
                      <i className="icofont-rounded-down" />
                    </span>
                    <div className="sub_menu">
                      <ul>
                        <li>
                          <Link to="/about-us" className='my-link-data'>About Us</Link>
                        </li>
                        <li>
                          <Link to="/review" className='my-link-data'>Reviews</Link>
                        </li>
                        <li>
                          <Link to="/contact" className='my-link-data'>Contact Us</Link>
                        </li>
                        <li>
                          <Link to="/faq" className='my-link-data'>Faq</Link>
                        </li>
                        <li>
                          <Link to="/auth/" className='my-link-data'>Sign In</Link>
                        </li>
                        <li>
                          <Link to="/auth/sign-up" className='my-link-data'>Sign Up</Link>
                        </li>
                        <li>
                          <Link to="/blog-list" className='my-link-data'>Blog List</Link>
                        </li>
                        <li>
                          <Link to="/blog-single" className='my-link-data'>Blog Single</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* End of secondary menu */}
                  <li className="nav-item">
                    <Link to="/pricing" className="nav-link my-link-data">
                      Pricing
                    </Link>
                  </li>
                  {/* Blog dropdown */}
                  <li className="nav-item has_dropdown">
                    <a className="nav-link my-link-data" href="#">
                      Blog
                    </a>
                    <span className="drp_btn">
                      <i className="icofont-rounded-down" />
                    </span>
                    <div className="sub_menu">
                      <ul>
                        <li>
                          <Link to="/blog-list" className='my-link-data'>Blog List</Link>
                        </li>
                        <li>
                          <Link to="/blog-single" className='my-link-data'>Blog Single</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* End of blog dropdown */}
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link my-link-data">
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item" style={{ width: '130px' }}>
                    <Link className="nav-link dark_btn" style={{ paddingLeft: '20px' }} onClick={scrollToMiddleSection}>
                      Register
                    </Link>
                  </li>
                  <li className="nav-item" style={{ width: '120px' }}>
                    <Link to="/login" className="nav-link dark_btn" style={{ paddingLeft: '25px' }}>
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            {/* navigation end */}
          </div>
          {/* container end */}
        </header>
      </Main>
    </>
  );
};

export default Header;
