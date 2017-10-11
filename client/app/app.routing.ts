import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent }  from './components/home/home.component';
import { AboutComponent }  from './components/about/about.component';
import { BooklistComponent }  from './components/booklist/booklist.component';
import { AddbookComponent } from './components/addbook/addbook.component';
import { BooksComponent } from './components/books/books.component';
import { BookComponent } from './components/book/book.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { 
		path: '',
		pathMatch: "full",
		redirectTo: "home"
   },
  {
    path: 'home',
    component: HomeComponent,
    children: [
	   {  path: '',      component: BooklistComponent },
	   {  path: 'about', component: AboutComponent },
	   {  path: 'book', component: AddbookComponent },
	   {  path: 'book/:bookId', component: AddbookComponent },
	   {  path: 'bookdetail/:bookId', component: BookComponent },
	   {  path: 'books', component: BooksComponent },
	   {  path: 'cart', component: CartComponent },
    ]
  }
  
     
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);