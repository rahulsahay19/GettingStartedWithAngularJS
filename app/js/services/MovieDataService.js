/**
 * Created by Rahul_Sahay on 7/12/2015.
 */

'use strict';

moviesApp.factory('movieDataService', function ($resource) {
  var res = $resource('/data/shows/:id',{id:'@id'});
    return {
        getshows: function () {
           return res.get({id:'1stMovie'});
        },
      save:function(show){
        //Temporary way
        //You can have one function which will return highest id from the disk
        //But, for demo this is ok.
        show.id=2;
        return res.save(show);
      },
      getshow:function(id){
        return res.get({id:id});
      }
    };
});