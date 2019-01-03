



var history = [];
var previousIndex = 1;
var pressedBack = false;
var statename;



export var getName = function () {

	return statename;
}


export function $history ($name) {


	statename = $name;

	if ($name == "home") {
		history = ["home"];
		previousIndex = 1;
	}
	else if ($name != "settings" && !pressedBack) {
		history.splice(0, 0, $name);
	}

	pressedBack = false;

}



export var changePreviousIndex = function () {

	if (getName() != "settings") {
		previousIndex++;
	}
	pressedBack = true;
}

var getPreviousIndex = function () {

	var previousPage = 1;


	if (getName() == "settings") {
		console.log("is settings \n\n\n\n\n\n\n\n");
		return 0;
	}
	else {

		previousPage = previousIndex;

		console.log("previous", previousPage);

		return previousPage;
	}


}



export function getPreviousName () {

	return history[getPreviousIndex()];
}
