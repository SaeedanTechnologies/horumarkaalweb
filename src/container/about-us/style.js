import styled from "styled-components";
export const Main=styled.div`


/* ----About App Soluction Section--- */

.app_solution_section .row {
  align-items: center;
}

.app_solution_section .app_text .section_title {
  text-align: left;
  margin-bottom: 20px;
} 

.app_solution_section .app_text .section_title h2 {
  letter-spacing: -1px;
}

.app_solution_section .app_text p {
  padding-right: 40px;
}

.app_solution_section .app_images {
  position: relative;
}

.app_solution_section .app_images ul {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
}

.app_solution_section .app_images ul li {
  position: relative;
}

.app_solution_section .app_images ul li a {
  position: relative;
}

.app_solution_section .app_images ul li a .play_icon {
  background-color: rgba(255, 255, 255, 0.1);
  width: 96px;
  height: 96px;
  border-radius: 100px;
  text-align: center;
  margin: 0 auto;
  line-height: 96px;
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50% , -50%);

}

.app_solution_section .app_images ul li img {
  max-width: 100%;
}

.app_solution_section .app_images li:first-child {
  margin-bottom: 30px;
  text-align: center;
  width: 100%;
}

.app_solution_section .app_images ul li:nth-child(2) {
  left: -5px;
  cursor: pointer;
}

.app_solution_section .app_images ul li:nth-child(3) {
  right: -5px;
}

.app_solution_section .app_images::before {
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


.about_app_section .about_img {
  display: flex;
  align-items: center;
  position: relative;
}

/* about us section images*/
.about_app_section .about_img img {
  max-width: 100%;
}

.about_app_section .about_img::before {
  content: "";
  position: absolute;
  left: 38%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  background-color: var(--bg-white);
  border-radius: 100%;
  z-index: -1;
}

.about_app_section .about_img .screen_img {
  margin-left: -135px;
  margin-top: 110px;
}

.about_app_section .about_text .section_title {
  text-align: left;
}

.about_app_section .about_text .section_title h2 {
  margin-bottom: 15px;
}

/* about us section  statastics nomber */
.about_app_section .about_text .app_statstic {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-top: 40px;
}

.about_app_section .about_text .app_statstic li {
  width: 248px;
  background-color: var(--bg-white);
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  border-radius: 12px;
  padding: 15px 10px;
  padding-left: 35px;
  box-shadow: 0px 4px 10px #EDE9FE;
}

.about_app_section .about_text .app_statstic li .icon {
  margin-right: 9px;
}

.about_app_section .about_text .app_statstic li p {
  margin-bottom: 0;
  line-height: 1;
  color: var(--dark-purple);
}

.about_app_section .about_text .app_statstic li p:first-child {
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 3px;
}
/* ------Why Section CSS Start------ */

.why_we_section {
  display: flex;
  justify-content: center;
}

.why_we_section .why_inner {
  background-color: var(--bg-white);
  border-radius: 30px;
  width: 1370px;
  margin: 0 15px;
  box-shadow: 0 4px 30px #EDE9FE;
  padding: 85px 0;
}

.why_we_section .why_inner .section_title {
  margin-bottom: 50px;
}

.why_we_section .why_inner .why_box .icon {
  margin-bottom: 45px;
}

.why_we_section .why_inner .why_box .icon img {
  max-width: 100%;
}

.why_we_section .why_inner .why_box .text h3 {
  font-size: 20px;
  font-weight: 600;
  color: var(--dark-purple);
  margin-bottom: 10px;
}

.why_we_section .why_inner .why_box .text p {
  margin-bottom: 0;
}



/* About-Page-Sectino */
.about_page_sectino img {max-width: 100%;}

/* -----------experts_team_sectio---------- */

.experts_team_section .experts_box {
  position: relative;
  text-align: center;
  padding: 35px 30px;
  border-radius: 12px;
  background-color: transparent;
  transition: .4s all;
}

.experts_team_section .experts_box img {
  margin-bottom: 30px;
  max-width: 100%;
}

.experts_team_section .experts_box .text h3 {
  font-size: 20px;
  font-weight: 600;
  color: var(--dark-purple);
  transition: .4s all;
}

.experts_team_section .experts_box .text span {
  color: var(--body-text-purple);
}

.experts_team_section .experts_box .social_media {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
}

.experts_team_section .experts_box .social_media a {
  display: block;
  width: 33px;
  height: 33px;
  border: 1px solid #CCCCE2;
  border-radius: 50px;
  text-align: center;
  line-height: 31px;
  color: #898AAE;
  margin: 0 5px;
  transition: .4s all;
  font-size: 15px;
}

.experts_team_section .experts_box .social_media a:hover {
  border-color: var(--purple);
  background-color: var(--bg-purple);
  color: var(--text-white);
}

.experts_team_section .experts_box:hover {
  background-color: var(--bg-white);
  box-shadow: 0 4px 10px #EDE9FE;
}

.experts_team_section .experts_box:hover h3 {
  color: var(--purple);
}

/* ---------Query-Section-Css-Start-------- */
.query_section {
  display: flex;
  justify-content: center;
}

.query_inner {
  width: 1370px;
  margin: 0 15px;
  /*background-image: url(assets/query_bg.png);*/
  background: var(--purple);
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 30px;
  min-height: 420px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.query_inner .section_title h2 , 
.query_inner .section_title p {
  color: #fff;
}

.query_inner .section_title {
  margin-bottom: 40px;
}

.query_inner .white_btn {
  font-size: 25px;
  font-weight: 700;
}

.query_inner .white_btn:hover {
  border-color: #fff;
}

.about_trust_section {
  margin-bottom: 40px;
}





`