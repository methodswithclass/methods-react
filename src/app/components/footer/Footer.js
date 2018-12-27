import React, { Component } from 'react';

import * as u from "../../services/utility.service";

import '../../../assets/css/classes.css';


class Footer extends Component {


  render() {

    var font;

    if (u.checkMobile()) {

        font = "font-30";
    }
    else {
        font = "font-20";
    }


    return ( 




      <div className="relative width height-200 black-back border-top-white" id="footer">
  
        <div className="absolute width80 height-30 hcenter top60 text-right white {font}">&copy;2018 methods with class</div>

      </div>

      
    );
  }
}

export default Footer;