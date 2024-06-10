import React,{useState} from 'react'
import Shape1 from 'assets/banner-shape1.png'
import Shape2 from 'assets/banner-shape2.png'
import Shape3 from 'assets/banner-shape3.png'
import Standard from 'assets/standard.png'
import Premium from 'assets/premium.png'
import Unlimited from 'assets/unlimited.png'

import Appstoreblue from 'assets/appstore_blue.png'
import Googleplayblue from 'assets/googleplay_blue.png'
import Signin from 'assets/mobilePics/signin.svg'
import Signup from 'assets/mobilePics/signup.svg'
import EvcPlus1 from 'assets/pricePannel/evcPlusService-1.jpg'
import SahalService1 from 'assets/pricePannel/sahalService-2.png'
import ZaadService from 'assets/pricePannel/zaadService-3.png'
import { Link } from 'react-router-dom'
import { Main } from './style'
const Pricing = () => {
  const [monthlyPlan, setMonthlyPlan] = useState(false);

  const handletoggleScreen = () => {
    setMonthlyPlan(!monthlyPlan);
  };
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
              <h1>Our Pricing &amp; Plans</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <span>»</span>
                </li>
                <li>
                  <Link to="/pricing">Our Pricing &amp; Plans</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Pricing-Section */}
        <section className="row_am pricing_section" id="pricing">
          <div className="container">
            <div className="section_title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
              <h2>Best & simple <span>pricing</span></h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typese tting <br /> indus orem Ipsum has beenthe
                standard dummy.</p>
            </div>
            {/* <!-- toggle button --> */}
            <div className="toggle_block" data-aos="fade-up" data-aos-duration="1500">
              <span className={`month ${!monthlyPlan ? 'active' : ''}`} >Monthly</span>
              <label className="switch">
                <input type="checkbox" onChange={handletoggleScreen} checked={monthlyPlan} />
                <span className="slider round"></span>
              </label>
              <span className={`years ${!monthlyPlan ? '' : 'active'}`} >Yearly</span>
              <span className="offer">50% off</span>
            </div>
            {!monthlyPlan ?
              (
                <>
                  <div className="pricing_pannel monthly_plan active" data-aos="fade-up" data-aos-duration="1500">
                    {/* <!-- row start --> */}
                    <div className="row">
                      {/* <!-- pricing box 1 --> */}
                      <div className="col-md-4">
                        <div className="pricing_block">
                          <div className="icon">
                            <img src={EvcPlus1} alt="image" />
                          </div>
                          <div className="pkg_name">
                            <h3>EVC Plus Service</h3>
                            {/* <span>For the basics</span> */}
                          </div>
                          <span className="price">$8</span>
                          <ul className="benifits">
                          <li>ma ogoshahay inaad iibsato?</li>
                            <li>lacaga inaad bixiso EVCPLUS</li>
                            {/* <li>
                              <p>Up to 5 Website</p>
                            </li>
                            <li>
                              <p>50 GB disk space</p>
                            </li>
                            <li>
                              <p>10 Customize sub pages</p>
                            </li>
                            <li>
                              <p>2 Domains access</p>
                            </li>
                            <li>
                              <p>Support on request</p>
                            </li> */}
                          </ul>
                          <a href="#" className="btn white_btn" style={{marginTop:"180px"}}>BUY- iibso</a>
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
                              <p>200 GB disk space</p>
                            </li>
                            <li>
                              <p>20 Customize sub pages</p>
                            </li>
                            <li>
                              <p>10 Domains access</p>
                            </li>
                            <li>
                              <p>24/7 Customer support</p>
                            </li> */}
                          </ul>
                          <a href="#" className="btn white_btn" style={{marginTop:"100px"}}>BUY-iibso</a>
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
                              <p>Up to 10 Website</p>
                            </li>
                            <li>
                              <p>100 GB disk space</p>
                            </li>
                            <li>
                              <p>15 Customize sub pages</p>
                            </li>
                            <li>
                              <p>4 Domains access</p>
                            </li>
                            <li>
                              <p>24/7 Customer support</p>
                            </li> */}
                          </ul>
                          <a href="#" className="btn white_btn"style={{marginTop:"100px"}}>BUY-iibso</a>
                        </div>
                      </div>
                    </div>
                    {/* <!-- row end --> */}
                  </div>
                  {/* <!-- pricing box monthly end --> */}
                </>
              )
              :
              (
                <>
                  {/* <!-- pricing box yearly start --> */}
                  <div className={`pricing_pannel yearly_plan ${monthlyPlan ? 'active' : ''}`}>
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
                          <a href="#" class="btn white_btn"style={{marginTop:"80px"}}>BUY-iibso</a>
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
                          <a href="#" class="btn white_btn">BUY- iibso</a>
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
                          <a href="#" class="btn white_btn">BUY- iibso</a>
                        </div>
                      </div>

                    </div>
                  </div>
                  {/* <!-- pricing box yearly end --> */}
                </>
              )
            }
            
            <p className="contact_text" data-aos="fade-up" data-aos-duration="1500">Not sure what to choose ? <a href="#">contact us</a> for custom packages</p>
          </div>
          {/* <!-- container start end --> */}
        </section>
        {/* Pricing-Section end */}
        {/* FAQ-Section start */}
        {/* <section className="row_am faq_section">
          <div className="container">
            <div className="faq_panel">
              <div className="accordion" id="accordionExample">
                <div className="card" data-aos="fade-up">
                  <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                        <i className="icon_faq icofont-plus" /> How can i pay ?
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
        </section> */}
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

export default Pricing
