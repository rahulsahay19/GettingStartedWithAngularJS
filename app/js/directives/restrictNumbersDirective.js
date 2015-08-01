/**
 * Created by Rahul_Sahay on 8/1/2015.
 */

moviesApp.directive('restrictNumbersDirective',function(){
  return{
    restrict:'A',
    link:function(scope,elem){
      elem.on('keydown',function(key){
        if(isNumber(key.keyCode)){
          return false;
        }
        return true;
      })
    }
  }
});

//Function to check if numbers
function isNumber(keyCode) {
  return (event.keyCode >= 48 && event.keyCode <= 57)
    || (event.keyCode >= 96 && event.keyCode <= 105);
}