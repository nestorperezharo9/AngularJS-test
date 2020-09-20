(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var tobuy = this;

        tobuy.itemName = "";
        tobuy.item = ShoppingListCheckOffService.getBuyItems();

        tobuy.removeItemBought = function (itemIndex) {
            ShoppingListCheckOffService.removeItem(itemIndex);
        };
        
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;

        bought.item = ShoppingListCheckOffService.getBoughtItems();

    }

    function ShoppingListCheckOffService() {
        var service = this;

        var buyItems = [];
        var boughtItems = [];

        buyItems = [{
            name: "Cookies",
            quantity: 10
        },
        {   name: "Chips",
            quantity: 20
        },
        {   name: "Water",
            quantity: 5
        },
        {   name: "Clipper",
            quantity: 1
        }];

        service.getBuyItems = function () {
            return buyItems;
        };
        
        service.removeItem = function (itemIndex) {
            var item = buyItems.splice(itemIndex, 1);
            boughtItems.push(item[0]);
        };
        
        service.getBoughtItems = function () {
            return boughtItems;
        };

    }

    
})();