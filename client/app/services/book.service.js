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
var http_1 = require("@angular/http");
var BookService = /** @class */ (function () {
    function BookService(http) {
        this.http = http;
    }
    Object.defineProperty(BookService, "parameters", {
        get: function () {
            return [http_1.Http];
        },
        enumerable: true,
        configurable: true
    });
    BookService.prototype.getAllBooks = function () {
        var searchUrl = "http://localhost:3000/books";
        return this.http.get(searchUrl).map(function (res) { return res.json(); });
    };
    BookService.prototype.getBookById = function (id) {
        var searchUrl = "http://localhost:3000/bookupdate?bookId=" + id;
        return this.http.get(searchUrl).map(function (res) { return res.json(); });
    };
    BookService.prototype.deleteBookById = function (id) {
        var searchUrl = "http://localhost:3000/book?bookId=" + id;
        return this.http.delete(searchUrl).map(function (res) { return res.json(); });
    };
    BookService.prototype.addNewBook = function (bookData) {
        var searchUrl = "https://localhost:3000/book";
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        var options = new http_1.RequestOptions({
            headers: headers
        });
        return this.http.post("/book", JSON.stringify({ bookData: bookData }), options).map(function (res) { return res.json(); });
    };
    BookService.prototype.updateBook = function (bookData) {
        var searchUrl = "http://localhost:3000/book";
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        var options = new http_1.RequestOptions({
            headers: headers
        });
        console.log(bookData);
        return this.http.put(searchUrl, JSON.stringify({ bookData: bookData }), options).map(function (res) { return res.json(); });
    };
    BookService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [Object])
    ], BookService);
    return BookService;
}());
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map