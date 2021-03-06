





import React from 'react';

import Navbtn from "../components/navbtn/Navbtn";
import Navbar from "../components/navbar/Navbar";
import Iconbtn from "../components/navbtn/Iconbtn";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Parallax from "../components/parallax/Parallax";

import '../states/contact/Contact.css';


import '../../assets/css/classes.css';



import * as u from "../services/utility.service";
import * as state from "../services/state.service";
import * as api from "../services/api.ws.service";
import * as data from "../services/data.service";


var hidebutton = function () {

	u.hideMenuButton("contactbody");
}


var getElem = function () {


	console.log("state name", state.getName());
	console.log("check mobile", u.checkMobile());

	if (u.checkMobile()) {

		// <div className="relative width height-600 black-back" parallax name="top" scroll="body" top="true" inner="innercontact" adjustinner="false">

		// <div className="absolute width-300 height-50">
						// 	<Navbtn class="white-back black font-30 border raised-white" name="back" state="home"></Navbtn>
						// </div>
	}
	else {


	}




	return (


	    <div className="relative width height cutoffX scrollY scroll-vertical-dark-wide" onScroll={hidebutton} id="contactbody">

		    <Navbar></Navbar>

			<Header></Header>

			<div className="relative width height-1000 blue4-back">

			    <div className="absolute width60 height-400 center">
			    	<div className="absolute width50 height center">
			    		<Iconbtn name="Meet Chris" state="chris" icon="fa-user-check"></Iconbtn>
			    	</div>
			    </div>

		    </div>



		    <Footer></Footer>

		</div>

	);
}


export var Contact = function () {

	return getElem();
}
