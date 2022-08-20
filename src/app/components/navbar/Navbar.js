import React from 'react';
import Navbtn from '../navbtn/Navbtn';
import * as u from '../../services/utility.service';
import * as h from '../../services/history.service';
import * as state from '../../services/state.service';
import icon from '../../../assets/img/methods_icon.png';

var getState = function () {
  return h.getName();
};

var getBack = function () {
  // return h.getPrevious(h.getName());
  return state.getBack();
};

var goHome = function () {
  state.goto('home');
};

var getBackButton = function () {
  if (getState() !== 'home') {
    return (
      <div className="absolute width-200 height80 vcenter left-200 margin-h-20 pointer">
        <Navbtn
          class="black-back white border raised"
          name="back"
          state={getBack()}
        ></Navbtn>
      </div>
    );
  }
};

var getIcon = function () {
  return (
    <div
      className="absolute width-100 height vcenter margin-h-20 right0 pointer"
      onClick={goHome}
    >
      <img className="absolute height width-auto center" src={icon} />
    </div>
  );
};

const Navbar = () => {
  var font;
  var height;

  if (u.checkMobile()) {
    font = 'font-50';
    height = 'height-200';
  } else {
    font = 'font-20';
    height = 'height-70';
  }

  return (
    <div className={'relative width white-back ' + height} id="navbar">
      <div className={'absolute width90 height60 center ' + font}>
        {getBackButton()}

        {getIcon()}
      </div>
    </div>
  );
};

export default Navbar;
