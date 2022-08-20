import React from 'react';
import { FaUserCheck, FaLaptop, FaTablet, FaTools } from 'react-icons/fa';
import * as h from '../../services/history.service';
import * as state from '../../services/state.service';

var getIcon = function (icon) {
  switch (icon) {
    case 'user-check':
      return <FaUserCheck />;
    case 'laptop':
      return <FaLaptop />;
    case 'tablet':
      return <FaTablet />;
    case 'tools':
      return <FaTools />;
    default:
      return null;
  }
};

var clicked = (goToState) => () => {
  h.toggle(false);
  // state.goto(goToState);
};

const Iconbtn = (props) => {
  const { state: goToState, name, icon } = props;
  return (
    <a href={state.getUrl(goToState)}>
      <div
        className="absolute width80 height80 center raised rounded20 black-back pointer"
        onClick={clicked(goToState)}
      >
        <div className="absolute width height80 vcenter white">
          <div className="relative width height50">
            <div className="relative center text-center font-50">
              {getIcon(icon)}
            </div>
          </div>

          <div className="relative width height50">
            <div className="relative center text-center font-30">{name}</div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Iconbtn;
