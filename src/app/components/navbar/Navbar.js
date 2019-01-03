import React, { Component } from 'react';


import Navbtn from "../navbtn/Navbtn";
import Settingsbtn from "../navbtn/Settingsbtn";

import * as u from "../../services/utility.service";
import * as h from "../../services/history.service";

import '../../../assets/css/classes.css';


var settings = false;

var getState = function () {

	return h.getName();
}

var getBack = function () {

	return h.getPreviousName();
}

var getBackButton = function () {


	if (getState() != "home") {

		return (

			<div className="absolute width-300 height80 vcenter margin-h-20">
				<Navbtn class="black-back white border raised" name="back" state={getBack()}></Navbtn>
			</div>
		)
	}
}


var getSettings = function () {

	if (settings) {

		return (

			<div><Settingsbtn></Settingsbtn></div>
		)
	}
}


var getImage = function () {

	return "/public/img/methods_icon.png";
}

class Navbar extends Component {


	render() {

	var font;
	var height;

	if (u.checkMobile()) {

		font = "font-50";
		height = "height-200";
	}
	else {
		font = "font-20";
		height = "height-70";
	}


	return (




		<div className={"relative width white-back " + height} id="navbar">

			<div className={"absolute width90 height60 center " + font}>
				{getBackButton()}

				{getSettings()}

				<div className="absolute width-100 height margin-h-20 right0">
					<img className="absolute height width-auto" src={getImage()} />
				</div>
			</div>

		</div>


	);
	}
}

export default Navbar;
