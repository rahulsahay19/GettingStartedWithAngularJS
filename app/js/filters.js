'use strict';

moviesApp.filter('rupeesFilter',function(){
    return function(rupees){
        switch (rupees){
            case 150:
                return "150 rs";
            case 250:
                return "250 rs";
            case 350:
                return "350 rs";
        }
    }

});
