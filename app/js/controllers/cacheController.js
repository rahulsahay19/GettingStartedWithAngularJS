/**
 * Created by Rahul_Sahay on 7/21/2015.
 */

'use strict';

moviesApp.controller('cacheController',function cacheController($scope,cacheFactory){

  //Add to Cache
  $scope.putInCache = function(key,value){
    cacheFactory.put(key,value);
  };
  //Read from Cache
  $scope.readFromCache= function (key) {
    return cacheFactory.get(key);
  }

  //Cache Capacity

  $scope.currentCapacity=function(){
    return cacheFactory.info();
  }

  //Delete from Cache based on key
  $scope.deleteFromCache= function (key) {
     cacheFactory.remove(key);
  }

  //Delete from Cache based on key
  $scope.flushCache= function () {
    cacheFactory.removeAll();
  }
});