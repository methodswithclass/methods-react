import React, { Component } from 'react';


import Navbtn from "../navbtn/Navbtn";

import * as u from "../../services/utility.service";
import * as state from "../../services/state.service";

import '../../../assets/css/classes.css';


var getState = function () {

	return state.getName();
}

var getBack = function () {

	return state.getBack();
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

class Navbar extends Component {


	render() {

	var font;

	if (u.checkMobile()) {

		font = "font-40";
	}
	else {
		font = "font-20";
	}


	return (




		<div className="relative width height-70 white-back" id="navbar">

			<div className={"absolute width80 height60 center " + font}>
				{getBackButton()}

				<div className="absolute width-100 height font-40 margin-h-20 pointer right0">
					<div className="absolute center">
						<i class="fas fa-cogs"></i>
					</div>
				</div>
			</div>

		</div>


	);
	}
}

export default Navbar;
