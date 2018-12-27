


import * as $input from "./input.service";
import * as assets from "./asset.service";
import * as state from "./state.service";
import * as shared from "./shared.service";
// import * as $ from "jquery";
import * as evolve from "./evolve.service";
import * as api from "./api.service";
import * as u from "./utility.service";

import * as config from "./config.service";
import * as settings from "./settings.service";

var controller;
var walkthrough;
var pageBuilt = false;
var session;
var tempcross;
var crossoverMethods;
var crossoverData;
var demos;
var n;
var $toggle = true;

var displayParams = {
	delay:300,
	duration:100
}

var next = function (options) {


    setTimeout(function () {

        if (typeof options.complete === "function") options.complete() 
    }, options.duration)
}


var resetgen = function () {


}


export var changeMethod = function (model) {

    var found = crossoverMethods.find((p) => {

        return p.method === model;
    })

    var next;

    if (found) {

       return found.method;
    }
    else {
        return "none";
    }
}


var setup = function (tempcross, programs, activePages, resolve, n) {

    crossoverMethods = [];
    var k = 0;

    for (var i in tempcross) {

        if (k > 0) {

            crossoverMethods.push({
                index:k-1,
                name:i,
                method:tempcross[i]
            })
        }

        k++;
    }

    crossoverData = {
        crossoverMethods:crossoverMethods,
        method:crossoverMethods[0].method
    }

    var j = 0;
    var page;
    demos = [];

    for (var m in programs) {
        // console.log("index", programs[i]);

        page =  activePages[programs[m]];

        if (page.active) {
           
            var stateName = page.name;
            
            demos[j] = {
                name:stateName,
                state:stateName
            }

            j++;
        }
    }
    
    var initialDemo = demos.find(function (p) {

        console.log("state", p.state, state.getName());
        return p.state == state.getName();
    })

    console.log("state name", n);

    $input.setName(n);

    $input.setOverride(n, function () {

        shared.g.waitForElem({elems:"#"+n+"efinfotoggle"}, function () {
            evolve.stepprogress(n);
        });
    });

    controller.build(n)
    .then((data) => {
        resolve({settings:data, methods:crossoverMethods});
    });

}

export var serverError = function (toggle) {


    if (toggle) {

        controller.serverError(toggle);
        $toggle = !toggle;
    }
    else {
        if ($toggle) {
            controller.serverError($toggle);
            $toggle = false;
        }
        else {
            controller.serverError($toggle);
            $toggle = true;
        }
    }
}


export var build = function () {


    return new Promise((resolve, reject) => {

        var n = state.getName();

    	controller = assets.controllers[n];
        walkthrough = assets.walkthroughs[n];

        // shared.react.subscribe({
        //     name:"displayParams",
        //     callback:function (x) {

        //         displayParams = x.params;
        //         loadSpeeds = x.loadSpeeds;
        //         allParams = x.allParams;

        //         params = displayParams || allParams.fast || loadSpeeds[0];

        //         console.log("params", displayParams, allParams, loadSpeeds, params);
        //     }
        // })

        walkthrough.setup();

        tempcross = config.get.sync("global.types.crossoverMethods");
        var programs = config.get.sync("config.pageIndices");
        var activePages = config.get.sync("config.activePages");

        setup(tempcross, programs, activePages, resolve, n);

    });
}



var enter = function () {


    settings.setHover();
    settings.closeMain();

    controller.enter();

    // shared.react.push({
    //     name:"simulator" + name,
    //     state:simulator
    // })

}

export var $phases = [
{
    message:"begin loading environment for demo", 
    delay:displayParams.delay,
    duration:2*displayParams.duration,
    phase:function (options) {

        console.log("initial processing phase");

        controller.setup();

        enter();

        // display.elementsToggle(self.name, "hide");

        next(options);

    }
},
{
    message:"initializing algoirthm", 
    delay:displayParams.delay,
    duration:6*displayParams.duration,
    phase:function (options) {

        console.log("initializing algorithm, page built");
        

        if (!pageBuilt) {
           
            api.instantiate(function (res) {

                // console.log("Instantiate session", res);

                session = res.data.session;

                // console.log("instantiate complete");

                $input.setInput({
                    session:session,
                    method:tempcross.default
                })
                
                api.setInput(false, function (res) {

                    api.initialize(function () {                        


                        session = res.data.session;

                        // console.log("instantiate complete");

                        $input.setInput({
                            session:session
                        });

                        next(options);

                    });

                })
                
            })

        }
        else {

            resetgen();


            next(options);
        }

    }
},
{
    message:"loading environment", 
    delay:displayParams.delay,
    duration:6*displayParams.duration, 
    phase:function (options) {

        console.log("loading environment");

        // controller.createEnvironment(self, $scope);

        // settings.animateToggle(false);

        next(options);
    }
},
{
    message:"loading display", 
    delay:displayParams.delay,
    duration:2*displayParams.duration,
    phase:function (options) {

        console.log("loading display");

        // display.load(self.name);

        next(options);
    }
},
{
    message:"finishing up", 
    delay:displayParams.delay,
    duration:2*displayParams.duration, 
    phase:function (options) {

        console.log("finishing up");

        // controller.createEnvironment(self);

        controller.finish()
        .then(function (result) {

            evolve.running(false);

            u.toggle("hide", "loading", {fade:displayParams.fade, delay:displayParams.delay});

            // display.elementsToggle(self.name, "show");

            // display.isBuilt(self.name);
        
            next(options);

        });
        

        next(options);
    }
}
]
