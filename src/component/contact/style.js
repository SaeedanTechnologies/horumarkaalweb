import styled from 'styled-components'
export const Main =styled.div`



.contact_page_section .contact_inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-top: -150px;
}

.contact_page_section .contact_inner .section_title h2 {
  font-weight: 600;
}

.contact_page_section .contact_inner .contact_form {
  width: 570px;
  padding: 50px 60px;
  border-radius: 22px;
  background-color: #fff;
  box-shadow: 0 4px 10px #EDE9FE;
}

.contact_page_section .contact_inner .contact_form h2 {
  margin-bottom: 0;
}

.contact_page_section .contact_inner .contact_form form {
  margin-top: 30px;
}

.contact_page_section .contact_inner .contact_form form .form-group {
  margin-bottom: 20px;
}

.contact_page_section .contact_inner .contact_form form .form-group .form-control {
  height: 60px;
  padding: 5px 20px;
  color: var(--body-text-purple);
  border: 2px solid #E1DBF4;
  border-radius: 12px;
  font-weight: 500;
}

.contact_page_section .contact_inner .contact_form form .form-group .form-control:focus {
  box-shadow: none;
  border-color: var(--purple);
  color: var(--purple);
}

.contact_page_section .contact_inner .contact_form form .form-group textarea.form-control {
  height: 140px;
  padding-top: 15px;
}

.contact_page_section .contact_inner .contact_form form .term_check {
  display: flex;
  align-items: center;
}

.contact_page_section .contact_inner .contact_form form .term_check input {
  width: 17px;
  height: 17px;
  accent-color: var(--purple);
}

.contact_page_section .contact_inner .contact_form form .term_check label {
  font-size: 13px;
  margin-bottom: 0;
  margin-left: 7px;
}

.contact_page_section .contact_inner .contact_form form .form-group button {
  width: 240px;
  margin: 0 auto;
  display: block;
  margin-top: 10px;
  margin-bottom: 0;
}

.contact_page_section .contact_inner .contact_info {
  width: 480px;
}

.contact_page_section .contact_inner .contact_info .section_title {
  text-align: left;
  margin-top: 15px;
}

.contact_page_section .contact_inner .contact_info .section_title p a {
  color: var(--purple);
  text-decoration: underline;
}

.contact_page_section .contact_inner .contact_info .btn {
  width: 180px;
  margin: 10px 0 50px 0;
}

.contact_page_section .contact_inner .contact_info .contact_info_list li {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.contact_page_section .contact_inner .contact_info .contact_info_list li:last-child {
  margin-bottom: 0;
}

.contact_page_section .contact_inner .contact_info .contact_info_list li .img {
  width: 65px;
  margin-right: 20px;
}

.contact_page_section .contact_inner .contact_info .contact_info_list li .text {
  width: calc(100% - 85px);
}

.contact_page_section .contact_inner .contact_info .contact_info_list li .text span {
  display: block;
  font-size: 20px;
  font-weight: 600;
  color: var(--dark-purple);
}

.contact_page_section .contact_inner .contact_info .contact_info_list li .text p , 
.contact_page_section .contact_inner .contact_info .contact_info_list li .text a {margin: 0;}

.contact_page_section .contact_inner .contact_info .contact_info_list li .text a:hover {
  color: var(--dark-purple);
}

.map_section {
  margin: 50px 0;
}

`
