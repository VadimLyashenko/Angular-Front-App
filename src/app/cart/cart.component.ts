import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

import { Cart } from '../data/cart';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  animations: [
  	trigger('flyOut',[
  		transition('* => void', [
  				animate(250, style({ height: 0, opacity: 0.2, transform: 'scale(0.6)' }))
  			])
  	]),
    trigger('flyIn',[
      transition('void => *', [
          animate(300, keyframes([
            style({opacity: 0, transform: 'scale(0.8)', offset: 0}),
            style({opacity: 0.5, transform: 'scale(0.9)', offset: 0.5}),
            style({opacity: 1, transform: 'scale(1.0)', offset: 1.0})
          ]))
        ])
    ])
  ]
})
export class CartComponent implements OnInit {

	cart: Cart[];
  allcost: number = this.cartService.GetAllCost();

  constructor(private cartService: CartService) { }

  ngOnInit() {
  	this.getCart();
  }

  getCart(): void {
  	this.cartService.getCart().subscribe(cart => this.cart = cart);
  }

  delCart(item): void{
  	this.cartService.delCart(item);
    this.allcost = this.cartService.GetAllCost();
  }

  onMinusCart(item): void {
    this.cartService.onMinusCart(item);
    this.allcost = this.cartService.GetAllCost();
  }

  onPlusCart(item): void {
    this.cartService.onPlusCart(item);
    this.allcost = this.cartService.GetAllCost();
  }

  updateInput(value, item): void{
    this.cartService.updateCount(value, item);
    this.allcost = this.cartService.GetAllCost();
  }

}
