"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var about_component_1 = require("./components/about/about.component");
var booklist_component_1 = require("./components/booklist/booklist.component");
var addbook_component_1 = require("./components/addbook/addbook.component");
var books_component_1 = require("./components/books/books.component");
var book_component_1 = require("./components/book/book.component");
var cart_component_1 = require("./components/cart/cart.component");
var routes = [
    {
        path: '',
        pathMatch: "full",
        redirectTo: "home"
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent,
        children: [
            { path: '', component: booklist_component_1.BooklistComponent },
            { path: 'about', component: about_component_1.AboutComponent },
            { path: 'book', component: addbook_component_1.AddbookComponent },
            { path: 'book/:bookId', component: addbook_component_1.AddbookComponent },
            { path: 'bookdetail/:bookId', component: book_component_1.BookComponent },
            { path: 'books', component: books_component_1.BooksComponent },
            { path: 'cart', component: cart_component_1.CartComponent },
        ]
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map