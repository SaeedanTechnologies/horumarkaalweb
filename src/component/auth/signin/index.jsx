import React from 'react'
import {Link} from 'react-router-dom'
import { Main } from './style'
import FooterLogo from 'assets/footer_logo.png'
import GoogleLogo from 'assets/google.png'
const Signin = () => {
  return (
    <Main>
    <div className="full_bg">
  <div className="container">
    <section className="signup_section">
      <div className="top_part">
        <Link to='/' className="back_btn">
          <i className="icofont-arrow-left" /> Back
        </Link>
        <a className="navbar-brand" href="#">
          <img src={FooterLogo} alt="Company_Logo" />
        </a>
      </div>
      {/* Comment Form Section */}
      <div className="signup_form">
        <div className="section_title">
          <h2>
            {" "}
            Welcom to <span>Apper</span>{" "}
          </h2>
          <p>
            Fill all fields so we can get some info about you. <br /> We'll
            never send you spam
          </p>
        </div>
        <form action="">
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <button className="btn puprple_btn" type="submit">
              SIGN IN
            </button>
          </div>
        </form>
        <p className="or_block">
          <span>OR</span>
        </p>
        <div className="or_option">
          <p>Sign In with your work email</p>
          <a href="#" className="btn google_btn">
            <img src={GoogleLogo} alt="Google_Logo" />{" "}
            <span>Sign Up with Google</span>{" "}
          </a>
          <p>
            Don't have an account? <a href="#">Sign Up here</a>
          </p>
        </div>
      </div>
    </section>
  </div>
</div>

    </Main>
  )
}

export default Signin
