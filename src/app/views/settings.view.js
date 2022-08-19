import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import * as u from '../services/utility.service';
import * as state from '../services/state.service';

var hidebutton = function () {
  u.hideMenuButton('settingsbody');
};

var getElem = function () {
  console.log('state name', state.getName());
  console.log('check mobile home', u.checkMobile());

  if (u.checkMobile()) {
    // <div className="relative width height-600 black-back" parallax name="top" scroll="body" top="true" inner="innerhome" adjustinner="false">
    // name="top" scroll="body" top="true" inner="innerhome" adjustinner="false"
    // <div className="relative width height-50 white">
    // 	<div className="relative width-200 height margin-v-20">
    // 		<Navbtn name="about" state="about"></Navbtn>
    // 	</div>
    // 	<div className="relative width-200 height margin-v-20">
    // 		<Navbtn name="what" state="what"></Navbtn>
    // 	</div>
    // 	<div className="relative width-200 height margin-v-20">
    // 		<Navbtn name="contact" state="contact"></Navbtn>
    // 	</div>
    // 	<div className="relative width-200 height margin-v-20">
    // 		<Navbtn name="chris" state="chris"></Navbtn>
    // 	</div>
    // </div>
    // <div className="absolute width60 height-400 center">
    // 	    	<div className="absolute width50 height center">
    // 	    		<Iconbtn name="Login" state="login" icon="fa-sign-in-alt"></Iconbtn>
    // 	    	</div>
    // 	    </div>
  } else {
  }

  return (
    <div
      className="relative width height cutoffX scrollY scroll-vertical-dark-wide"
      onScroll={hidebutton}
      id="settingsbody"
    >
      <Navbar></Navbar>

      <Header></Header>

      <div className="relative width height-1000 green4-back"></div>

      <Footer></Footer>
    </div>
  );
};

export var Settings = function () {
  return getElem();
};
