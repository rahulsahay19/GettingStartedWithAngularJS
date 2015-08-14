/**
 * Created by Rahul_Sahay on 8/14/2015.
 */

  'use strict';


  moviesApp.controller('RegisterController', RegisterController);

  function RegisterController(UserService,$location) {
    var vm = this;

    vm.register = register;

    function register() {
      vm.dataLoading = true;
      UserService.Create(vm.user)
        .then(function (response) {
          if (response.success) {
            toastr.success('Registration Successful!!!');
            $location.path('/login');
            }
          else {
            toastr.error('Error in Registration! ' +response.message)
            vm.dataLoading = false;
          }
        });
    }
  }


