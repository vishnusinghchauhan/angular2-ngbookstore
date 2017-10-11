"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var book_service_1 = require("./services/book.service");
var global_service_1 = require("./services/global.service");
var app_component_1 = require("./app.component");
var home_component_1 = require("./components/home/home.component");
var navbar_component_1 = require("./components/navbar/navbar.component");
var footer_component_1 = require("./components/footer/footer.component");
var about_component_1 = require("./components/about/about.component");
var booklist_component_1 = require("./components/booklist/booklist.component");
var addbook_component_1 = require("./components/addbook/addbook.component");
var books_component_1 = require("./components/books/books.component");
var book_component_1 = require("./components/book/book.component");
var cart_component_1 = require("./components/cart/cart.component");
var app_routing_1 = require("./app.routing");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routing_1.routing, http_1.HttpModule, forms_1.FormsModule],
            declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, navbar_component_1.NavbarComponent, footer_component_1.FooterComponent, about_component_1.AboutComponent, booklist_component_1.BooklistComponent, addbook_component_1.AddbookComponent, books_component_1.BooksComponent, book_component_1.BookComponent, cart_component_1.CartComponent],
            providers: [book_service_1.BookService, global_service_1.GlobalService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map