import React, { Component } from 'react';

import { UISref, UISrefActive } from '@uirouter/react';

import '../../../assets/css/classes.css';

import Parallax from "../parallax/Parallax";

var info;

var hold = function () {


  // <div className="relative width height-800 cutoff noedge" parallax name="{{info.id}}" scroll="body" src="{{info.back}}" img-id="parallax-img-{{info.index}}" adjustinner="true" ng-click='clicked()'>

  
}

var getId = function (name, $info) {

  return name + $info.id
}


var chooseElem = function ($$info) {

  if ($$info.id == "gravity") {

      return (
              
              <div className="absolute left-100 width-500 height-100 top60 white-back rounded20 border">
                <div className="absolute center font-25">
                  visit on your mobile device to play
                </div>
              </div>

      )
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
  // else if ($$info.id == "end") {

  //     return (

  //             <div className='absolute top10 left10 width-200 height-50' id={getId("contact", $$info)}>
  //               <div className='absolute width height white-back rounded10 pointer'>
  //                 <div><div className='absolute font-40 center'>contact</div></div>
  //               </div>
  //             </div>

  //     )
  // }


}


var clicked = function () {

    console.log("clicked");
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

    return ( 




      <div className="relative width">



          <div className="relative width height-400 white-back cutoff noedge" id={getId('sep', info)}>

              <div className="relative width60 font-30 text-center center" id={getId('desc', info)}>{getHtml(info.description)}</div>

          </div>

          <div className="relative width height-800 cutoff noedge">
              <div name={info.id} scroll="body" src={info.back} img-id={'parallax-img-' + info.index} adjustinner="true" onClick={clicked}>

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