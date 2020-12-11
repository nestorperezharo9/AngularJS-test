(function () {
    'use strict';

    angular.module('public')
    .controller('SignupController', SignupController);

    SignupController.$inject = ['UserService'];

    function SignupController(UserService) {
        var signupCtrl = this;
        signupCtrl.form = function (completed) {
            if(!signupCtrl.user) {
                signupCtrl.user = {};
            }
            UserService.getFavMenu(signupCtrl.user.favMenu)
                .then(function (result) {
                    signupCtrl.error = false;
                    UserService.setUser(signupCtrl.user);
                    if(result != null) {
                        signupCtrl.hasFavDish = true;
                    } else {
                        signupCtrl.hasFavDish = false;
                    }
                }).catch(function (e) {
                    signupCtrl.valid = false;
                    signupCtrl.error = true;
                    signupCtrl.completed = false;
                });
                
            signupCtrl.completed = formCompleted();
        };

        const formCompleted = () => {
            if(signupCtrl.user.firstName == undefined || signupCtrl.user.lastName == undefined || signupCtrl.user.phone == undefined || signupCtrl.user.email == undefined || signupCtrl.hasFavDish == false) {
                return false;
            } else {
                return true;
            }
        }
    }

})();