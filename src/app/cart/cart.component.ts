import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { Cart } from '../data/cart';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  animations: [
  	trigger('flyOut',[
  		state('in', style({ transform: 'transtaleX(0)' })),
  		transition('* => void', [
  				animate(300, style({ height: 0, opacity: 0.2, transform: 'scale(0.4)' }))
  			])
  	])
  ]
})
export class CartComponent implements OnInit {

	cart: Cart[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
  	this.getCart();
  }

  getCart(): void {
  	this.cartService.getCart().subscribe(cart => this.cart = cart);
  }

  delCart(item): void{
  	this.cartService.delCart(item);
  }

}
