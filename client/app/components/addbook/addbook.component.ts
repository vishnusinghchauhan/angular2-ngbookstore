import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params  } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  moduleId : module.id,
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  providers: [BookService]
})
export class AddbookComponent implements OnInit {
	book: book;
	editMode: boolean = false;
	
    constructor(private bookService: BookService,private activatedRoute: ActivatedRoute,private router: Router){
        this.book = {
			title: ""; 
			author: ""; 
			publisher: ""; 
			price: ""; 
			category: ""; 
			description: ""; 
			cover: ""; 
		};	
    }
	
	
	 ngOnInit() {
		this.activatedRoute.params.subscribe((params: Params) => {
			let bookId = params['bookId'];		
			if(bookId) {
				 this.editMode = true;
				 this.bookService.getBookById(bookId).subscribe(book => {
					this.book = book;
				});
			 }			
		  });
	  }
	
	
	public addBook( f: User , isValid: boolean ) {
			if(this.editMode){
				this.bookService.updateBook(this.book).subscribe(result => {
					if(result.success) {
					  alert(result.message);
					  this.router.navigate(["/home/books"]);
					}
				  });
			}else{
				 this.bookService.addNewBook(f).subscribe(res => {
						if(res.success) {
						  alert(res.message);
						  this.router.navigate(["/home/books"]);
						} else {
						  alert(res.message);
						}
				 }); 
			}
		   
	}	
}


// user.interface.ts
export interface book {
    title: string; // text
    author: string; // text
    publisher: string; // text
    price: string; // text
    category: string; // text
    description: string; // text
    cover: string; // text
}