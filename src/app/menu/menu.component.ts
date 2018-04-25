import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

import { Category } from '../data/category';
import { Cart } from '../data/cart';
import { CategoryService } from '../service/category.service';
import { CartService } from '../service/cart.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('flyIn',[
      transition('void => *', [
          animate(400, keyframes([
            style({opacity: 0, transform: 'translateX(-35%)', offset: 0}),
            style({opacity: 0.3,transform: 'translateX(-10%)', offset: 0.5}),
            style({opacity: 1,transform: 'translateX(0%)', offset: 1.0})
          ]))
        ])
    ])
  ]
})

export class MenuComponent implements OnInit {
	
	categories: Category[];
	sel_category: any;
	cart: Cart[];

  constructor(private categoryService: CategoryService, private cartService: CartService) { }

  ngOnInit() {
  	this.getCategories();
  }

  getCategories(): void {
  	this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }

  addCarties(item): void {
    // if(item.status){
      // item.status = false;
      this.cartService.addCarties(item);
    // }    
  }

  onSelect(sel_category): void {
 		this.sel_category = sel_category;
	}

	onMinus(item): void {
		if(item.count >1)
 		item.count--;
	}

	onPlus(item): void {
 		item.count++;
	}

  updateInput(value, item): void{
    this.categoryService.updateCount(value, item);
  }

}
