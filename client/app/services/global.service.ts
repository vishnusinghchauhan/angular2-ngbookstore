import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

	shoppingCart: any = [];
	cartView: any = [];

	constructor() { }

 
	getCart() {
		
​var test = { test: "thing", test2: "thing2", test3: [0, 2, 44] }​​​​​​​;
localStorage.setItem("test", JSON.stringify(test));
var test2 = localStorage.getItem("test");
test = JSON.parse(test2); //var test is now re-loaded!



	  console.log(test);
	  return this.shoppingCart;
	}

	addToCart(item) {
		if(this.shoppingCart.length == 0) {
			this.prependItemToCart(item);
		} else {
			let itemExists = this.checkItemExists(item);
			if(itemExists) {
				for(var a = 0; a < this.shoppingCart.length; a++) {
					if(this.shoppingCart[a].title == item.title) {
						this.shoppingCart[a].quantity += 1;
						this.shoppingCart[a].total += item.price;
					}
				}
			} else {
				this.prependItemToCart(item);
			}
		}
	}

	checkItemExists(item) {
		for(var a = 0; a < this.shoppingCart.length; a++) {
			if(this.shoppingCart[a].title == item.title) {
				return true;
			} else {
				return false;
			}
		}
	}

	prependItemToCart(item) {
		let newItem = {
			title: item.title,
			quantity: 1,
			total: item.price
		}
		this.shoppingCart.unshift(newItem);
	}

	removeItemFromCart(item) {
		for(var index = 0; index < this.shoppingCart.length; index++) {
			let cartItem = this.shoppingCart[index];
			if(cartItem.title == item.title) {
				if(cartItem.quantity > 1) {
					cartItem.quantity -= 1;
					cartItem.total -= item.prce;
				} else {
					this.shoppingCart.splice(index, 1);
				}
			}
		}
	}

	emptyCart() {
		this.shoppingCart = [];
	}
  
 
}
