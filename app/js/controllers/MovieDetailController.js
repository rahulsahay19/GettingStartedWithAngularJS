/**
 * Created by Rahul_Sahay on 7/26/2015.
 */

'use strict';

moviesApp.controller('MovieDetailController',function MovieDetailController($scope,movieDataService,$routeParams){
  $scope.show = movieDataService.getshow($routeParams.id);
});