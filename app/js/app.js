'use strict';

var moviesApp = angular.module('moviesApp', ['ngResource','ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider.when('/',{
      templateUrl:'templates/MovieDetails.html',
      controller: 'MovieController'
    });
    $routeProvider.when('/NewMovie',{
      templateUrl:'templates/NewMovie.html',
      controller: 'PostMovieController'
    });
    $routeProvider.when('/MovieDetails',{
      templateUrl:'templates/MovieDetails.html',
      controller: 'MovieController'
    });
    $routeProvider.when('/show/:id',{
      templateUrl:'templates/MovieDetail.html',
      controller: 'MovieDetailController'
    });
  });

