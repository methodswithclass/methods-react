import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Block from '../components/block/Block';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import * as u from '../services/utility.service';
import * as state from '../services/state.service';
import * as data from '../services/data.service';

var hidebutton = function () {
  u.hideMenuButton('appsbody');
};

var getBlocks = function () {
  var blocks = data.all.apps.map(function (info) {
    return (
      <div key={info.id} className="relative width">
        <Block key={info.id} scroll="body" info={info}></Block>
      </div>
    );
  });

  return <div className="relative width">{blocks}</div>;
};

var getElem = function () {
  console.log('state name', state.getName());
  console.log('check mobile', u.checkMobile());

  if (u.checkMobile()) {
    // <div className="relative width height-600 black-back" parallax name="top" scroll="body" top="true" inner="innerhome" adjustinner="false">
    // <div className="absolute width-300 height-50">
    // 							<Navbtn class="white-back black font-30 border raised-white" name="back" state="what"></Navbtn>
    // 						</div>
  } else {
  }

  return (
    <div
      className="relative width height cutoffX scrollY scroll-vertical-dark-wide"
      onScroll={hidebutton}
      id="appsbody"
    >
      <Navbar></Navbar>

      <Header></Header>

      <div className="relative width">{getBlocks()}</div>

      <Footer></Footer>
    </div>
  );
};

export var Apps = function () {
  return getElem();
};
