import React from 'react';
import Iconbtn from '../components/navbtn/Iconbtn';

const About = () => {
  return (
    <div className="absolute width60 height-400 center">
      <div className="absolute width50 height center">
        <Iconbtn name="What we do" state="what" icon="laptop" />
      </div>
    </div>
  );
};

export default About;
