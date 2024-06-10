import styled from 'styled-components'
export const Main=styled.div`


/* Blog Detail Css Start */
.blog_detail_section {
  margin-bottom: 40px;
}

.blog_detail_bredcrumb.bred_crumb .bred_text {
  margin-top: -30px;
}

.blog_detail_section .blog_inner_pannel {
  background-color: #FFFFFF;
  border-radius: 30px;
  padding: 45px 60px;
  margin-top: -120px;
  position: relative;
  box-shadow: 0 8px 30px #c0bad76b;
}

.blog_detail_section .blog_inner_pannel .review {
  display: flex; 
  justify-content: center;
  margin-bottom: 15px;
}

.blog_detail_section .blog_inner_pannel .review span {
  line-height: 1;
}

.blog_detail_section .blog_inner_pannel .review span:first-child {
  color: var(--purple);
  display: inline-block;
  font-weight: 700;
}

.blog_detail_section .blog_inner_pannel .review span:last-child {
  color: var(--dark-purple);
  display: inline-block;
  margin-left: 15px;
  padding-left: 15px;
  border-left: 1px solid var(--dark-purple);
}

.blog_detail_section .blog_inner_pannel .section_title {
  margin-bottom: 40px;
}

.blog_detail_section .blog_inner_pannel .section_title h2 {
  margin-bottom: 0;
}

.blog_detail_section .blog_inner_pannel img {
  max-width: 100%;
}

.blog_detail_section .blog_inner_pannel .main_img {
  margin-bottom: 30px;
}

.blog_detail_section .blog_inner_pannel .info h3 {
  font-weight: 700;
  color: var(--dark-purple);
  margin-top: 30px;
  font-size: 25px;
  margin-bottom: 15px;
}

.blog_detail_section .blog_inner_pannel .info ul {
  padding-left: 50px;
  padding-top: 10px;
  margin-bottom: 30px;
}

.blog_detail_section .blog_inner_pannel .info ul li p {
  position: relative;
  padding-left: 25px;
  margin-bottom: 0;
}

.blog_detail_section .blog_inner_pannel .info ul li p .icon {
  position: absolute;
  left: 0;
  color: var(--purple);
}

.blog_detail_section .blog_inner_pannel .two_img {
  margin-bottom: 70px;
}

.blog_detail_section .blog_inner_pannel .quote_block {
  background-color: #F6F4FE;
  border-radius: 12px;
  padding: 55px 35px 35px 60px;
  position: relative;
  margin-top: 50px;
  margin-bottom: 35px;
}

.blog_detail_section .blog_inner_pannel .quote_block h2 {
  font-size: 25px;
  line-height: 37px;
}

.blog_detail_section .blog_inner_pannel .quote_block p {
  margin-bottom: 0;
  margin-top: 15px;
}

.blog_detail_section .blog_inner_pannel .quote_block .name {
  color: var(--purple);
  font-weight: 700;
}

.blog_detail_section .blog_inner_pannel .quote_block .q_icon {
  position: absolute;
  top: -20px;
  width: 63px;
  height: 63px;
  background-color: var(--bg-white);
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.blog_detail_section .blog_inner_pannel .quote_block .q_icon img {
  width: 35px;
}

.blog_detail_section .blog_inner_pannel .blog_authore {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
  border-top: 1px solid #D6D3E3;
  border-bottom: 1px solid #D6D3E3;
  margin: 35px 0;
}

.blog_detail_section .blog_inner_pannel .blog_authore .authore_info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.blog_detail_section .blog_inner_pannel .blog_authore .authore_info .text {
  margin-left: 20px;
}

.blog_detail_section .blog_inner_pannel .blog_authore .authore_info .text h3 {
  font-size: 20px;
  font-weight: 600;
  color: var(--dark-purple);
  margin-bottom: 5px;
}

.blog_detail_section .blog_inner_pannel .blog_authore .authore_info .text span {
  font-size: 14px;
}

.blog_detail_section .blog_inner_pannel .blog_authore .social_media ul {
  display: flex;
}

/* Social Media link list */
.blog_detail_section .blog_inner_pannel .blog_authore .social_media ul li a {
  display: block;
  width: 37px;
  height: 37px;
  text-align: center;
  line-height: 37px;
  font-size: 15px;
  border: 1px solid #CCC9D7;
  border-radius: 50px;
  margin-right: 10px;
  transition: .4s all;
}

.blog_detail_section .blog_inner_pannel .blog_authore .social_media ul li:last-child a {
  margin-right: 0;
}

.blog_detail_section .blog_inner_pannel .blog_authore .social_media ul li a:hover {
  background-color: var(--bg-purple);
  color: var(--text-white);
}

.blog_detail_section .blog_inner_pannel .blog_tags ul {
  display: flex;
  justify-content: center;
  align-items: center;
}

.blog_detail_section .blog_inner_pannel .blog_tags ul .tags p {
  margin-bottom: 0;
  color: var(--dark-purple);
  font-weight: 500;
  margin-right: 5px;
}

.blog_detail_section .blog_inner_pannel .blog_tags ul li span {
  color: var(--purple);
  font-weight: 500;
}


/* comment section Css Start */
.comment_section ul {
  margin-top: 30px;
}

.comment_section ul li {
  display: flex;
  align-items: center;
  padding: 30px 0;
  border-top: 1px solid #D6D3E3;
}

.comment_section ul li:last-child {
  padding-bottom: 0;
}

.comment_section ul li.replay_comment {
  margin-left: 110px;
}

.comment_section ul li .authore_info {
  display: flex;
  align-items: center;
  width: 260px;
}

.comment_section ul li .authore_info .avtar {
  width: 88px;
  margin-right: 20px;
}

.comment_section ul li .authore_info .text {
  width: calc(100% - 108px);
}

.comment_section ul li .authore_info .text h4 {
  font-size: 20px;
  font-weight: 600;
  color: var(--dark-purple);
}

.comment_section ul li .authore_info .text span {
  font-size: 14px;
}

.comment_section ul li .comment {
  width: calc(100% - 310px);
  margin-left: 50px;
}

.comment_section ul li .comment p {
  margin-bottom: 0;
}
/* comment-form-section */

.comment_form_section form {
  margin-top: 30px;
}

.comment_form_section form .form-group .form-control {
  border-radius: 12px;
  height: 60px;
  box-shadow: 0 3px 6px #EDE9FE;
  border: transparent;
  margin-bottom: 30px;
  color: var(--body-text-purple);
  padding: 15px;
}

.comment_form_section form .form-group .form-control::placeholder {
  color: var(--body-text-purple);
}

.comment_form_section form .form-group textarea.form-control {
  height: 140px;
  padding-top: 15px;
  resize: none;
}


`