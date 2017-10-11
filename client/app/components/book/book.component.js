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
var router_1 = require("@angular/router");
var book_service_1 = require("../../services/book.service");
var global_service_1 = require("../../services/global.service");
var BookComponent = /** @class */ (function () {
    function BookComponent(bookService, activatedRoute, globalService) {
        this.bookService = bookService;
        this.activatedRoute = activatedRoute;
        this.globalService = globalService;
        this.bookService = bookService;
        this.globalService = globalService;
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            var bookId = params['bookId'];
            //console.log(bookId);
            _this.bookService.getBookById(bookId).subscribe(function (book) {
                _this.book = book;
                //console.log(book);
            });
        });
    };
    BookComponent.prototype.addToCart = function () {
        this.globalService.addToCart(this.book);
        alert("Successfully added");
    };
    BookComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-book',
            templateUrl: './book.component.html',
            providers: [book_service_1.BookService, global_service_1.GlobalService]
        }),
        __metadata("design:paramtypes", [book_service_1.BookService, router_1.ActivatedRoute, global_service_1.GlobalService])
    ], BookComponent);
    return BookComponent;
}());
exports.BookComponent = BookComponent;
//# sourceMappingURL=book.component.js.map