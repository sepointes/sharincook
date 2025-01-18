import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../../../core/services/recipe-service';
import {Recipe} from '../../../shared/models/recipe';

@Component({
  selector: 'app-recipes-list',
  imports: [],
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.scss'
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [];
  constructor(private recipeService: RecipeService) {



  }

  ngOnInit(): void {
        this.recipeService.getRecipes().subscribe((data: Recipe[]) => {
          this.recipes = data;
        })
    }

}
