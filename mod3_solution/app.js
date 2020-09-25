(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItems)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    function FoundItems() {
        var ddo = {
            templateUrl: 'founditems.html',
            scope: {
                founditem: '<',
                onRemove: '&'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'items',
            bindToController: true
        };
        return ddo;
    }

    function FoundItemsDirectiveController () {
        var item = this;
        
        item.list = function () {
            if(item.founditem.length === 0) {
                return true;
            }
            return false;
        };
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var menu = this;

        menu.search = "";

        menu.find = function (searchName) {
            menu.items = MenuSearchService.getMatchedMenuItems(searchName);

            menu.items.then(function (result) {
                menu.products = result;
            });
        };

        menu.removeItem = function (index) {
            menu.products.splice(index, 1);  
        };

    }


    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        var service = this;
        
        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method : "GET",
                url : (ApiBasePath + "/menu_items.json")
            }).then(function (result) {
                let items = result.data.menu_items;
                let itemsfound = [];
                for(let item of items) {
                    if(item.description.includes(searchTerm)) {
                        itemsfound.push(item);
                    }
                }
                return itemsfound;
            });
        };

    }


})();