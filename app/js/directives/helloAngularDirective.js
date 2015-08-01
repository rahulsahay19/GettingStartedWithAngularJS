/**
 * Created by Rahul_Sahay on 8/1/2015.
 */

moviesApp.directive('helloAngular',function(){
  return{
    restrict:'E',
    priority:1,
    transclude:true,
    template:"<div><button class='btn btn-success' ng-click='helloAngular()'>Hello Angular</button><div ng-transclude></div></div>",
    controller:function($scope){
      var ngHello = ['Hello Angular'];
      $scope.helloAngular = function(){
        window.alert(ngHello);
      }
      this.addVersions = function (versions) {
        ngHello.push(versions);
      }
    }
  }
})

.directive('spanishVersion',function(){
    return{
      restrict:'A',
      require: '^helloAngular',
      priority:2,
      link:function(scope,elem,attr,controller){
        controller.addVersions('hola Angular');
      }
    }
  })

.directive('frenchVersion',function(){
    return{
      restrict:'A',
      require: '^helloAngular',
      priority:1,
      link:function(scope,elem,attr,controller){
        controller.addVersions('bonjour angulaire');
      }
    }
  });