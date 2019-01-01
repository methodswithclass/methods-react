





import React from 'react';

import Navbtn from "../components/navbtn/Navbtn";
import Iconbtn from "../components/navbtn/Iconbtn";
import Block from "../components/block/Block";
import Footer from "../components/footer/Footer";
import Parallax from "../components/parallax/Parallax";

import '../states/home/Home.css';


import '../../assets/css/classes.css';



import * as u from "../services/utility.service";
import * as state from "../services/state.service";
import * as api from "../services/api.ws.service";
import * as data from "../services/data.service";



var getElem = function () {


	console.log("state name", state.getName());
	console.log("check mobile home", u.checkMobile());

	var title;

	if (u.checkMobile()) {

		title = u.makeTitle("methods with\nclass, llc", "\n");

		// <div className="relative width height-600 black-back" parallax name="top" scroll="body" top="true" inner="innerhome" adjustinner="false">

		// name="top" scroll="body" top="true" inner="innerhome" adjustinner="false"


		// <div className="relative width height-50 white">
								// 	<div className="relative width-200 height margin-v-20">
								// 		<Navbtn name="about" state="about"></Navbtn>
								// 	</div>

								// 	<div className="relative width-200 height margin-v-20">
								// 		<Navbtn name="what" state="what"></Navbtn>
								// 	</div>

								// 	<div className="relative width-200 height margin-v-20">
								// 		<Navbtn name="contact" state="contact"></Navbtn>
								// 	</div>

								// 	<div className="relative width-200 height margin-v-20">
								// 		<Navbtn name="chris" state="chris"></Navbtn>
								// 	</div>
								// </div>
	}	
	else {

		title = u.makeTitle("methods with\nclass, llc", "\n");
	}




	return (
	    	<div className="absolute width height scrollY cutoffX scroll-vertical-dark-narrow">
					

	    		<div className="relative width height-600 black-back">
					<div className="absolute width height">
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
			        	
			        <div className="relative width height-1000 green7-back">

			        	<div className="relative width60 height-400 center">
			        		<div className="absolute width50 height">

			        			<Iconbtn name="Contact us" state="contact" icon="fa-user-check"></Iconbtn>
			        		</div>


				        	<div className="absolute width50 height right0">

				        		<Iconbtn name="About us" state="about" icon="fa-laptop"></Iconbtn>
				        	</div>

				        </div>

			        </div>

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