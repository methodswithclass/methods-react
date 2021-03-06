


var apps = [
{
	id:'evolve',
	back:'/assets/img/evolvehuman_black.jpg',
	description:`have you ever wanted to teach a robot<br>
	to clean up after you? <br><br>
	well my evolve site is for you`
},
{
	id:'gravity',
	back:'/assets/img/gravity.jpg',
	description:`gravity is a powerful thing. <br><br>
	use it to pop bubbles as they wizz around your screen, or to balance an object in the right place.<br><br>
	gravity has never been this fun`

}
]



var blocks = [
{
	id:'code',
	back:'/assets/img/matrix2.jpg',
	description:`we offer code to the masses<br><br>
	feast and be merry :-)`
},
{
	id:'hire',
	back:'/assets/img/garfield.jpg',
	description:"we're also programmers for hire"
},
{
	id:'home',
	back:'/assets/img/home.jpg',
	description:`
	and we come to your home and make it smart <br><br>

	cuz we're smart too
	`
},
{
	id:'poetry',
	back:'/assets/img/code-poetry.jpg',
	description:`what we do is more than just <br><br>
	source code production and client work`
},
{
	id:'intense',
	back:'/assets/img/intense_coding.jpg',
	description:`we enjoy what we do<br><br>
	and we do it a lot`
},
{
	id:'procrastinate',
	back:'/assets/img/procrastinate.jpg',
	description:"so this never happens"
},
{
	id:'sad',
	back:'/assets/img/sad.jpg',
	description:"but this always does"
},
{
	id:'life',
	back:'/assets/img/lifeseems.jpg',
	description:"even though life sometimes feels like this"
},
{
	id:'cry',
	back:'/assets/img/hair.jpg',
	description:`which sometimes makes us<br><br>
	want to do this`
},
{
	id:'html',
	back:'/assets/img/javascript2.jpg',
	description:"so instead we do this"
},
{
	id:'end',
	back:'/assets/img/trust2.jpg',
	description:"the end"
}
];

var contact = {
	bio:`


	I am the developer for Methods with Class, LLC. We are a small firm dedicated to helping people and businesses with websites and home installations. <br><br>

	My main focus in development, for the moment, is on fullstack software for the web. What I do is my passion, JavaScript is my choice of poison :) using all flavors of Angular and React on the frontend, and Node/Express on the backend. I also develop a bit in Java and Python.<br><br>

	I'm an AWS developer as well, writing automated bash scripts, and doing other Linux development. I'm experienced in Agile methodologies.<br><br>


	I maintain several sites, projects, and games that each have a consistent code base API pulled from a remote and public server that's listed on this page. I also contribute to the NPM and Bower registries.<br><br>


	This process, preferrable to simply posting to GitHub, keeps my code in house and centralized, it makes my code actionable by anyone in real time, keeps all my projects consistent, allows me to present my source code to anyone interested, distribute my work to those who might want to use it for their own projects, and document it robustly. And some of my work is on Github anyway :)<br><br>

	`,
	skills:{
		title:"Skills",
		items:[
			"Software Development, Software Architecture, Software Abstraction",
			"Software Automation, Software Engineering, Object Oriented Programming",
			"Mobile Apps, Mobile Web, Responsive Design",
			"User Experience, User Interface (UX/UI), interface design",
			"Class Structures, Object Structures, Inheritance",
			"Requirements Definition, Requirements Gathering, Requirements Managements",
			"JavaScript, HTML, CSS, PHP, Objective C, Java, VBA, ActionScript, JSON, REST, MVC",
			"iOS, Android, Unix",
			"AngularJS, NodeJS, ExpressJS, Bootstrap, Git",
			"Heroku, Netlify, Firebase",
			"Write clean, Maintainable, Scalable, High-quality, High-performing code",
			"site hosting, domain registration, DNS configuration",
			"significant written communication and writing skills",
			"other communication, interpersonal, leadership, mentorship",
			"math, physics, engineering, motion dynamics, other technical skills"
		]
	},
	projects:{
		title:"Projects",
		items:[
		{
			title:"Code",
			href:"code.methodswithclass.com",
			description:"Fully responsive, view on both desktop and mobile",
			items:[
				"Global CSS that can be applied to any project",
				"Angular directive for parallax scrolling, accounts for any screen and image size",
				"Angular service for firing events in one part of app from another part of app",
				"Angular service for sending data from one part of app to another part of app",
				"Angular directive for development console that prints JavaScript console entries to the screen for mobile debugging",
				"Version system for all of the above so that I can update code but not break existing sites"
			]
		},
		{
			title:"Evolve",
			href:"evolve.methodswithclass.com",
			description:"Fully responsive, view on both desktop and mobile",
			items:[
				"Artificial Intelligence, evolutionary programming, genetic algorithm (GA)",
				"Developed generic GA software that uses generations of sets of solutions to induce machine learning for any given problem",
				"Developed GA with enough abstraction to allow a multitude of learning problems to be addressed",
				"Designed and Developed Angular web app demonstrate the machine learning capabilities of the GA",
				"Designed architecture of the web app to deliver the bottom level GA software where necessary and handle the multiple learning problem implementations",
				"State based navigation, single page web app, OOP design",
				"Modular design, reusable code, heavy attention to organization and architecture",
				"For “cleaning robot” program, machine learning algorithm teaches the program to improve performance by 30x in only 1000 generations"
			]
		},
		{
			title:"Gravity",
			href:"gravity.methodswithclass.com",
			description:"Requires a device with an accelerometer like a mobile device",
			items:[
				"Developed algorithm to handle device accelerometer data and filter it into usable data (velocity, position) in real time",
				"Designed and developed Angular web app to demonstrate algorithm in use as a game to move a ball around on screen by moving and tilting the physical device around",
				"Developed checks for access by app to the device accelerometer and gives proper warnings if they fail, also give warnings when screen rotates so that it can only be played in portrait (web version)",
				"Developed platform to handle the development of different games that all use the same interaction principle based on original algorithm",
				"Developed games to keep track of score, time, and arcade style graphics",
				"Developed version for iPhone and Android web browsers with JavaScript Angular single page web app",
				"Developed version for iPhone iOS native app in Objective-C"
			]
		},
		{
			title:"Unnecessary Theories",
			href:"www.unnecessarytheories.io",
			description:"Fully responsive, view on both desktop and mobile",
			items:[
				"Designed and Developed frontend blog site",
				"Developed Angular I/O module to read .txt files that sit on server that allow population of blog text for each page",
				"Developed technique using PHP to edit the index.php file meta data per request, this allows Facebook and other social media crawlers to automatically populate “share” objects just given a url, the result is the ability to share individual blog articles from a single page app with one index file and “one” set of meta data (found code, modified for my purposes)",
				"Responsive design, mobile recognition, changes which view is served depending on device",
				"AngularJS single page web app"
			]
		},
		{
			title:"Methods with Class",
			href:"www.methodswithclass.com",
			description:"Fully responsive, view on both desktop and mobile",
			items:[
				"Designed and developed fullstack React/Node/Express single page application",
				"Responsive design, mobile recognition, serves different html and parameters for different device types",
				"State based navigation",
				"Gulp build tools",
				"Utilizes websocket technology"
			]
		},
		]
	}
}

var addIndexesToArray = function (array) {

	array.forEach(function (value, index) {

		value.index = index;
	});
}

addIndexesToArray(blocks);


export var all = {
	apps:apps,
	blocks:blocks,
	contact:contact
}
