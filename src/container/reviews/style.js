import styled from "styled-components";
export const Main=styled.div`

/* -----------Download_App_Section-Start------------------ */

/* download app wraper */
.free_app_section {
  padding-top: 70px;
  position: relative;
}

.free_app_section .container {
  max-width: 1370px;
}

.free_app_section .container .free_app_inner {
  background-color: var(--bg-purple);
  border-radius: 30px;
  padding: 20px 100px;
  padding-bottom: 50px;
  position: relative;
  z-index: 999999;
}

/* download app dark background */
.free_app_section .container .free_app_inner .dark_bg {
  overflow: hidden;
}

.free_app_section .container .free_app_inner .dark_bg span {
  z-index: 9999;
}

.free_app_section .container .free_app_inner .row {
  align-items: center;
}

.free_app_section .container .free_app_inner .free_text .section_title {
  text-align: left;
}

/* download app heading h2 */
.free_app_section .container .free_app_inner .free_text .section_title h2 {
  margin-bottom: 20px;
}

.free_app_section .container .free_app_inner .free_text .section_title h2,
.free_app_section .container .free_app_inner .free_text .section_title p {
  color: var(--text-white);
}

.free_app_section .container .free_app_inner .free_text .app_btn {
  display: flex;
  align-items: center;
}

.free_app_section .container .free_app_inner .free_text .app_btn li a {
  display: block;
  padding: 12px 30px;
  background-color: var(--bg-white);
  border: 2px solid var(--purple);
  position: relative;
  border-radius: 12px;
  transition: .4s all;
}

.free_app_section .container .free_app_inner .free_text .app_btn li a:hover {
  -webkit-box-shadow: 1px 4px 8px -2px rgba(0,0,0,0.5);
-moz-box-shadow: 1px 4px 8px -2px rgba(0,0,0,0.5);
box-shadow: 1px 4px 8px -2px rgba(0,0,0,0.5);
}

.free_app_section .container .free_app_inner .free_text .app_btn li:last-child {
  margin-left: 25px;
}

.free_app_section .container .free_app_inner .free_img {
  display: flex;
  align-items: center;
  margin-top: -120px;
}

.free_app_section .container .free_app_inner .free_img img:last-child {
  margin-left: -65px;
}

.purple_backdrop {
  content: "";
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(50, 35, 111, 0.95);
  width: 100%;
  height: 100%;
  z-index: 99999;
  opacity: 0;
  transition: .4s all;
  pointer-events: none;
}


/* Review List Section Css Start */


.review_list_section .review_box {
  padding: 40px 30px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px #EDE9FE;
  margin: 20px 0;
}

.review_list_section .review_box .rating ul {
  display: flex;
}

.review_list_section .review_box .rating ul li span {
  color: #FC9400;
  font-size: 18px;
}

.review_list_section .review_box h3 {
  font-size: 20px;
  color: var(--purple);
  margin: 10px 0;
}

.review_list_section .review_box .reviewer {
  display: flex;
  align-items: center;
  margin-top: 35px;
}

.review_list_section .review_box .reviewer .avtar {
  width: 80px;
}

.review_list_section .review_box .reviewer .text {
  margin-left: 20px;
  width: calc(100% - 100px);
}

.review_list_section .review_box .reviewer .text h3 {
  font-weight: 600;
  color: var(--dark-purple);
  margin-bottom: 0;
}

/* review-freeapp */

/* .review_freeapp {
  margin: 60px 0;
} */

.review_freeapp .free_app_inner {
  /* background: url(assets/free_review_bg.png); */
  background-size: cover;
  background-position: 90%;
}

`