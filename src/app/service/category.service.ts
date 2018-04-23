import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Category } from '../data/category';
import { Categories } from "../data/categories";

@Injectable()
export class CategoryService {

  constructor() { }

  getCategories(): Observable<Category[]> {
  	return of(Categories);
  }

}
