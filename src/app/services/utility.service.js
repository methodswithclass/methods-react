
import jQuery from "jquery";
import React from "react";

var $ = jQuery;

var desktop = "desktop";
var mobile = "mobile";
var ie = "internet explorer";

var _mobile = false;

var $env = {
    test:"test",
    development:"development",
    production:"production"
}

var environment;

var absUrl;

var menuOpen = false;

export var getUrl = function () {

    // console.log("get url", absUrl, "\n\n\n\n\n\n\n\n\n\n");

    return absUrl;
}

export var makeTitle = function ($title, string) {

    return (

        <div>
            {$title.split(string).map((i,key) => {
                return <div className="relative width margin-v-20" key={key}>{i}</div>;
            })}
        </div>

    );
}


export var getTitle1 = function () {

    return makeTitle("methods\nwith class, llc", "\n");
}

export var getTitle2 = function () {

    return "methods with class, llc"
}

var getAbsUrl = function () {

    $.get("/url",
    {
        method:"GET"
    })
    .then(function (res) {

        console.log("abs url is:", res.data.host);

        absUrl = res.data.host;
    })
}

getAbsUrl();

export var setEnv = function (_env) {

    environment = _env && $env[_env] ? $env[_env] : "development";
}


export var env = function () {

    return environment;
}


export var getEnv = function () {


    return $.ajax("/env", {
        method:"GET"
    })
    .then(function (res) {

        setEnv(((res && res && res.data.env) ? res.data.env : "development"));
    })
}


export var jquery = function () {

    return $;
}

// force the following checks to return true, render the mobile site on desktop for debugging purposes
export var forceMobile = function () {
    _mobile = true;
}


// distinguish between a few popular mobile user agents, desktop agents, and IE
export var whatDevice = function (forceMobile) {

    if (_mobile) return mobile;
    else if(navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/webOS/i) ||
            navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/iPod/i) ||
            navigator.userAgent.match(/iPad/i) ||
            navigator.userAgent.match(/Blackberry/i) ) {

        return mobile;
    }
    else if (navigator.userAgent.indexOf('Firefox') != -1 || navigator.userAgent.indexOf('Chrome') != -1 || navigator.userAgent.indexOf('Safari') != -1) {

        return desktop;
    }
    else

        return ie;
}


export var captureError = function (err) {

    console.log(err);

    return true;
}


var types = {
    one:"interface1",
    two:"interface2",
    unset:"not set"
}

var interfaces = [
{
    name:types.one
},
{
    name:types.two
}
]

var inter = {
    name:types.unset
};


export var getViewTypes = function () {

    return {
        object:types,
        array:interfaces,
        current:inter
    }
}

// blanket check for any mobile vs desktop user agent
export var checkMobile = function() {

    if(_mobile) return true;
    var check = false;
    (function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);

    return check;
}


var menu = {
	opened:{
		position:{left:"600px"},
		index:{zIndex:200}
	},
	closed:{
		position:{left:"0"},
		index:{zIndex:-100}
	}
}

export var openMenu = function (id) {

	$("#" + id).animate(menu.opened.position, 300, function () {

		$("#menu").css(menu.opened.index);
	});
	menuOpen = true;
}

export var closeMenu = function (id) {

	$("#menu").css(menu.closed.index);

	$("#" + id).animate(menu.closed.position, 300);
	menuOpen = false;
}

export var toggleMenu = function (id) {


	if (menuOpen) {

		closeMenu(id);
	}
	else {
		openMenu(id);
	}
}


export var hideMenuButton = function (id) {

	// console.log("scroll", $("#" + id).scrollTop());

	if ($("#" + id).scrollTop() > 70) {

		$("#menubutton").css({display:"none"});

	}
	else {

		$("#menubutton").css({display:"block"});
	}
}





export var toggle = function (toggle, id, options) {

    if (!options) {
        options = {};
    }

    var $inner = $("#" + id + "inner");
    var $toggle = $("#"+id+"toggle");
    var $cover = $("#"+id+"togglecover");

    // console.log("toggle", toggle, id);

    var hide = function () {

        $toggle.animate({opacity:0}, options ? (options.fade ? options.fade : 0) : 0, function () {
             $toggle.css({display:"none"});
             if (options.complete) options.complete();
        });
    }

    var show = function () {

        // $toggle.css({opacity:0});
        $toggle.css({display:"block"});
        $toggle.animate({opacity:1}, options ? (options.fade ? options.fade : 0) : 0, function () {
            if (options.complete) options.complete();
        });
    }

    var disable = function () {

        //$toggle.prop("disabled", true);
        if ($inner[0]) $inner.removeClass("scaling scaling-sm scaling-mm scaling-lg");
        $cover.css({display:"block"});
        $cover.animate({opacity:0.9}, options ? (options.fade ? options.fade : 0) : 0, function () {
            if (options.complete) options.complete();
        });
    }

    var enable = function () {

        //$toggle.prop("disabled", false);
        $cover.animate({opacity:0}, options ? (options.fade ? options.fade : 0) : 0, function () {
            $cover.css({display:"none"});
            if (options.complete) options.complete();
        });
    }

    if (toggle === "show") {
        setTimeout(function () { if ($toggle[0]) show() }, options ? (options.delay ? options.delay : 0) : 0);
    }
    else if (toggle === "hide") {
        setTimeout(function () { if ($toggle[0]) hide() }, options ? (options.delay ? options.delay : 0) : 0);
    }
    else if (toggle === "disable") {
        setTimeout(function () { if ($toggle[0]) disable(); }, options ? (options.delay ? options.delay : 0) : 0);
    }
    else if (toggle === "enable") {
        setTimeout(function () { if ($toggle[0]) enable(); }, options ? (options.delay ? options.delay : 0) : 0);
    }
}

export var dim = function (factor, aspect) {

    var winW = $(window).width();
    var winH = $(window).height();


    var effH = winH*factor;
    var effW = winW*factor;

    var height = effH;
    var width = effH*aspect;

    if (width > effW) {
        width = effW;
        height = effW/aspect;
    }

    return {
        width:width,
        height:height
    }

}


export var makeAspect = function (input) {


    var ww = input.width >= 0 ? input.width : null;
    var wh = input.height >= 0 ? input.height : null;


    if (ww instanceof Number || wh instanceof Number) {
        return null;
    }

    var factor = input.factor >= 0 ? input.factor : 1;
    var aspect = input.aspect >= 0 ? input.aspect : ww/wh;

    var ew = ww*factor;
    var eh = wh*factor;


    eh = ew/aspect;
    ew = eh*aspect;


    return {
        width:ew,
        height:eh
    }


}

var hasChanged = false;

export var getInterface = function () {

    return inter.name;
}

export var isInterface = function (thisOne) {

    return inter.name === thisOne;
}

export var setInterface = function ($interface) {

    var found = interfaces.find(function (p) {

        return p.name === $interface;
    })

    if (found) inter.name = found.name;
    else console.log("set value:", $interface, "is not an interface");

    hasChanged = true;
}

export var changeInterface = function () {

    if (inter.name === interfaces[0].name) {

        setInterface(interfaces[1].name);
    }
    else {
        setInterface(interfaces[0].name)

    }
}

export var interfaceChanged = function () {

    return hasChanged;
}

export var resetChanged = function () {

    hasChanged = false;
}

export var stateName = function (state) {

    var hashIndex = state.indexOf("#");

    return hashIndex > 0 ? state.substr(0, hashIndex) : state;
}
