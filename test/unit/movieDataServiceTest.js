/**
 * Created by Rahul_Sahay on 8/3/2015.
 */

'use strict';

describe('Making AJAX call',function(){

  beforeEach(module('moviesApp'));

  describe('get call',function(){


    it('should return a GET request for /data/shows/1stMovie',inject(function(movieDataService,$httpBackend){
      $httpBackend.when('GET','/data/shows/1stMovie').respond({name:'Jurassic World'});

      var movie = movieDataService.getshows();

      $httpBackend.flush();

      expect(movie.name).toBe('Jurassic World');

    }))

  });
});