


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
  url: '/home',
  component: Home,
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
  component: About,
  resolve:[{
    token: 'about',
    deps: ['$transition$'],
    resolveFn: (trans) => {
      setStateName("about");
    }
  }]
},
{
  name: 'what',
  url: '/about/whatwedo',
  component: What,
  resolve:[{
    token: 'what',
    deps: ['$transition$'],
    resolveFn: (trans) => {
      setStateName("what");
    }
  }]
},
{
  name: 'apps',
  url: '/about/whatwedo/apps',
  component: Apps,
  resolve:[{
    token: 'apps',
    deps: ['$transition$'],
    resolveFn: (trans) => {
      setStateName("apps");
    }
  }]
},
{
  name: 'hire',
  url: '/about/whatwedo/hire',
  component: Hire,
  resolve:[{
    token: 'hire',
    deps: ['$transition$'],
    resolveFn: (trans) => {
      setStateName("hire");
    }
  }]
},
{
  name: 'contact',
  url: '/contact',
  component: Contact,
  resolve:[{
    token: 'contact',
    deps: ['$transition$'],
    resolveFn: (trans) => {
      setStateName("contact");
    }
  }]
},
{
  name: 'chris',
  url: '/contact/chris',
  component: Chris,
  resolve:[{
    token: 'chris',
    deps: ['$transition$'],
    resolveFn: (trans) => {
      setStateName("chris");
    }
  }]
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

