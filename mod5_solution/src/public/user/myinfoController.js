(function () {
    'use strict';

    angular.module('public')
    .controller('MyinfoController', MyinfoController);

    MyinfoController.$inject = ['UserService'];

    function MyinfoController(UserService) {
        var myinfoCtrl = this;
        var user = UserService.getUser()[0];
        if(user != undefined) {
            var user = UserService.getUser()[0];
            myinfoCtrl.userName = user.firstName;
            myinfoCtrl.lastName = user.lastName;
            myinfoCtrl.email = user.email;
            myinfoCtrl.phone = user.phone;
            myinfoCtrl.favDish = user.favMenu;
            myinfoCtrl.completed = true;
        } else {
            myinfoCtrl.completed = false;
        }
    }

})();