/**
 * Created by Rahul_Sahay on 7/5/2015.
 */

'use strict';

moviesApp.controller('MovieController', function MovieController($scope, movieDataService, $log) {

  $scope.sortMovie = 'name';
  //Success Call
  movieDataService.getshows().$promise.then(function (show) {
    $scope.show = show;
    $log.info(show);
  }, //Error Case
    function (status) {
    $log.error(status);
  });

  $scope.upVotemMovie = function (movie) {
    movie.voteCount++;
  };
  $scope.downVotemMovie = function (movie) {
    movie.voteCount--;
  };
});