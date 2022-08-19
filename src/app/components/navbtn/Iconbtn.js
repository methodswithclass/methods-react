import React, { Component } from 'react';
import { FaUserCheck, FaLaptop, FaTablet, FaTools } from 'react-icons/fa';
import { UISref, UISrefActive } from '@uirouter/react';
import * as h from '../../services/history.service';

var getIcon = function ($this) {
  switch ($this.props.icon) {
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

var clicked = function () {
  h.toggle(false);
};

class Iconbtn extends Component {
  render() {
    return (
      <UISrefActive class="active">
        <UISref to={this.props.state}>
          <div
            className="absolute width80 height80 center raised rounded20 black-back pointer"
            onClick={clicked}
          >
            <div className="absolute width height80 vcenter white">
              <div className="relative width height50">
                <div className="relative center text-center font-50">
                  {getIcon(this)}
                </div>
              </div>

              <div className="relative width height50">
                <div className="relative center text-center font-30">
                  {this.props.name}
                </div>
              </div>
            </div>
          </div>
        </UISref>
      </UISrefActive>
    );
  }
}

export default Iconbtn;
