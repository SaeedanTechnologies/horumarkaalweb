import styled from "styled-components";
export const Main=styled.div`



/* -------------------Pricing-Section---------------------- */

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
`