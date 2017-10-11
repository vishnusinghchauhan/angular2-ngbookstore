import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

import { BookService } from './services/book.service';
import { GlobalService } from './services/global.service';

import { AppComponent }  from './app.component';

import { HomeComponent }  from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { BooklistComponent } from './components/booklist/booklist.component';
import { AddbookComponent } from './components/addbook/addbook.component';
import { BooksComponent } from './components/books/books.component';
import { BookComponent } from './components/book/book.component';
import { CartComponent } from './components/cart/cart.component';

import { routing }  from './app.routing';

@NgModule({
  imports:      [ BrowserModule, routing, HttpModule, FormsModule ],
  declarations: [ AppComponent, HomeComponent, NavbarComponent, FooterComponent, AboutComponent, BooklistComponent, AddbookComponent, BooksComponent, BookComponent, CartComponent  ],
  providers: [BookService, GlobalService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }