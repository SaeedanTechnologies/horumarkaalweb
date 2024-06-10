import styled from "styled-components";
export const Main=styled.div`


/* feature sectoion */
.features_section .feature_detail {
  background-color: var(--bg-white);
  border-radius: 30px;
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 120px;
  padding-top: 60px;
  padding-bottom: 20px;
  box-shadow: 0px 4px 30px #EDE9FE;
}

/* features section image */
.features_section .feature_detail .feature_img {
  position: absolute;
  left: 37%;
  transform: translateX(0%);
  top: -75px;
}

.features_section .feature_detail .feature_img img {
  max-width: 100%;
}

/* features section box */

.features_section .feature_detail .feature_box {
  max-width: 410px;
}

.features_section .feature_detail .feature_box .data_block {
  margin-bottom: 50px;
}

.features_section .feature_detail .feature_box .data_block h4 {
  font-size: 20px;
  color: var(--dark-purple);
  font-weight: 600;
}

.features_section .feature_detail .left_data {
  text-align: right;
  padding-left: 130px;
}

.features_section .feature_detail .right_data {
  padding-right: 130px;
}

.features_section .feature_detail .left_data .data_block .icon {
  margin-right: -15px;
}

.features_section .feature_detail .right_data .data_block .icon {
  margin-left: -15px;
}

.features_section .container {
  max-width: 1370px;
}

/* -------------Modern-Ui-Section-Css-Start---------------- */
/* modern ui section wraper */
.modern_ui_section .row {
  align-items: center;
}

.modern_ui_section .design_block {
  margin-top: 45px;
}

/* modern ui text */
.modern_ui_section .section_title {
  text-align: left;
}

.modern_ui_section .ui_text {
  padding-right: 75px;
}

/* modern ui list */
.modern_ui_section .design_block li {
  padding-left: 40px;
  position: relative;
  margin-bottom: 25px;
}

.modern_ui_section .design_block li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 5px;
  background-image: url(assets/right_icon.png);
  width: 22px;
  height: 22px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.modern_ui_section .design_block li h4 {
  font-size: 20px;
  color: var(--dark-purple);
  font-weight: 600;
  margin-bottom: 8px;
}

.modern_ui_section .design_block li p {
  margin-bottom: 0;
}

/* modern ui images */
.modern_ui_section .ui_images {
  display: flex;
  position: relative;
}

.modern_ui_section .ui_images::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 570px;
  height: 570px;
  border-radius: 100%;
  background-color: var(--bg-white);
  z-index: -1;
}

.modern_ui_section .ui_images .right_img img:nth-child(3) {
  margin-left: -140px;
  margin-top: -20px;
}

.modern_ui_section .ui_images .right_img img:nth-child(2) {
  margin-left: -90px;
  margin-top: -20px;
}

.modern_ui_section .ui_images .right_img img:nth-child(1) {
  position: relative;
  top: 15px;
  z-index: 99;
  margin-left: -15px;
}


/* -------------How_It_Works-Section-Css-Start------------------ */

/* how it works wraper */
.how_it_works .container {
  max-width: 1370px;
}

.how_it_works .how_it_inner {
  background-color: var(--bg-white);
  padding: 70px 0;
  padding-bottom: 250px;
  border-radius: 30px;
  box-shadow: 0px 4px 30px #EDE9FE;
}

/* how it works list */
.how_it_works .step_block ul {
  max-width: 1080px;
  margin: 0 auto;
  padding: 10px;
}

.how_it_works .step_block ul li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: 50px;
}

.how_it_works .step_block ul li::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50px;
  transform: translateX(-50%);
  width: 4px;
  height: calc(100% + 100px);
  background-color: var(--light-bg);
}

.how_it_works .step_block ul li:first-child::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 14px;
  height: 14px;
  background-color: var(--light-bg);
  border-radius: 15px;
}

.how_it_works .step_block ul li:first-child::before {
  top: 0;
}

.how_it_works .step_block ul li:last-child::before {
  height: 50%;
  top: 0;
}

.how_it_works .step_block ul li .step_text,
.how_it_works .step_block ul li .step_img {
  width: 360px;
  text-align: right;
}

/* how it works image */
.how_it_works .step_block ul li .step_img img {
  max-width: 100%;
}

/* how it works heading h4 */
.how_it_works .step_block ul li .step_text h4 {
  font-size: 20px;
  font-weight: 600;
}

.how_it_works .step_block ul li .step_text .app_icon {
  margin-bottom: 10px;
}

.how_it_works .step_block ul li .step_text .app_icon a {
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: var(--light-bg);
  color: var(--text-white);
  font-size: 20px;
  text-align: center;
  line-height: 40px;
  transition: .4s all;
}

.how_it_works .step_block ul li .step_text .app_icon a:hover {
  background-color: var(--purple);
}

.how_it_works .step_block ul li .step_text span {
  font-weight: 600;
}

.how_it_works .step_block ul li .step_text span a {
  color: var(--purple);
  text-decoration: underline;
}

.how_it_works .step_block ul li:nth-child(2) {
  flex-direction: row-reverse;
}

.how_it_works .step_block ul li:nth-child(2) .step_text,
.how_it_works .step_block ul li:nth-child(2) .step_img {
  text-align: left;
}

/* how it works numbers */
.how_it_works .step_block ul li .step_number {
  /* background-image: url('../../assets/icon_bg.png'); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 110px;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* background-color: red; */
}

/* how it works numbers heading h3 */
.how_it_works .step_block ul li .step_number h3 {
  font-size: 30px;
  font-weight: 600;
}

/* how it works video  */
.how_it_works .yt_video {
  max-width: 1170px;
  margin: 0 auto;
  margin-top: -200px;
  position: relative;
  overflow: hidden;
}


.how_it_works .yt_video .thumbnil {
  position: relative;
}

.how_it_works .yt_video .thumbnil img {
  max-width: 100%;
}

.how_it_works .yt_video .thumbnil a {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: var(--text-white);
  font-weight: 600;
  z-index: 999;
  cursor: pointer;
}

.how_it_works .yt_video .thumbnil a span {
  display: block;
  font-weight: 700;
  font-size: 30px;
}

.how_it_works .yt_video .thumbnil a .play_btn {
  background-color: rgba(255, 255, 255, 0.1);
  width: 96px;
  height: 96px;
  border-radius: 100px;
  text-align: center;
  margin: 0 auto;
  line-height: 96px;
  position: relative;
  display: block;
  margin-bottom: 40px;
}

.how_it_works .yt_video .thumbnil a .play_btn img {
  width: 50px;
  position: relative;
  z-index: 999;
}


/* how it works video model   */
.modal {
  z-index: 999999;
}

.modal-backdrop.show {
  z-index: 99999;
  opacity: .7;
}

.youtube-video .modal-dialog {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  padding: 0 15px;
  height: 100%;
  max-width: 1240px !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#video-container {
  position: relative;
  padding-bottom: 50%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}

iframe#youtubevideo {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.youtube-video .modal-footer {
  border: none;
  text-align: center;
  display: block;
  padding: 0;
}

.youtube-video .modal-content {
  background: none !important;
  border: none;
}

#close-video {
  color: #fff;
  font-size: 30px;
}

/* video banner shape animation */
.thumbnil .banner_shape1, .banner_shape2, .banner_shape3 { 
  position: absolute; }

.thumbnil .banner_shape1 {
  top: 100px;
  left: 10%;
  animation: mymove 10s infinite;
}

.thumbnil .banner_shape2 {
  bottom: 50px;
  left: 20%;
  animation: mymove 5s infinite;
}

.thumbnil .banner_shape3 {
  top: 40px;
  right: 8%;
  animation: mymove 3s infinite;
}


@keyframes mymove {
50% {transform: rotate(180deg);}
}

/* ------------Testimonial-Slider-Css-Start------------- */
/* testimonials wraper  */
#testimonial_slider {
  max-width: 550px;
  margin: 0 auto;
}

.testimonial_section .testimonial_block {
  background-image: url(assets/testimonial_bg.png);
  background-size: cover;
  background-position: center;
  position: relative;
  margin-top: 65px;
}

.testimonial_section .testimonial_block .testimonial_slide_box {
  text-align: center;
  width: 430px;
  padding: 10px;
  margin: 0 auto;
}

/* testimonials rating  */
.testimonial_section .testimonial_block .rating span {
  color: #FC9400;
  font-size: 18px;
}

.testimonial_section .testimonial_block .testimonial_slide_box .review {
  margin-top: 10px;
  margin-bottom: 30px;
}

/* testimonials image  */
.testimonial_section .testimonial_block .testimonial_slide_box .testimonial_img img {
  margin: 0 auto;
}

/* testimonials heading h3 */
.testimonial_section .testimonial_block .testimonial_slide_box h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 0;
  margin-top: 10px;
}

.testimonial_section .testimonial_block .testimonial_slide_box .designation {
  font-size: 15px;
}

/* testimonials total review */
.testimonial_section .total_review {
  text-align: center;
  margin-top: 60px;
}

.testimonial_section .total_review .rating {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* testimonials paragraph */
.testimonial_section .total_review .rating p {
  margin-bottom: 0;
  font-weight: 600;
  margin-left: 5px;
  color: var(--dark-purple);
}

/* testimonials heading */
.testimonial_section .total_review h3 {
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 0;
  color: var(--dark-purple);
}

.testimonial_section .total_review a {
  color: var(--purple);
  font-weight: 700;
}

.testimonial_section .testimonial_block .avtar_faces {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
  width: 100%;
}

.testimonial_section .testimonial_block .avtar_faces img {
  max-width: 100%;
}

/* -------------------Pricing-Section---------------------- */
/* pricing switch */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;

}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: white;
}

input:focus + .slider {
 background-color: white;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
   background-color: white;
}

.slider.round:before {
  border-radius: 50%;
   background-color: #6A49F2;
}

/* pricing wraper  */
.pricing_section .toggle_block {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* pricing toggle button */
.pricing_section .toggle_block span {
  color: var(--dark-purple);
  font-weight: 600;
  display: block;
  margin: 0 5px;
}

.tog_btn.month_active {
  left: 35px !important;
}

.pricing_section .toggle_block span.deactive {
  color: var(--body-text-purple);
}

.pricing_section .toggle_block .offer {
  background-color: var(--bg-white);
  border-radius: 5px;
  padding: 2px 10px;
  font-weight: 400;
  font-size: 13px;
  color: var(--purple);
}

.pricing_section .toggle_block .tog_block {
  width: 70px;
  height: 35px;
  background-color: var(--bg-white);
  border-radius: 18px;
  margin: 0 10px;
  position: relative;
  cursor: pointer;
}

.pricing_section .toggle_block .tog_block .tog_btn {
  height: 23px;
  width: 23px;
  border-radius: 25px;
  display: block;
  background-color: var(--purple);
  position: absolute;
  left: 3px;
  top: 50%;
  transform: translateY(-50%);
  transition: .4s all;
}

.pricing_section .toggle_block .month.active,
.pricing_section .toggle_block .years.active {
  color: var(--purple);
}

/* pricing pannel */
.pricing_section .pricing_pannel {
  margin-top: 50px;
  display: none;
}

.pricing_section .pricing_pannel.active {
  display: block;
}

.pricing_section .pricing_pannel .pricing_block {
  text-align: center;
  background-color: var(--bg-white);
  min-height: 700px;
  border-radius: 12px;
  padding-top: 60px;
  margin-bottom: 40px;
  box-shadow: 0px 4px 30px #EDE9FE;
}

.pricing_section .pricing_pannel .pricing_block.highlited_block {
  background-color: var(--purple);
}

.pricing_section .pricing_pannel .pricing_block.highlited_block p,
.pricing_section .pricing_pannel .pricing_block.highlited_block h3,
.pricing_section .pricing_pannel .pricing_block.highlited_block span,
.pricing_section .pricing_pannel .pricing_block.highlited_block .pkg_name span {
  color: var(--text-white);
}

.pricing_section .pricing_pannel .pricing_block .icon {
  margin-bottom: 35px;
}

/* pricing box image */
.pricing_section .pricing_pannel .pricing_block .icon img {
  width: 120px;
}

/* pricing box heading h3 */
.pricing_section .pricing_pannel .pricing_block .pkg_name h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 0;
}

.pricing_section .pricing_pannel .pricing_block .pkg_name span {
  color: var(--body-text-purple);
  font-size: 15px;
}

.pricing_section .pricing_pannel .pricing_block .price {
  font-size: 48px;
  color: var(--purple);
  margin: 25px 0;
  display: block;
  font-weight: 600;
}

/* pricing box list */
.pricing_section .pricing_pannel .pricing_block .benifits {
  margin-bottom: 40px;
}

.pricing_section .pricing_pannel .pricing_block .benifits li p {
  margin-bottom: 5px;
}

.pricing_section .contact_text {
  text-align: center;
  margin-bottom: 0;
}

.pricing_section .contact_text a {
  color: var(--purple);
  text-decoration: underline;
}

/* -------------FAQ-Section-Css-Start----------------- */

/* faq wraper */
.faq_section .faq_panel {
  margin-top: 40px;
}

/* faq box */
.faq_section .faq_panel .card {
  border: none;
  margin-bottom: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px #EDE9FE;
  padding: 16px 0;
}

.faq_section .faq_panel .card:last-child {
  margin-bottom: 0;
}

.faq_section .faq_panel .card-header {
  background-color: transparent;
  border: none;
  padding-bottom: 0;
  padding-top: 0;
}

.faq_section .faq_panel .card-header .btn {
  padding: 0;
  color: var(--dark-purple);
  font-weight: 600;
  font-size: 20px;
}

.faq_section .faq_panel .card-header .btn.active {
  color: var(--purple);
}

.faq_panel .accordion button,
.faq_panel .accordion button:hover,
.faq_panel .accordion button:focus {
  text-decoration: none;
}

.faq_section .faq_panel .card-header .icon_faq {
  position: absolute;
  right: 20px;
  color: #839BC0;
}

/* faq heading h2 */
.faq_section .faq_panel .card-header h2 {
  line-height: 1;
}

/* faq paragraph */
.faq_section .faq_panel .card-body {
  padding-bottom: 0;
}


/* -----------Interface_Section-Css-Start----------------- */

/* interface wraper */
.interface_section .screen_slider {
  margin-top: 35px;
  min-height: 720px;
}

/* interface images */
.interface_section .owl-item .screen_frame_img img {
  transform: scale(.9);
  border: 2px solid #000;
  border-radius: 20px;
  transition: 1s all;
  margin: 0 auto;
}

.interface_section .owl-item.center .screen_frame_img img {
  transform: scale(1);
  border: 3px solid #000;
}

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

/* ---------------Latest_Story-Css-Start------------- */

/* latest story wraper */
.latest_story {
  margin-bottom: 80px;
}

/* latest story box */
.latest_story .story_box {
  background-color: var(--bg-white);
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 4px 30px #EDE9FE; 
}

/* latest story image */
.latest_story .story_box .story_img {
  position: relative;
}

.latest_story .story_box .story_img img {
  max-width: 100%;
  border-radius: 12px;

}

.latest_story .story_box .story_img span {
  position: absolute;
  left: 15px;
  top: 15px;
  font-size: 14px;
  color: var(--text-white);
}

/* latest story pargraph */
.latest_story .story_box .story_text {
  padding: 20px 30px;
}

/* latest story heading h3 */
.latest_story .story_box .story_text h3 {
  color: var(--dark-purple);
  font-size: 20px;
  margin-bottom: 15px;
  font-weight: 600;
}

/* latest story link text */
.latest_story .story_box .story_text a {
  color: var(--purple);
  margin-top: 25px;
  display: block;
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: 600;
}

.latest_story .story_box .story_text a:hover {
  text-decoration:underline;
}


`