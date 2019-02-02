





import React from 'react';

import Navbtn from "../components/navbtn/Navbtn";
import Navbar from "../components/navbar/Navbar";
import Iconbtn from "../components/navbtn/Iconbtn";
import Block from "../components/block/Block";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Parallax from "../components/parallax/Parallax";

import '../states/what/What.css';


import '../../assets/css/classes.css';



import * as u from "../services/utility.service";
import * as state from "../services/state.service";
import * as api from "../services/api.ws.service";
import * as data from "../services/data.service";

var hidebutton = function () {

	u.hideMenuButton("whatbody");
}


var getElem = function () {


	console.log("state name", state.getName());
	console.log("check mobile", u.checkMobile());



	if (u.checkMobile()) {



		// <div className="relative width height-600 black-back" parallax name="top" scroll="body" top="true" inner="innerhome" adjustinner="false">

		// <div className="absolute width-300 height-50">
		// 							<Navbtn class="white-back black font-30 border raised-white" name="back" state="about"></Navbtn>
		// 						</div>
	}
	else {


	}




	return (



	    <div className="relative width height cutoffX scrollY scroll-vertical-dark-wide" onScroll={hidebutton} id="whatbody">

		    <Navbar></Navbar>

			<Header></Header>

		    <div className="relative width">

		        <div className="relative width height-1000 green-back">

		        	<div className="relative width60 height-400 center">
		        		<div className="absolute width50 height">

		        			<Iconbtn name="Apps" state="apps" icon="fa-tablet"></Iconbtn>
		        		</div>


			        	<div className="absolute width50 height right0">

			        		<Iconbtn name="Hire" state="hire" icon="fa-tools"></Iconbtn>
			        	</div>

			        </div>

		        </div>

		    </div>




		    <Footer></Footer>


		</div>

	);
}


export var What = function () {

	return getElem();
}
