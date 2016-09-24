import angular          from 'angular';
import Navbar           from './navbar';
import User             from './user';
import AuthDialoig             from './authDialog';
import GithubApiFactory from './githubApi';
import localForage      from './localForage';

let commonModule = angular.module('app.common', [
  Navbar,
  User,
  AuthDialoig,
  GithubApiFactory,
  localForage
])

.name;

export default commonModule;
