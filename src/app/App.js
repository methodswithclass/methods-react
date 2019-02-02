import React, { Component } from 'react';
import './App.css';
import '../assets/css/classes.css';

import {UIRouter, UIView} from '@uirouter/react';

import ErrorBoundary from "./components/error/ErrorBoundary";
import Footer from "./components/footer/Footer";
import Menu from "./components/navbtn/Menu";


import * as state from "./services/state.service";
import * as u from "./services/utility.service";


var menu = true;


var getMenu = function () {

	if (menu) {

		return (

			<div><Menu></Menu></div>
		)
	}
}


class App extends Component {


  componentWillMount() {



    // u.forceMobile();
    console.log("check mobile app", u.checkMobile());
  }

  render() {
    return (
        <div className="absolute width height" id="body">
			<ErrorBoundary>
				<UIRouter plugins={state.plugins} states={state.states} config={state.configRouter}>

					<div>

						{getMenu()}

						<div className="absolute width height cutoff">
							<UIView/>


		    				<Footer></Footer>
						</div>


					</div>

				</UIRouter>
			</ErrorBoundary>
        </div>

    );
  }
}

export default App;


