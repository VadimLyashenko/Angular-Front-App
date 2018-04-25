import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Category } from '../data/category';
import { Categories } from "../data/categories";

import { Cart } from '../data/cart';
import { Carties } from "../data/carties";

@Injectable()
export class CartService {

  constructor() { }

  getCart(): Observable<Cart[]>{
  	return of(Carties);
  }

  addCarties(item): void{   
    if(item.status && item.count != '' && item.count > 0 && item.count != '0' && Number.isInteger(Number(item.count))){ 
        item.status = false;
  	    Carties.push({id:item.id, img: item.img, title: item.title, cost: item.cost, count: Number(item.count) });
    }
  }

  delCart(item): void{
    Categories.forEach(function(cat_item){
       cat_item.positions.forEach(function(pos_item){
           if(pos_item.id == item.id){
             pos_item.status = true;
           }
        })
    })
    let index = Carties.indexOf(item, 0);
  	Carties.splice(index, 1);
  }

  GetAllCost(): number{
    let allcost: number = 0;
    for(let i = 0; i < Carties.length; i++ ){
      allcost = allcost + Carties[i].cost * Carties[i].count;
    }
    return allcost;
  }

  onMinusCart(item): void {    
    if(item.count >1)
      item.count--;
  }

  onPlusCart(item): void {
    item.count++;
  }

  updateCount(value, item): void{
    if(value > 0 && value != '0' && value != '' && Number.isInteger(Number(value))) {
      item.count = Number(value);
    }
  }

}
