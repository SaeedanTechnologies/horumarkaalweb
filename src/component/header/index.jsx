import React from 'react'
import { Link } from 'react-router-dom';
import { Main } from './style';
import Logo from 'assets/headerlogo/logosApp.png'
import Googleplayblue from 'assets/googleplay_blue.png'
import "./indexheader.css"
const Header = () => {
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
      <div className='main-dev-data'>
      <Link to='/' className="navbar-brand">
      <img src={Logo} alt="image" style={{width:'79px',  marginLift: '12px'}}/>
      <h6 style={{color:'white', fontSize:'15px'}} className='mobile-screen'>Horumarkaal App</h6>
      </Link>
      <br></br>
    
      <div className='footer-data'>
      <li style={{background:'white'}}>
      <a href="https://play.google.com/store/apps/details?id=com.horumarkaalapp.multitranslation">
        <img src={Googleplayblue} alt="image" /> 
      </a>
     
    </li>
    <h6 style={{color:'white', marginTop:'10px'}}>{" "} Kala soo deg</h6>
    <h6 style={{color:'white', margin:'12px'}}>{" "} Download</h6>
      </div>
      </div>
      
      
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            {/* <i class="icofont-navigation-menu ico_menu"></i> */}
            <div className="toggle-wrap">
              <span className="toggle-bar" />
            </div>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to='/' className="nav-link" href="index.html">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#how_it_work">
                How it works
              </a>
            </li>
            {/* secondery menu start */}
            <li className="nav-item has_dropdown">
              <a className="nav-link" href="#">
                Pages
              </a>
              <span className="drp_btn">
                <i className="icofont-rounded-down" />
              </span>
              <div className="sub_menu">
                <ul>
                  <li>
                    <Link to='about-us'>About Us</Link>
                  </li>
                  <li>
                    <Link to='review'>Reviews</Link>
                  </li>
                  <li>
                    <Link to='contact' >Contact Us</Link>
                  </li>
                  <li>
                    <Link to='faq'>Faq</Link>
                  </li>
                  <li>
                    <Link to='/auth/'>Sign In</Link>
                  </li>
                  <li>
                    <Link to='/auth/sign-up'>Sign Up</Link>
                  </li>
                  <li>
                    <Link to='blog-list'>Blog List</Link>
                  </li>
                  <li>
                    <Link to='blog-single'>Blog Single</Link>
                  </li>
                </ul>
              </div>
            </li>
            {/* secondery menu end */}
            <li className="nav-item">
              <Link to='pricing' className="nav-link">
                Pricing
              </Link>
            </li>
            {/* secondery menu start */}
            <li className="nav-item has_dropdown">
              <a className="nav-link" href="##">
                Blog
              </a>
              <span className="drp_btn">
                <i className="icofont-rounded-down" />
              </span>
              <div className="sub_menu">
                <ul>
                  <li>
                  <Link to='blog-list'>Blog List</Link>
                  </li>
                  <li>
                  <Link to='blog-single'>Blog Single</Link>
                  </li>
                </ul>
              </div>
            </li>
            {/* secondery menu end */}
            <li className="nav-item">
              <Link to='contact' className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item" style={{width:'130px'}}>
              <Link  className="nav-link dark_btn" style={{paddingLeft:'20px'}} onClick={scrollToMiddleSection}>
                Register
              </Link>
            </li>
            <li className="nav-item" style={{width:'120px'}}>
            <Link to='/login' className="nav-link dark_btn" style={{paddingLeft:'25px'}}>
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
    )
}

export default Header;
