import React, { Component } from 'react';

import { UISref, UISrefActive } from '@uirouter/react';

import '../../../assets/css/classes.css';

import Parallax from "../parallax/Parallax";


import * as u from "../../services/utility.service";

var info;

var hold = function () {


  // <div className="relative width height-800 cutoff noedge" parallax name="{{info.id}}" scroll="body" src="{{info.back}}" img-id="parallax-img-{{info.index}}" adjustinner="true" ng-click='clicked()'>

  
}

var getId = function (name, $info) {

  return name + $info.id
}


var chooseElem = function ($$info) {

  if ($$info.id == "gravity") {

      if (u.checkMobile()) {

          return (
                  
                  <div className="absolute left-100 width-500 height-100 top60 black-back white rounded20 border-white pointer">
                    <div className="absolute center font-25">
                      click here to play gravity
                    </div>
                  </div>

          )
      }
      else {
          return (
                  
                  <div className="absolute left-100 width-500 height-100 top60 white-back rounded20 border">
                    <div className="absolute center font-25">
                      visit on your mobile device to play
                    </div>
                  </div>

          )

      }
  }
  else if ($$info.id == "evolve") {

      return (

              <div className="absolute left-100 width-500 height-100 top60 black-back white rounded20 border-white pointer">
                <div className="absolute center font-25">
                  click here to evolve
                </div>
              </div>
      )

  }
  else if ($$info.id == "code") {

      return (

              <div className="absolute left-100 width-500 height-100 top60 black-back white rounded20 border-white pointer">
                <div className="absolute center font-25">
                  click here for code
                </div>
              </div>

      )

  }


}


var clicked = function (info) {


    return function () {

      console.log("clicked", info.id);

      if (info.id == "evolve") {

          window.open("https://evolve.methodswithclass.com", "_blank");
      }
      else if (u.checkMobile() && info.id == "gravity") {

          window.open("https://gravity.methodswithclass.com", "_blank");
      }
    }
    
}



var getHtml = function (html) {

  return (
    <div>
        {html.split("<br>").map((i,key) => {
            return <div key={key}>{i}</div>;
        })}
    </div>);
}


class Block extends Component {


  render() {


    info = this.props.info;
    
    console.log("info", info);

    // name={info.id} scroll="body" src={info.back} img-id={'parallax-img-' + info.index} adjustinner="true"

    return ( 




      <div className="relative width">



          <div className="relative width height-400 white-back cutoff noedge" id={getId('sep', info)}>

              <div className="relative width60 font-30 text-center center" id={getId('desc', info)}>{getHtml(info.description)}</div>

          </div>

          <div className="relative width height-800 cutoff noedge">
              <div onClick={clicked(info)}>

                <div className="absolute width120 height hcenter">
                  <img className="absolute width height-auto vcenter" src={info.back} />
                </div>


                  {chooseElem(info)};


              </div>
          </div>



      </div>

      
    );
  }
}

export default Block;