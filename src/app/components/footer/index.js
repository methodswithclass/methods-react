import React from 'react';
import { checkMobile } from '../../services/utility.service';

const Footer = () => {
  const getCopyright = () => {
    return new Date().getFullYear();
  };

  const isMobile = checkMobile();

  return (
    <div
      className={`relative width ${
        isMobile ? 'height-200' : 'height-400'
      } black-back border-top-white`}
      id="footer"
    >
      <div
        className={`absolute width80 height-30 hcenter bottom-100 text-right white font-20`}
      >
        &copy;{getCopyright()} methods with class
      </div>
    </div>
  );
};

export default Footer;
