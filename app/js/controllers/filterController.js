/**
 * Created by Rahul_Sahay on 7/25/2015.
 */

'use strict';

moviesApp.controller('filterController', function filterController($scope, $filter) {
  $scope.show = {};

  var grabFilterData = $filter('rupeesFilter');
  $scope.show.first = grabFilterData(150);
  $scope.show.second = grabFilterData(250);
  $scope.show.third = grabFilterData(350);
})