import angular          from 'angular';
import GithubApiFactory from './githubApiFactory.factory';

let repoModule = angular.module('repo', [])

.factory('GithubApiFactory', GithubApiFactory)

.name;

export default repoModule;
