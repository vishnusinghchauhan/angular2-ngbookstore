import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { GlobalService } from '../../services/global.service';


@Component({
	moduleId : module.id,
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	providers: [GlobalService]
})
export class CartComponent implements OnInit {
	
	globalService;
	book;
	bookId;
		
	constructor(private activatedRoute: ActivatedRoute,private globalService: GlobalService) {
		this.globalService = globalService;
	}

	ngOnInit() {		
		this.globalService.getCart();
		/*	this.shoppingCart = this.globalService.getCart();
			for(var a = 0; a < this.shoppingCart.length; a++) {
				this.total += this.shoppingCart[a].total;
			}*/
	}
	emptyCart() {
		this.globalService.getCart();
	//	this.shoppingCart = [];
	}

}
