import React from 'react'
import Shape1 from 'assets/banner-shape1.png'
import Shape2 from 'assets/banner-shape2.png'
import Shape3 from 'assets/banner-shape3.png'

import BlogDetail from 'assets/blod-detail.png'
import Story1 from 'assets/story01.png'
import Story2 from 'assets/story02.png'
import Story3 from 'assets/story03.png'
import Story4 from 'assets/story04.png'
import Story5 from 'assets/story05.png'
import Story6 from 'assets/story06.png'
import Story7 from 'assets/story07.png'
import Story8 from 'assets/story08.png'
import Story9 from 'assets/story09.png'
import { Link } from 'react-router-dom'
import { Main } from './style'
const Bloglist = () => {
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
        <h1>Latest blog post</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <span>»</span>
          </li>
          <li>
            <Link to="/blog-list">Blog list</Link>
          </li>
        </ul>
        <div className="search_bar">
          <form action="">
            <div className="form-group">
              <input
                type="text"
                placeholder="Search here"
                className="form-control"
              />
              <button className="btn" type="submit">
                <i className="icofont-search-1" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Blog-Detail-Section-Start */}
  <section className="row_am blog_list_main">
    {/* container start */}
    <div className="container">
      {/* row start */}
      <div className="row">
        <div className="col-lg-6" data-aos="fade-in" data-aos-duration={1500}>
          <div className="blog_img">
            <img src={BlogDetail} alt="image" />
            <span>20 min ago</span>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="blog_text">
            <span className="choice_badge">EDITOR CHOICE</span>
            <div className="section_title">
              <h2>Top rated app of the year!</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                in dustry lorem Ipsum has been the industrys standard dummy text
                ev er since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic Lorem Ipsum is simply dummy text of the printing and
                typesetting.
              </p>
              <a href="blog-single.html">READ MORE</a>
            </div>
          </div>
        </div>
      </div>
      {/* row end */}
    </div>
    {/* container end */}
  </section>
  {/* Blog-Detail-Section-end */}
  {/* Story-Section-Start */}
  <section className="row_am latest_story blog_list_story" id="blog">
    {/* container start */}
    <div className="container">
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
              <Link to="/blog-single">READ MORE</Link>
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
              <Link to="/blog-single">READ MORE</Link>
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
              <a href="blog-single.html">READ MORE</a>
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
              <img src={Story4} alt="image" />
              <span>45 min ago</span>
            </div>
            <div className="story_text">
              <h3>Excellence UI design</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry lorem Ipsum has.
              </p>
              <a href="blog-single.html">READ MORE</a>
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
              <img src={Story5} alt="image" />
              <span>45 min ago</span>
            </div>
            <div className="story_text">
              <h3>Quick and easy Search</h3>
              <p>
                Simply dummy text of the printing and typesetting industry lorem
                Ipsum has Lorem Ipsum is.
              </p>
              <Link to="/blog-single">READ MORE</Link>
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
              <img src={Story6} alt="image" />
              <span>45 min ago</span>
            </div>
            <div className="story_text">
              <h3>Chat function eded</h3>
              <p>
                Printing and typesetting industry lorem Ipsum has Lorem simply
                dummy text of the.
              </p>
              <Link to="/blog-single">READ MORE</Link>
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
              <img src={Story7} alt="image" />
              <span>45 min ago</span>
            </div>
            <div className="story_text">
              <h3>Cool features added!</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry lorem Ipsum has.
              </p>
              <Link to="/blog-single">READ MORE</Link>
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
              <img src={Story8} alt="image" />
              <span>45 min ago</span>
            </div>
            <div className="story_text">
              <h3>Top rated app! Yupp.</h3>
              <p>
                Simply dummy text of the printing and typesetting industry lorem
                Ipsum has Lorem Ipsum is.
              </p>
              <Link to="/blog-single">READ MORE</Link>
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
              <img src={Story9} alt="image" />
              <span>45 min ago</span>
            </div>
            <div className="story_text">
              <h3>Creative ideas on app.</h3>
              <p>
                Printing and typesetting industry lorem Ipsum has Lorem simply
                dummy text of the.
              </p>
              <Link to="blog-single">READ MORE</Link>
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
              <img src={Story1} alt="image" />
              <span>45 min ago</span>
            </div>
            <div className="story_text">
              <h3>Excellence UI design</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry lorem Ipsum has.
              </p>
              <Link to="/blog-single">READ MORE</Link>
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
              <h3>Quick and easy Search</h3>
              <p>
                Simply dummy text of the printing and typesetting industry lorem
                Ipsum has Lorem Ipsum is.
              </p>
              <Link to="/blog-single">READ MORE</Link>
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
              <h3>Chat function eded</h3>
              <p>
                Printing and typesetting industry lorem Ipsum has Lorem simply
                dummy text of the.
              </p>
              <Link to="/blog-single">READ MORE</Link>
            </div>
          </div>
        </div>
      </div>
      {/* row end */}
      {/* Pagination */}
      <div className="pagination_block">
        <ul>
          <li>
            <a href="#" className="prev">
              <i className="icofont-arrow-left" /> Prev
            </a>
          </li>
          <li>
            <a href="#">1</a>
          </li>
          <li>
            <a href="#" className="active">
              2
            </a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">4</a>
          </li>
          <li>
            <a href="#">5</a>
          </li>
          <li>
            <a href="#">6</a>
          </li>
          <li>
            <a href="#" className="next">
              Next <i className="icofont-arrow-right" />
            </a>
          </li>
        </ul>
      </div>
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

  </>
  )
}

export default Bloglist;
