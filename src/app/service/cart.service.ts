import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Cart } from '../data/cart';
import { Carties } from "../data/carties";

@Injectable()
export class CartService {

  constructor() { }

  getCart(): Observable<Cart[]>{
  	return of(Carties);
  }

  addCarties(item): void{
  	Carties.push({img: item.img, title: item.title, cost: item.cost, count: item.count });
  }

  delCart(item): void{
    let index = Carties.indexOf(item, 0);
  	Carties.splice(index, 1);
  }

}
