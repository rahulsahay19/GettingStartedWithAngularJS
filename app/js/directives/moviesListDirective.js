/**
 * Created by Rahul_Sahay on 7/31/2015.
 */

'use strict';

moviesApp.directive('moviesListDirective',function(){
  return{
    restrict:'E',
    templateUrl:'/templates/directives/moviesList.html',
    scope:{
      movie:"=mymovie"
    }
  }
});