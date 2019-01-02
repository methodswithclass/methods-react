const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const config = require("./config.js");

const middleware = require("./middleware/middleware.js");

const app = express();

var expressWs = require('express-ws')(app);

const apiRoutes = require("./backend/routes/routes-ws.js");


// const writingRoutes = require("./backend/routes/write-image.js");

// const trashRoutes = require("./backend/routes/programs-ws/trash.js");
// const recognizeRoutes = require("./backend/routes/programs-ws/recognize.js");

const get = require("./backend/backend-app/data/get/get.js");


var port;


var PORTS = {
	heroku:8080,
	http:80,
	livereload:config.livereloadPort,
	misc1:3331,
	misc2:4225,
	misc3:4215
}





app.use(middleware.refresh());
if  (process.env.NODE_ENV == "production") app.use(middleware.forceSSL());
else {console.log("environment development");}

app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));



app.use("/api", apiRoutes);


// app.use("/write", writingRoutes);
// app.use("/trash", trashRoutes);
// app.use("/recognize", recognizeRoutes);

// if  (process.env.NODE_ENV != "production") {
// 	app.use(require('connect-livereload')({
// 		port: PORTS.livereload
// 	}));
// }


app.use("/url", function (req, res, next) {

	var host = req.get("host");

	console.log("host is:", host);

	res.send({data:{host:host}});
})


app.get("/env", function (req, res, next) {

	res.json({data:{env:middleware.getEnv()}});
})



app.use("/public", express.static(path.join(__dirname, "dist/assets")))
app.use("/t", express.static(path.join(__dirname, "temp")))


app.use("/", express.static(path.join(__dirname, "dist")));

app.use(middleware.errorHandler());


var env = process.env.NODE_ENV;
var port;


if (process.env.PORT) {
	port = process.env.PORT;
}
else if (env == "production") {

	port = PORTS.heroku;

}
else if (env == "development") {

	port = PORTS.misc2;
}
else {

	port = PORTS.misc1;
}



var listener = app.listen(port, function () {

	currentPort = listener.address().port;

	console.log("listening on port", currentPort);
});
