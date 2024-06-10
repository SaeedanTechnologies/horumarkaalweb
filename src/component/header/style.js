import styled from "styled-components";
 export const Main=styled.div`




 header {
  position: absolute;
  width: 100%;
  z-index: 99999;
  transition: .4s all;
}

header.fix_style {
  position: fixed;
  top: 0;
  backdrop-filter: blur(5px);
  background-color: rgba(106, 73, 242, 0.9);
  padding: 15px 0;
  transition: none;
  opacity: 0;
  pointer-events: none;
}

header.fixed {
 pointer-events: all;
 opacity: 1;
 transition: .4s all;
}

header.fixed .navbar {
  padding: 0;
}

/* navigation bar */
.navbar {
  padding-left: 0;
  padding-right: 0;
  padding-top: 35px;

}

.navbar-expand-lg .navbar-nav {
  align-items: center;
}

.navbar-expand-lg .navbar-nav .nav-link {
  padding: 5px 20px;
  font-weight: 500;
  color: var(--text-white);
}

.navbar-expand-lg .navbar-nav .nav-link:hover {
  color: var(--text-white);
}

.navbar-expand-lg .navbar-nav .nav-link.dark_btn {
  color: var(--purple);
  background-color: var(--bg-white);
  font-size: 16px;
  padding: 9px 40px;
  border-radius: 25px;
  margin-left: 20px;
  position: relative;
  border: 1px solid var(--bg-purple);
}


.navbar-expand-lg .navbar-nav .nav-link.dark_btn::before,
.navbar-expand-lg .navbar-nav .nav-link.dark_btn::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 42px;
  z-index: -1;
}

.navbar-expand-lg .navbar-nav .nav-link.dark_btn::before {
animation: pulse-blue-medium-sm 3.5s infinite
}

.navbar-expand-lg .navbar-nav .nav-link.dark_btn::after  {
animation: pulse-blue-small-sm 3.5s infinite
}

.navbar-brand img {
  width: 150px;
}

/* navigation bar dropdown */
.navbar-expand-lg .navbar-nav .has_dropdown {
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 10px 10px 0 0;
  transition: .4s all;
}

.navbar-expand-lg .navbar-nav .has_dropdown:hover {
  background-color: var(--bg-white);
  box-shadow: 0px 4px 10px #c5c5c580;
}

.navbar-expand-lg .navbar-nav .has_dropdown .drp_btn {
  position: relative;
  right: 15px;
  color: var(--text-white);
}

.navbar-expand-lg .navbar-nav .has_dropdown .sub_menu {
  position: absolute;
  top: 100%;
  background-color: var(--bg-white);
  border-radius: 0 10px 10px 10px;
  min-width: 210px;
  max-width: 230px;
  margin-top: -10px;
  transition: .4s all;
  opacity: 0;
  pointer-events: none;
  box-shadow: 0px 4px 10px #c5c5c580;
}

.navbar-expand-lg .navbar-nav .has_dropdown .sub_menu ul {
  margin-left: 0;
  padding: 10px 20px;
}

.navbar-expand-lg .navbar-nav .has_dropdown .sub_menu ul li a {
  font-size: 15px;
  position: relative;
  transition: .4s all;
  line-height: 35px;
  font-weight: 500;
}

.navbar-expand-lg .navbar-nav .has_dropdown .sub_menu ul li a::before {
  content: "";
  width: 10px;
  height: 10px;
  display: inline-block;
  border: 2px solid var(--purple);
  border-radius: 10px;
  margin-right: 5px;
  position: absolute;
  left: -10px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  transition: .4s all;
}

.navbar-expand-lg .navbar-nav .has_dropdown .sub_menu ul li a:hover {
  padding-left: 15px;
  color: var(--purple);
}

.navbar-expand-lg .navbar-nav .has_dropdown .sub_menu ul li a:hover::before {
  opacity: 1;
  left: 0;
}

.navbar-expand-lg .navbar-nav .has_dropdown:hover>a,
.navbar-expand-lg .navbar-nav .has_dropdown:hover>.drp_btn {
  color: var(--purple);
}

.navbar-expand-lg .navbar-nav .has_dropdown:hover .sub_menu {
  opacity: 1;
  pointer-events: all;
  margin-top: -1px;
}

/* navigation toggle menu */
.toggle-wrap {
  padding: 10px;
  position: relative;
  cursor: pointer;

  /*disable selection*/
  -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.toggle-bar,
.toggle-bar::before,
.toggle-bar::after,
.toggle-wrap.active .toggle-bar,
.toggle-wrap.active .toggle-bar::before,
.toggle-wrap.active .toggle-bar::after {
    -webkit-transition: all .2s ease-in-out;
    -moz-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
}

.toggle-bar {
    width: 25px;
    margin: 10px 0;
    position: relative;
    border-top: 4px solid var(--bg-white);
    display: block;
}

.toggle-bar::before,
.toggle-bar::after {
    content: "";
    display: block;
    background: var(--bg-white);
    height: 4px;
    width: 30px;
    position: absolute;
    top: -12px;
    right: 0px;
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -ms-transform-origin: 13%;
    -webkit-transform-origin: 13%;
    transform-origin: 13%;
}

.toggle-bar::after {
  top: 4px;
}

.toggle-wrap.active .toggle-bar {
  border-top: 6px solid transparent;
}

.toggle-wrap.active .toggle-bar::before {
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}

.toggle-wrap.active .toggle-bar::after {
    -ms-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
}


/* ----------Other-Page-Css-Start---------- */

/* White Header Css Satart */


.white_header .navbar-expand-lg .navbar-nav .has_dropdown:hover .drp_btn {
  color: var(--purple);
}

.white_header .navbar-expand-lg .navbar-nav .nav-link.dark_btn {
  background-color: var(--bg-white);
  color: var(--purple);
}

.white_header .navbar-expand-lg .navbar-nav .nav-link.dark_btn::before {
/*animation: pulse-white-medium-sm 3.5s infinite*/
}

.white_header .navbar-expand-lg .navbar-nav .nav-link.dark_btn::after  {
/*animation: pulse-white-small-sm 3.5s infinite*/
}

header.fix_style.white_header {
  background-color: #664bece0;
}



 `