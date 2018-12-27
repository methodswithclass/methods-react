

import * as trashController from "../controllers/trash.controller";
import * as feedbackController from "../controllers/feedback.controller";
import * as recognizeController from "../controllers/recognize.controller";

import * as trashWalkthrough from "../walkthroughs/trash/trash.walk.service";

export var controllers = {
	trash:trashController,
	feedback:feedbackController,
	recognize:recognizeController
}


export var walkthroughs = {
	trash:trashWalkthrough
}