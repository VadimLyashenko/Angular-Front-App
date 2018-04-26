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

  constructor(private _router: Router) {}
  
  ngOnInit() {
    this.getRoute();
  }
	
  getRoute(){
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {

        if(event.url == '/'){
          this.router = '';
        }

        if(event.url == '/menu'){
          this.router = 'Меню';
        } 

        if(event.url == '/cart'){
          this.router = 'Корзина';
        }

        if(event.url == '/contacts'){
          this.router = 'Контакты';
        }

      }
    })

    
  }

}
