import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Iconbtn from '../components/navbtn/Iconbtn';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import * as u from '../services/utility.service';
import * as state from '../services/state.service';

var hidebutton = function () {
  u.hideMenuButton('aboutbody');
};

var getElem = function () {
  console.log('state name', state.getName());
  console.log('check mobile', u.checkMobile());

  if (u.checkMobile()) {
    // <div className="absolute width-300 height-50">
    // 							<Navbtn class="white-back black font-30 border raised-white" name="back" state="home"></Navbtn>
    // 						</div>
  } else {
  }

  return (
    <div
      className="relative width height cutoffX scrollY scroll-vertical-dark-wide"
      onScroll={hidebutton}
      id="aboutbody"
    >
      <Navbar></Navbar>

      <Header></Header>

      <div className="relative width height-1000 blue-back">
        <div className="absolute width60 height-400 center">
          <div className="absolute width50 height center">
            <Iconbtn name="What we do" state="what" icon="laptop"></Iconbtn>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export var About = function () {
  return getElem();
};
