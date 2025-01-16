import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Recipe} from '../../shared/models/recipe';

//const baseUrl = 'http://localhost:8080/api/v1/recipes';
const baseUrl = 'assets/data/recipes.json';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(baseUrl);
  }
}
