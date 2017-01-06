'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}])


.directive("openExample", ['$location', function($location){
    return function(scope, element, attrs){
        element.bind("click", function(){
            if($("#"+attrs.openExample).css('display') == "none") {
                $("#"+attrs.openExample).show();
                $("#"+attrs.openExample).animate({
                    opacity: '1',
                    height: '175px'
                });
                /* $("#"+attrs.openExample+"-wrapper").animate({
                    width: '500px',
                    height: "300px"
                });*/
            }else {
                
                $("#"+attrs.openExample).animate({
                    opacity: '.2',
                    height: '10px'
                });

                
                setTimeout(function() {
                    $("#"+attrs.openExample).hide();
                },300);
                
            }
            

        });
    };
}]);