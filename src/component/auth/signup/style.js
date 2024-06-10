import styled from "styled-components";
export const Main =styled.div`


.full_bg {
  /*background-image: url(assets/form_bg.png);*/
  background-size: cover;
  background: var(--purple);
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  padding-bottom: 50px;
}

.signup_section {
  position: relative;
}

.signup_section .back_btn {
  position: absolute;
  left: 0;
  top: 92px;
  color: #fff;
  font-weight: 500;
}

.signup_section .top_part {
  text-align: center;
  padding-top: 80px;
  padding-bottom: 50px;
}

.signup_form {
  width: 570px;
  margin: 0 auto;
  padding: 40px 0;
  border-radius: 12px;
  box-shadow: 0 4px 10px #00000054;
  background-color: var(--bg-white);
}

.signup_form form {
  padding: 0 60px;
}

.signup_form .section_title {
  padding: 0 15px;
}

.signup_form .section_title h2 {
  font-weight: 600;
}

.signup_form form .form-group {
  margin-bottom: 20px;
}

.signup_form form .form-group .form-control {
  height: 60px;
  padding: 5px 20px;
  color: var(--body-text-purple);
  border: 2px solid #E1DBF4;
  border-radius: 12px;
  font-weight: 500;
}

.signup_form form .form-group .form-control:focus {
  box-shadow: none;
  border-color: var(--purple);
  color: var(--purple);
}

.signup_form form .form-group .puprple_btn {
  min-width: 240px;
  display: block;
  margin: 40px auto;
  margin-bottom: 30px;
  font-weight: 600;
}

.signup_form .or_block {
  display: block;
  text-align: center;
  border-bottom: 1px solid #E3E1ED;
}

.signup_form .or_block span {
  position: relative;
  top: 14px;
  padding: 0 5px;
  background-color: var(--bg-white);
  color: #8081AD;
}

.signup_form .or_option {
  text-align: center;
}

.signup_form .or_option > p {
  color: #8081AD;
  margin-top: 30px;
}

.signup_form .or_option .google_btn {
  min-width: 330px;
  border: 2px solid #E1DBF4;
  text-align: center;
  color: var(--body-text-purple);
  padding: 16px;
  border-radius: 100px;
  transition: .4s all;
}

.signup_form .or_option .google_btn:hover {
  border-color: var(--light-purple);
}

.signup_form .or_option .google_btn img {
  margin-right: 20px;
}

.signup_form .or_option p a {
  color: var(--purple);
  text-decoration: underline;
  transition: .4s all;
}

.signup_form .or_option p a:hover {
  color: var(--dark-purple);
}


`