'use strict';

var moviesApp = angular.module('moviesApp', ['ngResource', 'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'templates/MovieDetails.html',
      controller: 'MovieController'
    });
    $routeProvider.when('/NewMovie', {
      templateUrl: 'templates/NewMovie.html',
      controller: 'PostMovieController'
    });
    $routeProvider.when('/MovieDetails', {
      templateUrl: 'templates/MovieDetails.html',
      controller: 'MovieController'
    });
    $routeProvider.when('/EditUser', {
      templateUrl: 'templates/EditUser.html',
      controller: 'EditUserController'
    });
    $routeProvider.when('/cachePage', {
      templateUrl: 'templates/cachePage.html',
      controller: 'cacheController'
    });
    /*$routeProvider.when('/compileSample',{
     templateUrl:'templates/compileSample.html',
     controller: 'compileSample'
     });*/
    $routeProvider.when('/show/:id', {
      templateUrl: 'templates/MovieDetail.html',
      controller: 'MovieDetailController'
    });

    $routeProvider.when('/customPage', {
      templateUrl: 'templates/customPage.html',
      controller: 'customDirectiveController'
    });
    $routeProvider.when('/calcTime', {
      templateUrl: 'templates/directiveController.html'
    });
    $routeProvider.when('/helloAngular', {
      templateUrl: 'templates/helloAngular.html'
    });
    $routeProvider.otherwise({templateUrl: 'templates/errorPage.html'});
  });

