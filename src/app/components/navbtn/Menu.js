import React, { Component } from 'react';
import { FaBars } from 'react-icons/fa';
import * as u from '../../services/utility.service';
import * as state from '../../services/state.service';

var $names = [
  {
    name: 'home',
    resolve: true,
  },
  {
    name: 'login',
    resolve: false,
  },
  {
    name: 'settings',
    resolve: false,
  },
];

var resolveName = function (name) {
  for (var i in $names) {
    if (name.toLowerCase() == $names[i].name) {
      return $names[i].resolve;
    }
  }

  return false;
};

var openMenu = function () {
  return u.toggleMenu('body');
};

var goto = function ($state) {
  return function () {
    console.log('goto function', $state);

    state.goto($state);
  };
};

var getItem = function (name) {
  if (resolveName(name)) {
    return (
      <div
        className="relative width-300 height-50 hcenter black-back white rounded10 margin-v-100 pointer"
        onClick={goto(name.toLowerCase())}
      >
        <div className="absolute center font-30">{name}</div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

class Menubtn extends Component {
  render() {
    return (
      <div className="absolute width height">
        <div
          className="absolute width-100 height-70 left10 z-200"
          id="menubutton"
        >
          <div
            className="absolute width-100 height80 center font-40 pointer"
            onClick={openMenu}
          >
            <div className="absolute center">
              <FaBars />
            </div>
          </div>
        </div>

        <div
          className="fixed width-600 height top0 left0 z-minus-100"
          id="menu"
        >
          <div className="absolute width height-70 black-back opacity70 white">
            <div className="absolute center font-40">Menu</div>
          </div>

          <div className="absolute width80 height80 center">
            {getItem('Home')}

            {getItem('Login')}

            {getItem('Settings')}
          </div>
        </div>
      </div>
    );
  }
}

export default Menubtn;
