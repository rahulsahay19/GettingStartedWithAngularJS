/**
 * Created by Rahul_Sahay on 7/25/2015.
 */

'use strict';

moviesApp.controller('compileSample',function compileSample($scope, $compile,$parse){
  var sample1 = {
    show:{
      movieName:'Jurassic World',
      location:'IMAX',
      time:'7PM'
    }
  };

  var readMovieName =$parse('show.movieName');
  var readMovieLocation =$parse('show.location');
  var readMovieTime =$parse('show.time');

  console.log("Movie Name:- "+readMovieName(sample1));
  console.log("Movie Location:- "+readMovieLocation(sample1));
  console.log("Movie Time:- "+readMovieTime(sample1));

  //you can also do any other operation like
  var add= $parse('1+1');
  console.log("Result:- "+add());
  $scope.attachDiv = function (element) {
   return $compile(element)($scope).appendTo(angular.element("#attachHere"));
  };
});