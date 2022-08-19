import React, { Component } from 'react';
import * as u from '../../services/utility.service';
import * as state from '../../services/state.service';

var getHeader = function (font) {
  if (state.getName() == 'home') {
    return (
      <div className="relative width height-600 black-back">
        <div className="absolute width height">
          <div className="absolute width height" id="innerhome">
            <div className="absolute width80 height40 center">
              <div className="absolute top0 right0 width white text-right font-70">
                {u.getTitle1()}
              </div>

              <div
                className={'absolute width white bottom0 text-right ' + font}
              >
                we make your ideas and your home come to life with class
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="relative width height-200 black-back">
        <div className="absolute width height">
          <div className="absolute width height" id="innerhome">
            <div className="absolute width80 height40 center">
              <div className="absolute top0 right0 width white text-right font-70">
                {u.getTitle2()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

class Header extends Component {
  render() {
    var font;

    if (u.checkMobile()) {
      font = 'font-30';
    } else {
      font = 'font-15';
    }

    return <div className="relative width">{getHeader(font)}</div>;
  }
}

export default Header;
