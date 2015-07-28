/**
 * Created by Rahul_Sahay on 7/21/2015.
 */

'use strict';

moviesApp.factory('cacheFactory',function($cacheFactory){
  return $cacheFactory('cacheFactory',{capacity:5})
});