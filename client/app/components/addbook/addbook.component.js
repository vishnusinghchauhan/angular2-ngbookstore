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
var AddbookComponent = /** @class */ (function () {
    function AddbookComponent(bookService, activatedRoute, router) {
        this.bookService = bookService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.editMode = false;
        this.book = {
            title: "",
            author: "",
            publisher: "",
            price: "",
            category: "",
            description: "",
            cover: ""
        };
    }
    AddbookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            var bookId = params['bookId'];
            if (bookId) {
                _this.editMode = true;
                _this.bookService.getBookById(bookId).subscribe(function (book) {
                    _this.book = book;
                });
            }
        });
    };
    AddbookComponent.prototype.addBook = function (f, isValid) {
        var _this = this;
        if (this.editMode) {
            this.bookService.updateBook(this.book).subscribe(function (result) {
                if (result.success) {
                    alert(result.message);
                    _this.router.navigate(["/home/books"]);
                }
            });
        }
        else {
            this.bookService.addNewBook(f).subscribe(function (res) {
                if (res.success) {
                    alert(res.message);
                    _this.router.navigate(["/home/books"]);
                }
                else {
                    alert(res.message);
                }
            });
        }
    };
    AddbookComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-addbook',
            templateUrl: './addbook.component.html',
            providers: [book_service_1.BookService]
        }),
        __metadata("design:paramtypes", [book_service_1.BookService, router_1.ActivatedRoute, router_1.Router])
    ], AddbookComponent);
    return AddbookComponent;
}());
exports.AddbookComponent = AddbookComponent;
//# sourceMappingURL=addbook.component.js.map