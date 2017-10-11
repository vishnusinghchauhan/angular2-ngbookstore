import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  moduleId : module.id,
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  providers: [BookService],
})
export class BooklistComponent implements OnInit {
	bookList;
   
	constructor(private bookService: BookService){ }
	
	ngOnInit() {
		this.bookService.getAllBooks().subscribe(bookList => {
			this.bookList = bookList;
		});
	}

}
