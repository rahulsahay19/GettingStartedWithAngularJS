/**
 * Created by Rahul_Sahay on 8/14/2015.
 */

 'use strict';

//Local Storage API

moviesApp.factory('UserService', UserService);

  UserService.$inject = ['$timeout', '$filter', '$q'];
  function UserService($timeout, $filter, $q) {

    var service = {};

    service.GetById = GetById;
    service.GetByUsername = GetByUsername;
    service.Create = Create;

    return service;

     function GetById(id) {
      var deferred = $q.defer();
      var filtered = $filter('filter')(getUsers(), { id: id });
      var user = filtered.length ? filtered[0] : null;
      deferred.resolve(user);
      return deferred.promise;
    }

    function GetByUsername(username) {
      var deferred = $q.defer();
      var filtered = $filter('filter')(getUsers(), { username: username });
      var user = filtered.length ? filtered[0] : null;
      deferred.resolve(user);
      return deferred.promise;
    }

    function Create(user) {
      var deferred = $q.defer();

      // simulate api call with $timeout
      $timeout(function () {
        GetByUsername(user.username)
          .then(function (duplicateUser) {
            if (duplicateUser !== null) {
              deferred.resolve({ success: false, message: 'Username "' + user.username + '" is already taken' });
            } else {
              var users = getUsers();

              // assign id
              var lastUser = users[users.length - 1] || { id: 0 };
              user.id = lastUser.id + 1;

              // save to local storage
              users.push(user);
              setUsers(users);

              deferred.resolve({ success: true });
            }
          });
      }, 1000);

      return deferred.promise;
    }

    // private functions

    function getUsers() {
      if(!localStorage.users){
        localStorage.users = JSON.stringify([]);
      }

      return JSON.parse(localStorage.users);
    }

    function setUsers(users) {
      localStorage.users = JSON.stringify(users);
    }
  }
