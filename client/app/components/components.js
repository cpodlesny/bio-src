import angular from 'angular';
import Home    from './home';
import Skills  from './skills';
import About   from './about';
import Contact from './contact';

let componentModule = angular.module('app.components', [
  Home,
  Skills,
  About,
  Contact
])

.name;

export default componentModule;
