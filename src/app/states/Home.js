import React from 'react';
import Iconbtn from '../components/navbtn/Iconbtn';

const Home = () => {
  return (
    <div className="relative width60 height-400 center">
      <div className="absolute width50 height">
        <Iconbtn name="Contact us" state="contact" icon="user-check" />
      </div>

      <div className="absolute width50 height right0">
        <Iconbtn name="About us" state="about" icon="laptop" />
      </div>
    </div>
  );
};

export default Home;
