import styled from "styled-components";
export const Main = styled.div`
  
  #preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 999999;
}

#loader {
  display: block;
  position: relative;
  left: 50%;
  top: 50%;
  width: 150px;
  height: 150px;
  margin: -75px 0 0 -75px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: var(--bg-purple);
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

#loader:before {
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: var(--body-text-purple);
  -webkit-animation: spin 3s linear infinite;
  animation: spin 3s linear infinite;
}

#loader:after {
  content: "";
  position: absolute;
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: var(--dark-purple);
  -webkit-animation: spin 1.5s linear infinite;
  animation: spin 1.5s linear infinite;
}

@-webkit-keyframes spin {
  0%   {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
  }
  100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
  }
}

@keyframes spin {
  0%   {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
  }
  100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
  }
}

`;