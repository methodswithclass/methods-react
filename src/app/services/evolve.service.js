


import * as $ from "jquery";
import * as u from "./utility.service";

import * as api from "./api.service";
import * as shared from "./shared.service";
import * as $input from "./input.service";
import * as config from "./config.service";


var n = "";
var interface_timer;
var updateTime;
var spinning = true;
var simulator;
var update = false;
var ev = false;
var genA = 0;
var genB = genA;
var stepdata;
var evolveCompleteCount = 1;
var completed = true;





var timeDivisor = {
    stepdata:2,
    ui_updater:10,
    isRunning:4
}

var $stepdata = {
    gen:0,
    org:0,
    run:0,
    step:0
}

var $evdata = {
    index:0,
    best:{
        fitness:0
    },
    worst:{
        fitness:0
    }
}

var params = {
    delay:200,
    fade:200
}

// spinning = false;


var sendData = function (x) {

    shared.react.push({
        name:"data" + n,
        state:x
    })
}

var resetEvdata = function (data) {

    shared.react.push({
        name:"evdata" + n,
        state:{
            evdata:data
        }
    })
}

var initData = function () {

    $stepdata = {
        gen:0,
        org:0,
        run:0,
        step:0
    }

    $evdata = {
        index:0,
        best:{
            fitness:0
        },
        worst:{
            fitness:0
        }
    }


    sendData({
        stepdata:$stepdata
    });


    resetEvdata($evdata);

}




var getBest = function (complete) {


	api.getBest(function (res) {

        sendData({
            evdata:{
                index:0,
                best:res.data.ext.best,
                worst:res.data.ext.worst
            }
        });

    	if (typeof complete === "function") complete();

    })

}


var getEvdata = function (count) {

    api.getBest(function (res) {

        sendData({
            evdata:{
                index:$stepdata.gen,
                best:res.data.ext.best,
                worst:res.data.ext.worst
            }
        });

        // if (typeof complete === "function") complete();

    })
}

// getEvdata();

var setStepdata = function () {

    // console.log("update time", updateTime);

	api.stepdata(function (res) {

        getBest();

		stepdata = res.data.stepdata ? res.data.stepdata : $stepdata;

		genA = stepdata.gen;

        $stepdata = {
        	gen:stepdata.gen,
        	org:stepdata.org,
        	run:stepdata.run,
        	step:stepdata.step
        }

        // console.log("stetpdata", $stepdata);

        sendData({
            stepdata:$stepdata
        });

        if (genA !== genB) {
        	genB = genA;
        }

        setTimeout(function () {

        	if (update) setStepdata();

   		}, updateTime/timeDivisor.stepdata);


    })

}

var updateProgressBar = function ($name, percent, generation, total) {

	// console.log("percent", percent);

	var value = percent*100;
	var percentString = value + "%";
	var percentComplete = "process is " + shared.g.truncate(value, 0) + "% finished";
	var infoString =  `
    	<span class='margin-right-20 margin-bottom-20 margin-top-20'> total generations: ${total} </span>
    	<span class='margin-20'>current: ${generation} </span>
    	<br>
    	<span class='margin-top-20'> ${percentComplete} </span>
	`

    $("#"+$name+"efrundatatoggle").css({width:percentString});
    $("#"+$name+"efinfotoggle").html(infoString);
}


export var stepprogress = function ($name) {

    var input = $input.getInput(false);

    var genT = input.gens || 1;
    var orgT = input.pop || 1;
    var runT = input.runs || 1;
    var stepT = input.programInput.totalSteps || 1;


    // var gen = $stepdata.gen - 1 || 0;
    // var org = $stepdata.org - 1 || 0;
    // var step = $stepdata.step || 0;
    // var run = $stepdata.run - 1 || 0;

    var gen = $stepdata.gen || 0;
    var org = $stepdata.org || 0;
    var step = $stepdata.step || 0;
    var run = $stepdata.run || 0;


    var stepP = (step + run*stepT + org*(runT*stepT) + gen*(orgT*runT*stepT))/(stepT*runT*orgT*genT);
    // var runP = (run + org*runT)/runT;
    // var orgP = (org + gen*orgT)/orgT;

    var percent = stepP;

    if (percent >= 1) {
        percent = 1;
    }

    updateProgressBar($name, percent, gen, genT);
}


var ui_updater = function () {

    interface_timer = setInterval(function () {

        // console.log("update", update, ev);
        if (update) {
            if (ev) {
                stepprogress(n);
            }
        }

    }, updateTime/timeDivisor.ui_update);

}


var toggleTimer = function ($toggle) {

    if ($toggle) {

        ui_updater();
    }
    else {

        if (interface_timer) {
            clearInterval(interface_timer)
            interface_timer = null;
        }
    }
}


export var evolving = function (_evolve) {

    // console.log("evolving", _evolve);

    var spinElem = "#"+n+"efspintoggle";

    ev = _evolve;

    // console.log("spinElem", spinElem);

    if (_evolve) {

        running(_evolve);

        shared.g.waitForElem({elems:spinElem}, function (options) {

            // console.log("spinElem", options.elems);
            if (spinning) $(options.elems).addClass("spinning");
        });
    }
    else {

        shared.g.waitForElem({elems:spinElem}, function (options) {

            // console.log("spinElem", options.elems);
            if (spinning) $(options.elems).removeClass("spinning");
        })
    }
}





export var running = function (_run) {
    // console.log("running", _run);
    update = _run;
    toggleTimer(_run);
    if (!_run) {
        evolving(_run);
        if (!completed) {
            completeEvolve();
            completed = true;
        }
    }
}


export var isEvolving = function () {

    return update;
}


var refreshSimulator = function (clear) {

    console.log("refreshsimulator", clear, simulator);

    simulator.setup(clear, function () {

        console.log("refresh simulator");
        simulator.refresh();
    });
}


export var completeEvolve = function () {



	// running(false);

    console.log("complete evolve");



    shared.events.dispatch("evolve." + n + ".end");


    u.toggle("show", "settings", {delay:params.delay, fade:params.fade});
    // u.toggle("show", "nav", {delay:params.delay, fade:params.fade});
    u.toggle("hide", "breakfeedback", {delay:params.delay*5});
    u.toggle("hide", "evolve", {delay:params.delay*3, fade:params.fade*3});

    // u.toggle("enable", "refresh", {delay:params.delay, fade:params.fade});
    // u.toggle("enable", "play", {delay:params.delay, fade:params.fade});

    if (n === "feedback") {

        // u.toggle("disable", "stop", {delay:params.delay, fade:params.fade});
        // u.toggle("enable", "play", {delay:params.delay, fade:params.fade});
        // u.toggle("enable", "refresh", {delay:params.delay, fade:params.fade});

        // refreshSimulator();
    }
    else {

        u.toggle("show", "run", {fade:params.fade});

        if (n == "trash")  {

            // u.toggle("enable", "restart", {delay:params.delay, fade:params.fade});
            // u.toggle("enable", "step", {delay:params.delay, fade:params.fade});
        }

        // refreshSimulator(false);
    }


    getBest();

    // getEvdata(evolveCompleteCount++);

}



var isRunning = function () {

	api.isRunning(function (res) {

        // console.log("running", res.data.running, updateTime);

    	if (!res.data.running) running(false);

		setTimeout(function () {

            // console.log("update", isEvolving());

        	if (isEvolving()) {
        		isRunning();
        	}
        	else {
	    		breakRun();
	    	}

        }, updateTime/timeDivisor.isRunning)

    })

}




var runEvolveComplete = function () {


    setStepdata();

    setTimeout(function () {
    	isRunning();

    }, 2000);

}



export var resetgen = function (refresh, complete) {

    $input.resetInput();

    var input = $input.getInput(false);

    shared.events.dispatch("evolve."+n+".reset");

    if (refresh) refreshSimulator(true);

    if (n === "feedback") {
        // u.toggle("enable", "play", {delay:params.delay, fade:params.fade});
    }
    else {
        // u.toggle("disable", "restart", {delay:params.delay, fade:params.fade});
        // u.toggle("disable", "step", {delay:params.delay, fade:params.fade});
        // u.toggle("disable", "play", {delay:params.delay, fade:params.fade});
        // u.toggle("disable", "stop", {delay:params.delay, fade:params.fade});

    }

    if (input.session) {


        console.log("reset gen initialize");
        api.instantiate(function ($res) {

            api.initialize(function (res) {

                initData();

                if (typeof complete === "function") complete({res:res});

            });

        })
    }

}


export var run = function () {

	evolving(true);

    completed = false;

	// input = $input.getInput();

    console.log("run evolve");

    shared.events.dispatch("evolve."+ n +".start");

    // u.toggle("hide", "settings", {fade:params.fade});

    if (n === "feedback") {


        // u.toggle("enable", "stop", {fade:params.fade});
        // u.toggle("disable", "play", {fade:params.fade});
        // u.toggle("disable", "refresh", {fade:params.fade});
        u.toggle("hide", "evolve");
	}
	else {


        // u.toggle("hide", "nav", {fade:params.fade});
        u.toggle("hide", "run", {fade:params.fade});
        // u.toggle("disable", "refresh", {fade:params.fade});
        // u.toggle("disable", "restart", {fade:params.fade});
        // u.toggle("disable", "step", {fade:params.fade});
        // u.toggle("disable", "play", {fade:params.fade});
        // u.toggle("disable", "stop", {fade:params.fade});


        u.toggle("show", "evolve", {fade:params.fade});
        u.toggle("show", "break", {delay:params.delay});

	}

	// $("#evolvetoggle").css({display:"block"});

	// $("#evolvetoggle").animate({opacity:1}, 600);


    if (n === "feedback") {

        api.run(function (res) {

            runEvolveComplete();
        })
    }
    else {

        // simulator.refresh(function () {

            api.run(function (res) {

                runEvolveComplete();
            })

        // });
    }



}


export var breakRun = function () {


    console.log("hard stop");

    running(false);

    u.toggle("show", "breakfeedback");

    // shared.events.dispatch("evolve."+n+".end");

    // uncomment this line to force the gens value to change in the settings panel to the current generation when hardstop was called
    // so that to continue evolving, the gens value must be increased to the previous or desired value

    // keeping this line commented out, the gens value (while it was changed on the backend to force the stop)
    // does not change in the settings panel, so that continuing to evolve only requires hitting the evolve button again
    // with no other action

    // ## this line sets the gens value to the current generation
    // ## $input.getInput(false);
    // ##

    // setTimeout(function () {
    //     $("#evolvetoggle").animate({opacity:0}, 600, function () {

    // 		$("#evolvetoggle").css({display:"none"});
    // 	});

    // }, 600);

    api.hardStop();
}


export var setup = function ($name) {

    n = $name;

    // simulator = assets.get(assets.types.SIMULATOR, n);


    shared.react.subscribe({
        name:"simulator" + n,
        callback:function (x) {

            simulator = x;
        }
    });



    updateTime = config.get.sync("global.programs." + n).updateTime

    resetgen();

    initData();


}




