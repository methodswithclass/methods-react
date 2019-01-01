





import React from 'react';

import Navbtn from "../components/navbtn/Navbtn";
import Footer from "../components/footer/Footer";
import Resume from "../components/resume/Resume";

import '../states/people/chris/Chris.css';


import '../../assets/css/classes.css';



import * as u from "../services/utility.service";
import * as state from "../services/state.service";
import * as api from "../services/api.ws.service";
import * as data from "../services/data.service";




var email = function () {

	console.log("clicked email");

	window.location.href = 'mailto:chris@methodswithclass.com';
}


var resume = function () {

	console.log("clicked resume");

	window.location.href = '/public/img/cpolito_201809.docx';
}

var getElem = function () {


	console.log("state name", state.getName());
	console.log("check mobile", u.checkMobile());

	var title;
	var emailme;

	if (u.checkMobile()) {

		title = u.makeTitle("methods with\nclass, llc", "\n");
		emailme = u.makeTitle("email me\nchris@methodswithclass.com", "\n")
		// <div className="relative width height-600 black-back" parallax name="top" scroll="body" top="true" inner="innerhome" adjustinner="false">
	}	
	else {

		title = u.makeTitle("methods with\nclass, llc", "\n");
		emailme = u.makeTitle("email me\nchris@methodswithclass.com", "\n")
	}




	return (
	    	

			<div className="relative width height scrollY cutoffX scroll-vertical-dark-narrow">

				<div className="relative width height-600 black-back">

					<div className="absolute width80 height60 center">
						
						<div className="absolute width50 white right0 text-right font-70">
							{title}
						</div>

						<div className="absolute width-200 height-50">
							<Navbtn name="back" state="contact"></Navbtn>
						</div>

					</div>

				</div>

				<div className="relative width teal-back">

					<div className="relative width80 hcenter">

						<div className="relative inline width50">

							<div className="relative width">
								<Resume contact={data.all.contact}/>
							</div>

						</div>

						<div className="relative inline width40 margin-v-100 cell-top">

							<div className="relative width-300 hcenter cutoff">

								<div className="relative width pointer margin-v-20" onClick={email}>

									<div className="relative width height-100 hcenter rounded-top-10 black-back white">
										<div className="absolute center text-center">{emailme}</div>
									</div>

									<div><img className="relative width height-auto hcenter" src="/public/img/bio-photo3.jpg"/></div>

								</div>

								<div className="relative width height-200">

									<div className="relative width-200 height-200 center">
										<a className="relative nolink" href="https://www.linkedin.com/pub/christopher-polito/28/6b6/460" target="_blank">
											<img className="width height-auto" src="/public/img/linkedin.png"/>
										</a>
									</div>

								</div>

								<div className="relative width80 height-50 raised hcenter margin-v-50 black-back white pointer rounded10" onClick={resume}>
									<div className="absolute center">
										resume.doc
									</div>
								</div>



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


export var Chris = function () {

	return getElem();
}