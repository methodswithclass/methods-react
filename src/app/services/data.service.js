const apps = [
  {
    id: 'evolve',
    url: 'evolution.methodswithclass.com',
    back: '/assets/story/evolvehuman_black.jpg',
    description: `have you ever wanted to teach a robot<br>
	to clean up after you? <br><br>
	the evolve site is for you`,
  },
  // {
  //   id: 'gravity',
  //   url: 'gravity.methodswithclass.com',
  //   back: '/assets/story/gravity.jpg',
  //   description: `gravity is a powerful thing. <br><br>
  // use it to pop bubbles as they wizz around your screen, or to balance an object in the right place.<br><br>
  // gravity has never been this fun`,
  // },
];

const blocks = [
  // {
  //   id: 'code',
  //   back: '/assets/story/matrix2.jpg',
  //   description: `we offer code to the masses<br><br>
  // feast and be merry :-)`,
  // },
  // {
  //   id: 'hire',
  //   back: '/assets/story/garfield.jpg',
  //   description: "we're also programmers for hire",
  // },
  // {
  //   id: 'home',
  //   back: '/assets/story/home.jpg',
  //   description: `
  // and we come to your home and make it smart <br><br>

  // cuz we're smart too
  // `,
  // },
  {
    id: 'poetry',
    back: '/assets/story/code-poetry.jpg',
    description: `code is beautiful`,
  },
  {
    id: 'intense',
    back: '/assets/story/intense_coding.jpg',
    description: `we enjoy what we do<br><br>
	and we do it a lot`,
  },
  {
    id: 'procrastinate',
    back: '/assets/story/procrastinate.jpg',
    description: 'so this never happens',
  },
  {
    id: 'sad',
    back: '/assets/story/sad.jpg',
    description: 'but this always does',
  },
  {
    id: 'life',
    back: '/assets/story/lifeseems.jpg',
    description: 'even though life sometimes feels like this',
  },
  {
    id: 'cry',
    back: '/assets/story/hair.jpg',
    description: `which sometimes makes us<br><br>
	want to do this`,
  },
  {
    id: 'html',
    back: '/assets/story/javascript2.jpg',
    description: 'so instead we do this',
  },
  {
    id: 'end',
    back: '/assets/story/trust2.jpg',
    description: 'the end',
  },
];

const contact = {
  bio: `
	Methods with Class is my project brand, I host several web apps and projects under this name.<br><br>

	I'm a fullstack developer with experience with many languages and fraweworks.<br><br>

	I mostly use React on the frontend and AWS services on the backend.<br><br>

	I maintain several sites, projects, and games listed below.<br><br>
	`,
  skills: {
    title: 'Skills',
    items: [
      'Javascript, Html, css, sass',
      'ReactJS, NodeJS, Git',
      'Mobile Web, Responsive Design',
      'UI/UX',
      'OOP, Python, Java',
      'AWS, CDK, Api Gateway, Cloudfront, Lambda, S3, DynamoDB, SQS, SNS',
      'Machine Learning, evolutionary algorithms, neural networks',
      'site hosting, domain registration, DNS configuration',
      'technical writing',
      'math, physics, engineering',
    ],
  },
  projects: {
    title: 'Projects',
    items: [
      // {
      //   title: 'Code',
      //   href: 'code.methodswithclass.com',
      //   description: 'Fully responsive, view on both desktop and mobile',
      //   items: [
      //     'Global CSS that can be applied to any project',
      //     'Angular directive for parallax scrolling, accounts for any screen and image size',
      //     'Angular service for firing events in one part of app from another part of app',
      //     'Angular service for sending data from one part of app to another part of app',
      //     'Angular directive for development console that prints JavaScript console entries to the screen for mobile debugging',
      //     'Version system for all of the above so that I can update code but not break existing sites',
      //   ],
      // },
      {
        title: 'Evolve',
        href: apps[0].url,
        description: 'Fully responsive, view on both desktop and mobile',
        items: [
          'Artificial Intelligence, evolutionary programming, genetic algorithm (GA)',
          'teaches a virtual robot to pick up trash in real time evolution of solution',
          'React web app',
          'AWS infrastructure, Api Gateway Websockets, Lambda, DynamoDb, S3',
        ],
      },
      // {
      //   title: 'Gravity',
      //   href: apps[1].url,
      //   description:
      //     'Requires a device with an accelerometer like a mobile device',
      //   items: [
      //     'Developed algorithm to handle device accelerometer data and filter it into usable data (velocity, position) in real time',
      //     'Designed and developed Angular web app to demonstrate algorithm in use as a game to move a ball around on screen by moving and tilting the physical device around',
      //     'Developed checks for access by app to the device accelerometer and gives proper warnings if they fail, also give warnings when screen rotates so that it can only be played in portrait (web version)',
      //     'Developed platform to handle the development of different games that all use the same interaction principle based on original algorithm',
      //     'Developed games to keep track of score, time, and arcade style graphics',
      //     'Developed version for iPhone and Android web browsers with JavaScript Angular single page web app',
      //     'Developed version for iPhone iOS native app in Objective-C',
      //   ],
      // },
      {
        title: 'Unnecessary Theories',
        href: 'www.unnecessarytheories.com',
        description: 'Fully responsive, view on both desktop and mobile',
        items: [
          'blog site',
          'React frontend, AWS infrastructure on backend',
          'Api Gateway, Cloudfront, DynamoDb, S3',
        ],
      },
      {
        title: 'Methods with Class',
        href: 'www.methodswithclass.com',
        description: 'Fully responsive, view on both desktop and mobile',
        items: [
          'React frontend, AWS infrastructure on backend',
          'Api Gateway, Cloudfront, S3',
        ],
      },
    ],
  },
};

const addIndexesToArray = (array) => {
  array.forEach(function (value, index) {
    value.index = index;
  });
};

addIndexesToArray(blocks);

export const all = {
  apps: apps,
  blocks: blocks,
  contact: contact,
};
