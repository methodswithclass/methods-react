import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Block from '../components/block/Block';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import * as data from '../services/data.service';
import * as u from '../services/utility.service';

const hidebutton = () => {
  u.hideMenuButton('appsbody');
};

var getBlocks = function (type) {
  return data.all[type].map((info) => {
    return (
      <div key={info.id} className="relative width">
        <Block key={info.id} scroll="body" info={info}></Block>
      </div>
    );
  });
};

const Blocks = (props) => {
  const { type } = props;
  return (
    <div
      className="relative width height cutoffX scrollY scroll-vertical-dark-wide"
      onScroll={hidebutton}
      id="appsbody"
    >
      <Navbar />

      <Header />

      <div className="relative width">{getBlocks(type)}</div>

      <Footer />
    </div>
  );
};

export default Blocks;
