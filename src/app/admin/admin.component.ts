import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

	positions: any[] = [
		{"id": 1, "name": "Общие настройки"},
		{"id": 2, "name": "Титульная страница"},
		{"id": 3, "name": "Продукция"},
		{"id": 4, "name": "Корзина"},
		{"id": 5, "name": "Контакты"},
		{"id": 6, "name": "Заказы"},
		{"id": 7, "name": "Статистика"}
	]
	
	options: any[] = [
		1,2,3,4,5,6,7,8,9,10
	]

	sliders: any[]= [
		{
			"text_1": "Приветствие",
			"text_2": "Текст_2"
		},
		{
			"text_1": "Приветствие_2",
			"text_2": "Текст_2"
		},
		{
			"text_1": "Приветствие_3",
			"text_2": "Текст_2"
		},
		{
			"text_1": "",
			"text_2": ""
		},
		{
			"text_1": "",
			"text_2": ""
		},
		{
			"text_1": "",
			"text_2": ""
		},
		{
			"text_1": "",
			"text_2": ""
		},
		{
			"text_1": "",
			"text_2": ""
		},
		{
			"text_1": "",
			"text_2": ""
		},
		{
			"text_1": "",
			"text_2": ""
		}
	]

	pos_id: number = 2;

	slide_num: number = 1;

  constructor() { }

  ngOnInit() {
  }

	setPos(id){
		this.pos_id = id;
	}

	setSliders(opt){
		this.slide_num = opt;
	}

}
