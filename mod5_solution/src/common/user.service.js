(function () {
    'use strict';

    angular.module('common')
    .service('UserService', UserService);

    UserService.$inject = ['$http', 'ApiBasePath'];

    function UserService($http, ApiBasePath) {
        var service = this;
        var user = new Array();
        service.getFavMenu = function (ShortName) {
            if(ShortName) {
                return $http.get(`${ApiBasePath}/menu_items/${ShortName}.json`)
                .then(response => {
                    return response.data;
                })
                .catch( () => {
                    return null;
                }); 
            }
        };
        service.setUser = function (userInfo) {
            user.push(userInfo);
        };

        service.getUser = function () {
            return user;
        };
    }

})()