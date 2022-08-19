import React, { Component } from 'react';
import { UISref, UISrefActive } from '@uirouter/react';
import * as h from '../../services/history.service';

var setBack = function () {
  return h.setRootBack('settings');
};

class Settingsbtn extends Component {
  render() {
    return (
      <UISrefActive class="active">
        <UISref to="settings">
          <div className="absolute width height font-40" onClick={setBack}>
            <div className="absolute center">
              <i className="fas fa-cogs"></i>
            </div>
          </div>
        </UISref>
      </UISrefActive>
    );
  }
}

export default Settingsbtn;
