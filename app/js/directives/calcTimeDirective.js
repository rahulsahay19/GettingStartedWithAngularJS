/**
 * Created by Rahul_Sahay on 8/1/2015.
 */

'use strict';

moviesApp.directive('calcTime',function(){
  return{
    restrict:'E',
    template:"<button class='btn btn-success' ng-click='returnTime()'>Current Time</button>",
    controller:function($scope){
      $scope.returnTime = function () {
        var date = new Date();
        var time = date.toLocaleTimeString();
        return window.alert("Current Time:- "+time);
      }
    }
  }
})