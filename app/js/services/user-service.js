/**
 * Created by Rahul_Sahay on 8/14/2015.
 */


moviesApp.factory('UserService', UserService);

UserService.$inject = ['$http'];
function UserService($http) {
  var service = {};

  service.GetById = GetById;
  service.GetByUsername = GetByUsername;
  service.Create = Create;

  return service;


  function GetById(id) {
    return $http.get('/api/users/' + id).then(handleSuccess, handleError('Error getting user by id'));
  }

  function GetByUsername(username) {
    return $http.get('/api/users/' + username).then(handleSuccess, handleError('Error getting user by username'));
  }

  function Create(user) {
    return $http.post('/api/users', user).then(handleSuccess, handleError('Error creating user'));
  }


  // private functions

  function handleSuccess(data) {
    return data;
  }

  function handleError(error) {
    return function () {
      return {success: false, message: error};
    };
  }
}


