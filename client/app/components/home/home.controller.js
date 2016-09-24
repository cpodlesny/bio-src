class HomeController {
  constructor() {
    this.name     = 'home';
    this.projects = [
      {
        "name":"StartupGames",
        "description":"Web project for companies usage with possibility of organizing pool games and non-pool games. Platform that works as an interactive system and empower company employees to manage corporate games.",
        "role":"Front-end developer",
        "responsibilities":"Creating frontend project structure. Developing interactive, reusable and customizable modules",
        "technologies":"JavaScript, AngularJS, Bootstrap, JSON, RESTApi"
      },
      {
        "name":"RealCar",
        "description":"The User app for easy rent of premium cars (Range Rovers). The Operator app to simplify a monitoring of car park",
        "role":"Front-end developer",
        "responsibilities":"Implementing dynamic cars calendar with infinity scrolling for overview/edit orders",
        "technologies":"HTML5, CSS3, JavaScript, AngularJS, Nginx/Unicorn, Rails, PostgreSQL, Moment, lodash"
      },
      {
        "name":"BabyCare",
        "description":"Website directory for BabyCare store according to client's specifications",
        "role":"Front-end developer",
        "responsibilities":"Creating frontend project structure. Developing interactive, reusable and customizable modules",
        "technologies":"HTML5, CSS3 (Sass, Bourbon, CSSComb), JavaScript (JQuery)"
      },
      {
        "name":"GoldenLisbon",
        "description":"Website for tourism services with admin panel for managing tours and offers",
        "role":"Full-stack developer",
        "responsibilities":"Creating client and server side structures. Developing interactive, reusable and customizable modules",
        "technologies":"HTML5, CSS3 (Sass, Bootstrap, Bourbon), JavaScript (JQuery, Angular, Lodash), Python (Django), Sass"
      },
      {
        "name":"RevenueApp",
        "description":"Website for managing salaries and company revenue",
        "role":"Front-end developer",
        "responsibilities":"Creating client and server side structures. Developing interactive, reusable and customizable modules",
        "technologies":"HTML5, CSS3 (Sass, Material Lite Design, Bourbon), JavaScript (Ember, Moment, JQuery, Lodash)"
      }
    ];
  }
}

export default HomeController;
