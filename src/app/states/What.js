import React from 'react';
import Iconbtn from '../components/navbtn/Iconbtn';

const What = () => {
  return (
    <div className="relative width60 height-400 center">
      <div className="absolute width50 height">
        <Iconbtn name="Apps" state="apps" icon="tablet"></Iconbtn>
      </div>

      <div className="absolute width50 height right0">
        <Iconbtn name="Hire" state="hire" icon="tools"></Iconbtn>
      </div>
    </div>
  );
};

export default What;
