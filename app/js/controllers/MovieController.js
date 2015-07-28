/**
 * Created by Rahul_Sahay on 7/5/2015.
 */

'use strict';

moviesApp.controller('MovieController', function MovieController($scope, movieDataService, $log,$location) {

  $scope.sortMovie = 'name';
  //location service in action
  $log.info('protocol:- '+$location.protocol());
  $log.info('port:- '+$location.port());
  $log.info('host:- '+$location.host());
  $log.info('path:- '+$location.path());
  $log.info('url:- '+$location.url());

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