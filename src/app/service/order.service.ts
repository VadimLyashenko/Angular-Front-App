import { Injectable } from '@angular/core';

import { Category } from '../data/category';
import { Categories } from "../data/categories";

import { Cart } from '../data/cart';
import { Carties } from "../data/carties";

import { Order } from '../data/order';
import { Orders } from "../data/orderies";


@Injectable()
export class OrderService {

  constructor() { }

  addOrder(name, tel, address, allcost):void {
    if(name && tel && address){
  	  Orders.push({
  	  	title: name,
		  	tel: tel,
		  	address: address,
		  	allcost: allcost,
		  	status: 'open',
		  	cart_positions: Carties.slice() });
  	  
      console.log(Orders);

      Carties.length = 0;
     
      Categories.forEach(function(cat_item){
        cat_item.positions.forEach(function(pos_item){
          pos_item.status = true;
        })
      })
    }
  }

}
