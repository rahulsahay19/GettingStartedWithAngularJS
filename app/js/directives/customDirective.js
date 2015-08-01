/**
 * Created by Rahul_Sahay on 7/31/2015.
 */

'use strict';

moviesApp.directive('customDirective', function () {
  //It Returns directive definition  object
  //Refer more on this here https://docs.angularjs.org/api/ng/directive
  return {
    restrict:'C',
    template:"<input type='text' ng-model='customData' /> Output:- {{customData}} <br>",
    scope:{

    }
  };
})