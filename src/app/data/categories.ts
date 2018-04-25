import { Category } from './category';

export let Categories: Category[] = [
	{ id: 1,
		title: 'Первые блюда', 
		positions:  [ 
			{ 
				id: 1,
				title	 : "Томатный суп",
				cost 	 : 300, 
				desc 	 : "ингридиент-1, ингиеыыснт-2, ингридиент-3",
				weight : "300г",
				img		 : "assets/img/tomato-soup.png",
				count	 : 1,
				status : true
			},
			{ 
				id: 2,
				title	 : "Череп суп",
				cost 	 : 500,
				desc 	 : "мясо0, ууууунгридиент-3",
				weight : "567г",
				img		 : "assets/img/tomato-soup.png",
				count	 : 1,
				status : true
			}
		]
	},
	{ id: 2,
		title: 'Вторые блюда', 
		positions:  [ 
			{ 
				id: 3,
				title	 : "Каша",
				cost 	 : 545, 
				desc 	 : "ингридиент-5, ингиеыыснт-6, ингридиент-7",
				weight : "300г",
				img		 : "assets/img/salat.jpg",
				count	 : 1,
				status : true
			},
			{ 
				id: 4,
				title	 : "ФЫВАП",
				cost 	 : 3238, 
				desc 	 : "йцукенгоримсывамс, вмв",
				weight : "4534г",
				img		 : "assets/img/meet.jpg",
				count	 : 1,
				status : true
			}
		]
	}
];