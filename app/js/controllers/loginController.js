/**
 * Created by Rahul_Sahay on 8/14/2015.
 */

'use strict';

  moviesApp.controller('LoginController', LoginController);

   function LoginController($location, AuthenticationService, $log,$rootScope) {
    var vm = this;

    var path =$location.path();
    console.log("Path:-" +path);
    console.log("Rootscope:-" +$rootScope.isAuthenticated);

    if(path=="/login" &&($rootScope.isAuthenticated==true)){
      $rootScope.isAuthenticated = false;
      $('#nav-login').text('Login');
    }


    vm.login = login;

    (function initController() {
      // reset login status
      AuthenticationService.ClearCredentials();
    })();

    function login() {
      vm.dataLoading = true;
      AuthenticationService.Login(vm.username, vm.password, function (response) {
        if (response.success) {
          AuthenticationService.SetCredentials(vm.username, vm.password);
          loggedin=true;
          toastr.success("Logged in successfully!")

          $location.path('/');
        } else {
          toastr.error("Error in Logging:- "+ response.message);
          vm.dataLoading = false;
        }
      });
    };
  }

