import angular      from 'angular';
import uiRouter     from 'angular-ui-router';
import Common       from './common/common';
import Components   from './components/components';
import AppComponent from './app.component';

import 'angular-aria';
import 'angular-animate';
import 'angular-messages';
import 'angular-resource';
import 'angular-translate';
import 'angular-material';

import 'firebase/lib/firebase-web';

import 'normalize.css';
import '../../node_modules/angular-material/angular-material.css';

angular.module('app', [
  'ngAria',
  'ngAnimate',
  'ngMessages',
  'ngResource',
  'ngMaterial',
  'pascalprecht.translate',
  uiRouter,
  Common,
  Components
  ])
  .config((
    $locationProvider,
    $mdThemingProvider,
    $mdIconProvider,
    $translateProvider,
    $resourceProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    // $locationProvider.html5Mode(true).hashPrefix('!');

    $mdThemingProvider.theme('default')
      .primaryPalette('amber')
      .accentPalette('blue-grey');

    $mdIconProvider
      .icon('menu',      'assets/icons/ic_menu_black_24px.svg')
      .icon('call',      'assets/icons/ic_call_black_24px.svg')
      .icon('close',     'assets/icons/ic_close_black_24px.svg')
      .icon('call_made', 'assets/icons/ic_call_made_black_24px.svg')
      .icon('sign_in',   'assets/icons/ic_sign_in_black_24px.svg')
      .icon('sign_out',  'assets/icons/ic_sign_out_black_24px.svg')
      .icon('email',     'assets/icons/ic_email_black_24px.svg');

    $translateProvider.useSanitizeValueStrategy(null);
    $translateProvider.translations('en', {
      HOME:    'Home',
      ABOUT:   'About',
      CONTACT: 'Contact',
      SKILLS:  'Skills',
      CLOSE:   'Close'
    });
    $translateProvider.translations('de', {
      HOME:    'Startseite',
      ABOUT:   'Über uns',
      CONTACT: 'Kontakte',
      SKILLS:  'Fähigkeiten',
      CLOSE:   'Tab schließen'
    });
    $translateProvider.preferredLanguage('en');

    $resourceProvider.defaults.stripTrailingSlashes = false;

  })
  .component('app', AppComponent);
