/**
 * Created by Rahul_Sahay on 7/10/2015.
 */

'use strict';

moviesApp.controller('PostMovieController', function ($scope, movieDataService) {
  $scope.save = function (show, newMovieForm) {
    if (newMovieForm.$valid) {
      movieDataService.save(show)
        .$promise.then(function(status){
          console.log("New Value Saved! " + status);
        },function(status){
          console.log("Error Occured! " + status);
        });

    }
    else {
      window.alert("Correct your input");
    }
  };
  $scope.cancel = function () {
    window.location = "MovieDetails.html";
  }
});