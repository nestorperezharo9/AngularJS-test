(function () {
    'use strict';
    
    angular.module('data', [])
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    angular.module('data')
    .config(function () {
        console.log("Data config fired.");
    }). 
    run(function () {
        console.log("Data run fired.");
    });
    
})();