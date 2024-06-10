import React from 'react'
import { Link } from 'react-router-dom'
import BlogMain from 'assets/blog_detail_main.png'
import BlogSub1 from 'assets/blog_sub_01.png'
import BlogSub2 from 'assets/blog_sub_02.png'
import QuoteIcon from 'assets/quote_icon.png'
import Blog1 from 'assets/blog_d01.png'
import Blog2 from 'assets/blog_d02.png'
import Blog3 from 'assets/blog_d03.png'
import Story1 from 'assets/story01.png'
import Story2 from 'assets/story02.png'
import Story3 from 'assets/story03.png'
import { Main } from './style'

const Blogsingle = () => {
  return (
   <Main>
  {/* BredCrumb-Section */}
  <div className="bred_crumb blog_detail_bredcrumb">
    <div className="container">
      <div className="bred_text">
        <h1>Blog details</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <span>»</span>
          </li>
          <li>
            <Link to="/blog-detail">Blog single</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  {/* Blog Details Block */}
  <section className="blog_detail_section">
    <div className="container">
      <div className="blog_inner_pannel">
        <div className="review">
          <span>Review</span>
          <span>45 min ago</span>
        </div>
        <div className="section_title">
          <h2>Top rated app of the year!</h2>
        </div>
        <div className="main_img">
          <img src={BlogMain} alt="image" />
        </div>
        <div className="info">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting in
            dustry lorem Ipsum has been the industrys standard dummy text ev er
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic Lorem Ipsum is
            simply dummy text of the printing and typesettingindustry lorem
            Ipsum has been the industrys standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived.
          </p>
          <p>
            Printing and typesetting in dustry lorem Ipsum has been the
            industrys standard dummy text ev er since the 1500s, when an unnown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic Lorem Ipsum is simply dummy text of the
            printing and typesettingindustry lorem Ipsum has been the industrys
            centuries, but also the leap into electronic.
          </p>
          <h3>Why we are best</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting in
            dustry lorem Ipsum has been the industrys standard dummy text ev er
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic.
          </p>
          <ul>
            <li>
              <p>
                {" "}
                <span className="icon">
                  <i className="icofont-check-circled" />
                </span>{" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                in{" "}
              </p>
            </li>
            <li>
              <p>
                {" "}
                <span className="icon">
                  <i className="icofont-check-circled" />
                </span>{" "}
                Dustry lorem Ipsum has been the industrys standard dummy text ev
                er since the when
              </p>
            </li>
            <li>
              <p>
                {" "}
                <span className="icon">
                  <i className="icofont-check-circled" />
                </span>{" "}
                Unknown printer took a galley of type and scrambled it to make.
              </p>
            </li>
            <li>
              <p>
                {" "}
                <span className="icon">
                  <i className="icofont-check-circled" />
                </span>{" "}
                Type specimen book. It has survived not only five centuries, but
                also the leap into electronic.
              </p>
            </li>
            <li>
              <p>
                {" "}
                <span className="icon">
                  <i className="icofont-check-circled" />
                </span>{" "}
                Lorem Ipsum is simply dummy text of the printing.
              </p>
            </li>
            <li>
              <p>
                {" "}
                <span className="icon">
                  <i className="icofont-check-circled" />
                </span>{" "}
                Dustry lorem Ipsum has been the industrys standard dummy text ev
                er since.
              </p>
            </li>
            <li>
              <p>
                {" "}
                <span className="icon">
                  <i className="icofont-check-circled" />
                </span>{" "}
                Unknown printer took a galley of type and scrambled it to make.
              </p>
            </li>
            <li>
              <p>
                {" "}
                <span className="icon">
                  <i className="icofont-check-circled" />
                </span>{" "}
                Type specimen book. It has survived not only.
              </p>
            </li>
          </ul>
        </div>
        <div className="two_img">
          <div className="row">
            <div className="col-md-6">
              <img src={BlogSub1} alt="image" />
            </div>
            <div className="col-md-6">
              <img src={BlogSub2} alt="image" />
            </div>
          </div>
        </div>
        <div className="info">
          <h3>Why we are best</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting in
            dustry lorem Ipsum has been the industrys standard dummy text ev er
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic Lorem Ipsum is
            simply dummy text of the printing and typesettingindustry lorem
            Ipsum has been the industrys standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived.
          </p>
        </div>
        <div className="quote_block">
          <span className="q_icon">
            <img src={QuoteIcon} alt="image" />
          </span>
          <h2>
            Lorem Ipsum is simply dummy text of the printing and typesetting in
            dustry lorem Ipsum has been the industrys standard dummy.
          </h2>
          <p>
            <span className="name">Mr. John Doe,</span> Apper Inc
          </p>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting in
          dustry lorem Ipsum has been the industrys standard dummy text ev er
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic industry.
        </p>
        <div className="blog_authore">
          <div className="authore_info">
            <div className="avtar">
              <img src={Blog2} alt="image" />
            </div>
            <div className="text">
              <h3>By: John Dow</h3>
              <span>July 25, 2022</span>
            </div>
          </div>
          <div className="social_media">
            <ul>
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
        <div className="blog_tags">
          <ul>
            <li className="tags">
              <p>Tags:</p>
            </li>
            <li>
              <span>app,</span>
            </li>
            <li>
              <span>rating,</span>
            </li>
            <li>
              <span>development</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* Comment Section */}
  <section className="row_am comment_section">
    <div className="container">
      <div className="section_title">
        <h2>3 Comments</h2>
      </div>
      <ul>
        <li>
          <div className="authore_info">
            <div className="avtar">
              <img src={Blog1} alt="image" />
            </div>
            <div className="text">
              <span>30 min ago</span>
              <h4>Dolly Shell</h4>
            </div>
          </div>
          <div className="comment">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              in dustry lorem Ipsum has been the in dustrys standard dummy text
              ev er since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen.{" "}
            </p>
          </div>
        </li>
        <li className="replay_comment">
          <div className="authore_info">
            <div className="avtar">
              <img src={Blog2} alt="image" />
            </div>
            <div className="text">
              <span>15 min ago</span>
              <h4>Devil Joe</h4>
            </div>
          </div>
          <div className="comment">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              in dustry lorem Ipsum has been the industrys standard dummy text
              ev er since the when.
            </p>
          </div>
        </li>
        <li>
          <div className="authore_info">
            <div className="avtar">
              <img src={Blog3} alt="image" />
            </div>
            <div className="text">
              <span>2 days ago</span>
              <h4>Sherly Shie</h4>
            </div>
          </div>
          <div className="comment">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              in dustry lorem Ipsum has been the in dustrys standard dummy text
              ev er since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen.{" "}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
  {/* Comment Form Section */}
  <section className="row_am comment_form_section">
    <div className="container">
      <div className="section_title">
        <h2>
          Leave a <span>comment</span>
        </h2>
        <p>
          Your email address will not be published. Required fields are marked *
        </p>
      </div>
      <form action="">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Name *"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email *"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Phone" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Website  "
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <textarea
                className="form-control"
                placeholder="Comments"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="col-md-12 text-center">
            <button className="btn puprple_btn" type="submit">
              POST COMMENTS
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
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
          Read latest <span>story</span>
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typese tting{" "}
          <br /> indus orem Ipsum has beenthe standard dummy.
        </p>
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
              <img src={Story1} alt="image" />
              <span>45 min ago</span>
            </div>
            <div className="story_text">
              <h3>Cool features added!</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry lorem Ipsum has.
              </p>
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
              <img src={Story2} alt="image" />
              <span>45 min ago</span>
            </div>
            <div className="story_text">
              <h3>Top rated app! Yupp.</h3>
              <p>
                Simply dummy text of the printing and typesetting industry lorem
                Ipsum has Lorem Ipsum is.
              </p>
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
              <img src={Story3} alt="image" />
              <span>45 min ago</span>
            </div>
            <div className="story_text">
              <h3>Creative ideas on app.</h3>
              <p>
                Printing and typesetting industry lorem Ipsum has Lorem simply
                dummy text of the.
              </p>
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
</Main>
  )
}

export default Blogsingle
