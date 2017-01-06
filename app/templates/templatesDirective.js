(function () {
    'use strict';

    angular.module('myApp')
    
    
    
    
        /**********************************************************************
        * Header Directive contains the HTML for the page header used on each
        * page of FooBar
        ***********************************************************************/
        .directive('header', function () {
            return {
                templateUrl: 'app/templates/header/header.html'
            };
        })
    
       
       
    
    
        ;
}());
