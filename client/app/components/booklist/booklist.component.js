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
var book_service_1 = require("../../services/book.service");
var BooklistComponent = /** @class */ (function () {
    function BooklistComponent(bookService) {
        this.bookService = bookService;
    }
    BooklistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookService.getAllBooks().subscribe(function (bookList) {
            _this.bookList = bookList;
        });
    };
    BooklistComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-booklist',
            templateUrl: './booklist.component.html',
            providers: [book_service_1.BookService],
        }),
        __metadata("design:paramtypes", [book_service_1.BookService])
    ], BooklistComponent);
    return BooklistComponent;
}());
exports.BooklistComponent = BooklistComponent;
//# sourceMappingURL=booklist.component.js.map