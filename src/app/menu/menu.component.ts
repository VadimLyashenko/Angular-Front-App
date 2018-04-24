import { Component, OnInit } from '@angular/core';

import { Category } from '../data/category';
import { Cart } from '../data/cart';
import { CategoryService } from '../service/category.service';
import { CartService } from '../service/cart.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
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
  	this.cartService.addCarties(item);
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
