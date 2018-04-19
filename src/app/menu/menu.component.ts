import { Component, OnInit } from '@angular/core';

class Category {
	id: number;
	name: string;
}

class Position {
	id: number;
	name: string;
	cost: string;
	desc: string;
	weight: string;
	img: string;
	id_category: number;
}


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

	categories: Category[] = [
  { id: 1, name: 'Первые блюда' },
  { id: 2, name: 'Вторые блюда' },
  { id: 3, name: 'III блюда' }
  ];

  positions: Position[] = [ { id: 1, name: "Томатный суп", cost: "300р", 
  	desc 	 : "ингридиент-1, ингиеыыснт-2, ингридиент-3",
		weight : "300г",
		img		 : "assets/img/tomato-soup.png",
		id_category: 1},
		{ id: 2, name: "Каша", cost: "1500р", 
  	desc 	 : "ингриди2222нт-1, ингиеыыснт-45, ингридиент-3",
		weight : "2000г",
		img		 : "assets/img/tomato-soup.png",
		id_category: 1},
		{ id: 2, name: "Каша", cost: "1500р", 
  	desc 	 : "ингриди2222нт-1, ингиеыыснт-45, ингридиент-3",
		weight : "2000г",
		img		 : "assets/img/tomato-soup.png",
		id_category: 1},
		{ id: 2, name: "Каша", cost: "1500р", 
  	desc 	 : "ингриди2222нт-1, ингиеыыснт-45, ингридиент-3",
		weight : "2000г",
		img		 : "assets/img/tomato-soup.png",
		id_category: 1},
		{ id: 2, name: "Каша", cost: "1500р", 
  	desc 	 : "ингриди2222нт-1, ингиеыыснт-45, ингридиент-3",
		weight : "2000г",
		img		 : "assets/img/tomato-soup.png",
		id_category: 1}
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
