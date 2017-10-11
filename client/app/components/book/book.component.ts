import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { BookService } from '../../services/book.service';
import { GlobalService } from '../../services/global.service';



@Component({
 moduleId : module.id,
  selector: 'app-book',
  templateUrl: './book.component.html',
  providers: [BookService, GlobalService]
})
export class BookComponent implements OnInit {
	bookService;
	globalService;
	book;
	bookId;
	

  constructor(private bookService: BookService,private activatedRoute: ActivatedRoute,private globalService: GlobalService) {
  	this.bookService = bookService;
  	this.globalService = globalService;
  }
	
 ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        let bookId = params['bookId'];
		//console.log(bookId);
        this.bookService.getBookById(bookId).subscribe(book => {
  			this.book = book;
  			//console.log(book);
  		});
      });
  }
  
   addToCart() {
    this.globalService.addToCart(this.book);
    alert("Successfully added");
  }

}
