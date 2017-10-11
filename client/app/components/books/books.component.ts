import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  moduleId : module.id,
  selector: 'app-books',
  templateUrl: './books.component.html',
  providers: [BookService],
})
export class BooksComponent implements OnInit {
	
	bookList;
   
	constructor(private bookService: BookService){ }
	 
	ngOnInit() {
		this.bookService.getAllBooks().subscribe(bookList => {
			this.bookList = bookList;
		});
	}
	
	deleteBook(id) {
		this.bookService.deleteBookById(id).subscribe(result => {
			if(result.success) {
			for(var index = 0; index < this.bookList.length; index++) {
				  if(this.bookList[index]._id == result.id) {
					this.bookList.splice(index, 1);
				  }
				}       
			} else {
				alert("Book not successfully deleted");
			}
		});
	}

}