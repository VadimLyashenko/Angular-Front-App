import { Component, OnInit } from '@angular/core';

class Category {
	title: string;
	positions: Position[];
}

class Position {
	title: string;
	cost: string;
	desc: string;
	weight: string;
	img: string;
	count: number; 
}

class UserCart {
	img: string;
	title: string;
	cost: string;
	count: number;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
	
	sel_category: any;
	cart: UserCart[] = [];
	// = [{
	 // img: "",
	 // title: "",
	 // cost: "",
	 // count: 0
	// }];

	categories: Category[] = [
  { title: 'Первые блюда', 
  	positions:  [ 
  		{ 
  			title	 : "Томатный суп",
  			cost 	 : "300р", 
  			desc 	 : "ингридиент-1, ингиеыыснт-2, ингридиент-3",
				weight : "300г",
				img		 : "assets/img/tomato-soup.png",
				count	 : 1
			},
			{ 
  			title	 : "Череп суп",
  			cost 	 : "500р", 
  			desc 	 : "мясо0, ууууунгридиент-3",
				weight : "567г",
				img		 : "assets/img/tomato-soup.png",
				count	 : 1
			}
		]
	},
	{ title: 'Вторые блюда', 
  	positions:  [ 
  		{ 
  			title	 : "Каша",
  			cost 	 : "545р", 
  			desc 	 : "ингридиент-5, ингиеыыснт-6, ингридиент-7",
				weight : "300г",
				img		 : "assets/img/salat.jpg",
				count	 : 1
			},
			{ 
  			title	 : "ФЫВАП",
  			cost 	 : "3238р", 
  			desc 	 : "йцукенгоримсывамс, вмв",
				weight : "4534г",
				img		 : "assets/img/meet.jpg",
				count	 : 1
			}
		]
	}
  ];
  
  constructor() { }

  ngOnInit() {
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

  inCart(item): void {
 		this.cart.push({img: item.img, title: item.title, cost: item.cost, count: item.count });
 	}

}
