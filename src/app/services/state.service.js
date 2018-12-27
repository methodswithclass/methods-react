


import { pushStateLocationPlugin } from "@uirouter/react";

import Home from "../components/home/Home";


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

