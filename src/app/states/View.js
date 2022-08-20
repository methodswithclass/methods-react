import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import * as state from '../services/state.service';
import * as u from '../services/utility.service';

const hidebutton = () => {
  u.hideMenuButton(`${state.getName()}body`);
};

const View = (props) => {
  const { comp, color } = props;
  return (
    <div
      className="relative width height cutoffX scrollY scroll-vertical-dark-wide"
      onScroll={hidebutton}
      id={`${state.getName()}body`}
    >
      <Navbar />

      <Header />

      <div className={`relative width height-1000 ${color}`}>{comp}</div>

      <Footer />
    </div>
  );
};

export default View;
