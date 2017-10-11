"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GlobalService = /** @class */ (function () {
    function GlobalService() {
        this.shoppingCart = [];
        this.cartView = [];
    }
    GlobalService.prototype.getCart = function () {
        var test = { test: "thing", test2: "thing2", test3: [0, 2, 44] };
        localStorage.setItem("test", JSON.stringify(test));
        var test2 = localStorage.getItem("test");
        test = JSON.parse(test2); //var test is now re-loaded!
        console.log(test);
        return this.shoppingCart;
    };
    GlobalService.prototype.addToCart = function (item) {
        if (this.shoppingCart.length == 0) {
            this.prependItemToCart(item);
        }
        else {
            var itemExists = this.checkItemExists(item);
            if (itemExists) {
                for (var a = 0; a < this.shoppingCart.length; a++) {
                    if (this.shoppingCart[a].title == item.title) {
                        this.shoppingCart[a].quantity += 1;
                        this.shoppingCart[a].total += item.price;
                    }
                }
            }
            else {
                this.prependItemToCart(item);
            }
        }
    };
    GlobalService.prototype.checkItemExists = function (item) {
        for (var a = 0; a < this.shoppingCart.length; a++) {
            if (this.shoppingCart[a].title == item.title) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    GlobalService.prototype.prependItemToCart = function (item) {
        var newItem = {
            title: item.title,
            quantity: 1,
            total: item.price
        };
        this.shoppingCart.unshift(newItem);
    };
    GlobalService.prototype.removeItemFromCart = function (item) {
        for (var index = 0; index < this.shoppingCart.length; index++) {
            var cartItem = this.shoppingCart[index];
            if (cartItem.title == item.title) {
                if (cartItem.quantity > 1) {
                    cartItem.quantity -= 1;
                    cartItem.total -= item.prce;
                }
                else {
                    this.shoppingCart.splice(index, 1);
                }
            }
        }
    };
    GlobalService.prototype.emptyCart = function () {
        this.shoppingCart = [];
    };
    GlobalService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], GlobalService);
    return GlobalService;
}());
exports.GlobalService = GlobalService;
//# sourceMappingURL=global.service.js.map