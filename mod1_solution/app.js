(function () {
    'use strict';

    angular.module('LunchChecker', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.name = "";
        let items = [];
        $scope.checkItem = function () {
            console.log(items.length);
            items = $scope.name.split(',');
            console.log(items);
            if(items.length > 3) {
                $scope.message = "Too much!";
            } else if(items[0] === "") {
                $scope.message = "Please enter data first";
            } else if(items.length <= 3) {
                $scope.message = "Enjoy!";
            }
        };
    };



})();