/**
 * Created by Rahul_Sahay on 7/5/2015.
 */

'use strict';

moviesApp.controller('MovieController', function MovieController($scope, movieDataService,$location,AuthenticationService,$rootScope) {

  $scope.sortMovie = 'name';

  $scope.show=movieDataService.getshows();

  $scope.upVotemMovie = function (movie) {
    movie.voteCount++;
  };
  $scope.downVotemMovie = function (movie) {
    movie.voteCount--;
  };

  setLoginLogoutText();


 // $rootScope.isAuthenticated = true;

  function setLoginLogoutText() {
   // $scope.loginLogoutText = ($rootScope.globals.currentUser.isAuthenticated) ? 'Logout' : 'Login';
    $rootScope.loginLogoutText = ($scope.isAuthenticated)?'Logout':'Login';
    console.log("MovieCTRL:- " +$rootScope.loginLogoutText)
  }

  function redirectToLogin() {
    var path = '/templates' + $location.$$path;
    $location.path(path);
  }
});