





import React from 'react';

import Navbtn from "../components/navbtn/Navbtn";
import Navbar from "../components/navbar/Navbar";
import Iconbtn from "../components/navbtn/Iconbtn";
import Block from "../components/block/Block";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Parallax from "../components/parallax/Parallax";

// import '../states/home/settings.css';


import '../../assets/css/classes.css';



import * as u from "../services/utility.service";
import * as state from "../services/state.service";
import * as api from "../services/api.ws.service";
import * as data from "../services/data.service";


var hidebutton = function () {

	u.hideMenuButton("loginbody");
}


var getElem = function () {


	console.log("state name", state.getName());
	console.log("check mobile home", u.checkMobile());



	if (u.checkMobile()) {



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


	}




	return (


	    <div className="relative width height cutoffX scrollY scroll-vertical-dark-narrow" onScroll={hidebutton} id="loginbody">

		    <Navbar></Navbar>

			<Header></Header>

		    <div className="relative width">

		        <div className="relative width height-1000 blue3-back">

		        	<div className="absolute center font-50">

		        		Login Page

			        </div>

		        </div>

		    </div>


		</div>

	);
}


export var Login = function () {

	return getElem();
}
