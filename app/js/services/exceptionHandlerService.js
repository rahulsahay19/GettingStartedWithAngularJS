/**
 * Created by Rahul_Sahay on 7/25/2015.
 */

'use strict';

moviesApp.factory('$exceptionHandler',function($log){
  return function(exception){
    $log.error("Exception Occured:- "+exception.exceptionMessage);
  }
})