





import React from 'react';

import Navbtn from "../components/navbtn/Navbtn";
import Block from "../components/block/Block";
import Footer from "../components/footer/Footer";
import Parallax from "../components/parallax/Parallax";

import '../components/home/Home.css';


import '../../assets/css/classes.css';



import * as u from "../services/utility.service";
import * as state from "../services/state.service";
import * as api from "../services/api.ws.service";
import * as data from "../services/data.service";

var makeTitle = function ($title) {

    return (
    <div>
        {$title.split("\n").map((i,key) => {
            return <div key={key}>{i}</div>;
        })}
    </div>);
}


var getBlocks = function () {


	var blocks = data.blocks.map(function (info) {

		return (
	        <div key={info.id} className="relative width">
	    		<Block key={info.id} scroll="body" info={info}></Block>
			</div>
		)
	});


	return (

		<div className="relative width">
			{blocks}
		</div>
	)
}


var getElem = function () {


	console.log("state name", state.getName());
	console.log("check mobile home", u.checkMobile());

	var title;

	if (u.checkMobile()) {

		title = makeTitle("methods with\nclass, llc");

		// <div className="relative width height-600 black-back" parallax name="top" scroll="body" top="true" inner="innerhome" adjustinner="false">
	}	
	else {

		title = makeTitle("methods with\nclass, llc");
	}




	return (
	    	<div className="absolute width height scrollY cutoffX scroll-vertical-dark-narrow">
					

	    		<div className="relative width height-600 black-back">
					<div name="top" scroll="body" top="true" inner="innerhome" adjustinner="false">
						<div className="absolute width height" id="innerhome">
							<div className="absolute width80 height40 center">

								<div className="absolute top0 right0 width white text-right font-70">
									{title}
								</div>

								
								<div className="absolute width white bottom0 text-right"> 
									we make your ideas and your home come to life with class 
								</div>
								
							</div>
						</div>
					</div>

				</div>



			    <div className="relative width"> 
			        {getBlocks()}
			    </div>



			    <div className="relative width">

			    	<Footer></Footer>

			    </div>

			</div>

	    );
}


export var Home = function () {

	return getElem();
}