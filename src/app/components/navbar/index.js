import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { checkMobile, getTitle2 } from '../../services/utility.service';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = checkMobile();

  const isContact = location.pathname.includes('contact');

  const font = 'font-20';
  const height = isMobile ? 'height-100' : 'height-70';
  const thumb = isMobile ? 'width-70 height-70' : 'width-40 height-40';
  const titlePos = isMobile ? 'left30' : 'left5';

  const goHome = () => {
    navigate('/home');
  };

  const goContact = () => {
    navigate('/contact');
  };

  return (
    <div
      className={`relative width white-back navRaised navBorder ${height}`}
      id="navbar"
    >
      <div className={`absolute width90 height center ${font}`}>
        <div
          className={`absolute width30 height margin-h-20 vcenter ${titlePos}`}
        >
          <div className={`absolute width center`}>{getTitle2()}</div>
        </div>

        <div
          className={`absolute ${thumb} circle border vcenter margin-h-20 left0 pointer`}
          onClick={goHome}
        >
          <img
            className="absolute height width-auto center"
            src={`/assets/img/methods_icon.png`}
            alt="methods with class icon"
          />
        </div>

        {!isContact && (
          <div
            className={`absolute ${thumb} border circle raised vcenter cutoff right0 pointer`}
            onClick={goContact}
          >
            <img
              className={`absolute width height-auto center`}
              src={`/assets/img/bio-photo3.jpg`}
              alt="bio"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
