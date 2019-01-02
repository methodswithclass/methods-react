





import React from 'react';

import Navbtn from "../components/navbtn/Navbtn";
import Navbar from "../components/navbar/Navbar";
import Iconbtn from "../components/navbtn/Iconbtn";
import Footer from "../components/footer/Footer";
import Parallax from "../components/parallax/Parallax";

import '../states/about/About.css';


import '../../assets/css/classes.css';



import * as u from "../services/utility.service";
import * as state from "../services/state.service";
import * as api from "../services/api.ws.service";


var getElem = function () {


	console.log("state name", state.getName());
	console.log("check mobile", u.checkMobile());


	if (u.checkMobile()) {


		// <div className="absolute width-300 height-50">
		// 							<Navbtn class="white-back black font-30 border raised-white" name="back" state="home"></Navbtn>
		// 						</div>

	}
	else {


	}


	return (
	    	<div className="absolute width height scrollY cutoffX scroll-vertical-dark-narrow">


				<Navbar></Navbar>

	    		<div className="relative width height-400 black-back">
					<div name="top" scroll="body" top="true" inner="innerhome" adjustinner="false">
						<div className="absolute width height" id="innerhome">
							<div className="absolute width80 height40 center">

								<div className="absolute top0 right0 width white text-right font-70">
									{u.getTitle2()}
								</div>




							</div>
						</div>
					</div>

				</div>



			    <div className="relative width height-1000 blue-back">

			    	<div className="absolute width60 height-400 center">
			    		<div className="absolute width50 height center">
				    		<Iconbtn name="What we do" state="what" icon="fa-laptop"></Iconbtn>
				    	</div>
				    </div>
			    </div>


			     <div className="relative width">

			    	<Footer></Footer>

			    </div>

			</div>

	    );
}


export var About = function () {

	return getElem();
}
