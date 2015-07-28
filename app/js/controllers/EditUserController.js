/**
 * Created by Rahul_Sahay on 7/13/2015.
 */

'use strict';
moviesApp.controller('EditUserController', function ($scope,buildGravatarUrl) {
    $scope.user = {};

    $scope.getGravatarUrl=function(email){
      return  buildGravatarUrl.gravatarUrl(email);
    }
});