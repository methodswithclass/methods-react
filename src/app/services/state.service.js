


import { pushStateLocationPlugin } from "@uirouter/react";

import Home from "../states/home/Home";
import About from "../states/about/About";
import Contact from "../states/contact/Contact";
import What from "../states/what/What";
import Apps from "../states/apps/Apps";
import Hire from "../states/hire/Hire";
import Chris from "../states/people/chris/Chris";

var statename;


function setStateName ($name) {

	statename = $name;
}


export var states = [
{
  name: 'home',
  url: '/:id',
  component: Home,
  params:{
  	id:"home",
  	squash:"string"
  },
  resolve:[{
    token: 'home',
    deps: ['$transition$'],
    resolveFn: (trans) => {
      setStateName("home");
    }
  }]
},
{
  name: 'about',
  url: '/about',
  component: About
},
{
  name: 'what',
  url: '/about/whatwedo',
  component: What
},
{
  name: 'what.apps',
  url: '/apps',
  component: Apps
},
{
  name: 'what.hire',
  url: '/hire',
  component: Hire
},
{
  name: 'contact',
  url: '/about/contact',
  component: Contact
},
{
  name: 'chris',
  url: '/about/contact/chris',
  component: Chris
}
]

export const configRouter = ($router) => { 
  
	console.log("$router", $router);

	$router.urlRouter.otherwise({state:"home"});
	$router.urlService.config.html5Mode(true); 

}



export var plugins = [pushStateLocationPlugin];







export function getName() {

	// var name = router.stateService.current.name;

	console.log("get name in service", statename);

	return statename;

}



export function getTitle () {

  var name = getName();

  // console.log("get name", state, name);

  var capital = name.substr(0,1);

  return capital.toUpperCase() + name.slice(1);
}

