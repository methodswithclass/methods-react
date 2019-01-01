





import React from 'react';

import Navbtn from "../components/navbtn/Navbtn";
import Iconbtn from "../components/navbtn/Iconbtn";
import Footer from "../components/footer/Footer";
import Parallax from "../components/parallax/Parallax";

import '../states/contact/Contact.css';


import '../../assets/css/classes.css';



import * as u from "../services/utility.service";
import * as state from "../services/state.service";
import * as api from "../services/api.ws.service";
import * as data from "../services/data.service";



var getElem = function () {


	console.log("state name", state.getName());
	console.log("check mobile", u.checkMobile());

	var title;

	if (u.checkMobile()) {

		title = u.makeTitle("methods with\nclass, llc", "\n");

		// <div className="relative width height-600 black-back" parallax name="top" scroll="body" top="true" inner="innercontact" adjustinner="false">
	}	
	else {

		title = u.makeTitle("methods with\nclass, llc", "\n");
	}




	return (
	    	

			<div className="relative width height scrollY cutoffX scroll-vertical-dark-narrow">

				<div className="relative width height-600 black-back">

					<div className="absolute width80 height60 center">
						
						<div className="absolute width50 white right0 text-right font-70">
							{title}
						</div>

						<div className="absolute width-200 height-50">
							<Navbtn name="back" state="home"></Navbtn>
						</div>

					</div>

				</div>

				

				<div className="relative width height-1000 blue4-back">

				    <div className="absolute width60 height-400 center">
				    	<div className="absolute width50 height center">
				    		<Iconbtn name="Meet Chris" state="chris" icon="fa-user-check"></Iconbtn>
				    	</div>
				    </div>

			    </div>

				<div className="relative width">

			    	<Footer></Footer>

			    </div>

			</div>

	

	    );
}


export var Contact = function () {

	return getElem();
}