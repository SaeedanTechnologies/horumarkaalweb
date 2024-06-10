import styled from "styled-components";
export const Main=styled.div`


footer {
  position: relative;
}

footer .top_footer {
  background-color: #583BD3;
  padding: 180px 0 60px 0;
  position: relative;
  overflow: hidden;
}

footer .top_footer .container{
  position: relative;
}


/* footer logo */
footer .top_footer .logo {
  margin-bottom: 40px;
}

footer .top_footer .logo img {
  width: 150px;
}

footer .top_footer .abt_side li {
  padding: 0 0 10px 0;
}

/* footer social media icon */
footer .top_footer .social_media {
  display: flex;
  margin-top: 20px;
}

/* footer link list */
footer .top_footer .social_media li a {
  display: block;
  width: 37px;
  height: 37px;
  text-align: center;
  line-height: 37px;
  font-size: 15px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  margin-right: 10px;
  transition: .4s all;
}

footer .top_footer .social_media li a:hover {
  background-color: var(--bg-white);
  color: var(--purple);
}

footer .top_footer .try_out {
  margin-left: -20px;
}

footer .app_btn li a {
  display: block;
  padding: 12px 10px;
  background-color: var(--bg-white);
  border: 2px solid var(--purple);
  position: relative;
  border-radius: 12px;
  transition: .4s all;
  width: 175px;
  text-align: center;
}

footer .app_btn li a:hover {
  -webkit-box-shadow: 1px 4px 8px -2px rgba(0,0,0,0.5);
  -moz-box-shadow: 1px 4px 8px -2px rgba(0,0,0,0.5);
  box-shadow: 1px 4px 8px -2px rgba(0,0,0,0.5);
}

footer .app_btn li:last-child {
  margin-top: 20px;
}

footer .bottom_footer {
  background-color: var(--bg-purple);
}

/* footer heading and text colors variable */
footer h2,
footer h3,
footer p,
footer a {
  color: var(--text-white);
}

footer a:hover {
  color: var(--text-white);
}

/* footer heading h3 */
footer h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 50px;
  padding-top: 10px;
}

footer .links ul li a {
  display: block;
  margin-bottom: 10px;
}

/* footer last */
footer .bottom_footer {
  padding: 20px 0;
}

footer .bottom_footer p {
  margin-bottom: 0;
  font-size: 15px;
}

footer .bottom_footer .developer_text {
  text-align: right;
}

footer .bottom_footer .developer_text a {
  text-decoration: underline;
}

/* footer shape animation */
.top_footer .banner_shape1, .banner_shape2, .banner_shape3 { 
  position: absolute; }

.top_footer .banner_shape1 {
  top: 200px;
  left: -15%;
  animation: mymove 10s infinite;
}

.top_footer .banner_shape2 {
  top: 100px;
  right: -10%;
  animation: mymove 5s infinite;
}

.top_footer .banner_shape3 {
  top: 400px;
  right: -20%;
  animation: mymove 3s infinite;
}


@keyframes mymove {
50% {transform: rotate(180deg);}
}


/* footer go top button */
.go_top {
  position: fixed;
  right: 30px;
  bottom: 75px;
  cursor: pointer;
  transition: .4s all;
  opacity: 0;
}

.go_top:hover {
  bottom: 80px;
}
`