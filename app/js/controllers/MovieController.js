/**
 * Created by Rahul_Sahay on 7/5/2015.
 */

'use strict';

moviesApp.controller('MovieController', function MovieController($scope, movieDataService) {

  $scope.sortMovie = 'name';

  $scope.show=movieDataService.getshows();

  $scope.upVotemMovie = function (movie) {
    movie.voteCount++;
  };
  $scope.downVotemMovie = function (movie) {
    movie.voteCount--;
  };
});