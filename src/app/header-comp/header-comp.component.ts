import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header-comp',
  templateUrl: './header-comp.component.html',
  styleUrls: ['./header-comp.component.css']
})
export class HeaderCompComponent implements OnInit {

	title = "Название";
  router: string;
  bg_check: boolean = true;

  constructor(private _router: Router) {}
  
  ngOnInit() {
    this.getRoute();
  }
	
  getRoute(){
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if(event.url == '/'){
          this.router = '';
          this.bg_check = false;
        }
        if(event.url == '/menu'){
          this.router = 'Меню';
          this.bg_check = true;
        } 
        if(event.url == '/cart'){
          this.router = 'Корзина';
          this.bg_check = true;
        }
        if(event.url == '/contacts'){
          this.router = 'Контакты';
          this.bg_check = true;
        }
      }
    })   
  }
}
