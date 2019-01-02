





import React from 'react';

import Navbtn from "../components/navbtn/Navbtn";
import Navbar from "../components/navbar/Navbar";
import Block from "../components/block/Block";
import Footer from "../components/footer/Footer";
import Parallax from "../components/parallax/Parallax";

import '../states/hire/Hire.css';


import '../../assets/css/classes.css';



import * as u from "../services/utility.service";
import * as state from "../services/state.service";
import * as api from "../services/api.ws.service";
import * as data from "../services/data.service";



var getBlocks = function () {


	var blocks = data.all.blocks.map(function (info) {

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
	console.log("check mobile", u.checkMobile());

	if (u.checkMobile()) {

		// <div className="relative width height-600 black-back" parallax name="top" scroll="body" top="true" inner="innerhome" adjustinner="false">

		// name="top" scroll="body" top="true" inner="innerhome" adjustinner="false"


		// <div className="absolute width-300 height-50">
		// 							<Navbtn class="white-back black font-30 border raised-white" name="back" state="what"></Navbtn>
		// 						</div>
	}
	else {



	}




	return (
	    	<div className="absolute width height scrollY cutoffX scroll-vertical-dark-narrow">

				<Navbar></Navbar>

	    		<div className="relative width height-400 black-back">
					<div className="absolute width height">
						<div className="absolute width height" id="innerhome">
							<div className="absolute width80 height40 border center">

								<div className="absolute top0 right0 width white text-right font-70">
									{u.getTitle2()}
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


export var Hire = function () {

	return getElem();
}
