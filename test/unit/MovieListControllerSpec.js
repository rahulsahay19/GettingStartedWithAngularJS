'use strict';

describe('MovieController', function() {
  var scope,$controllerConstructor,mockMoviesData;

  //Inject the module
  beforeEach(module("moviesApp"));
  //Inject the controller dependency here
  beforeEach(inject(function($controller,$rootScope){
    scope=$rootScope.$new();
    mockMoviesData=sinon.stub({getshows:function(){}});
    $controllerConstructor=$controller;

  }));
  //Setting the rule here
  it('should set the scope.show', function () {
    //fake movies object
    var mockMovies={};

    mockMoviesData.getshows.returns(mockMovies);
    var ctrl = $controllerConstructor("MovieController",{$scope:scope,movieDataService:mockMoviesData});
    //setting expectation here
    expect(scope.show).toBe(mockMovies);
  })
})