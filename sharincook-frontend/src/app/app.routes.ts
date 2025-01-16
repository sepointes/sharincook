import { Routes } from '@angular/router';
import {HomeComponent} from './core/components/home/home.component';
import {AboutComponent} from './core/components/about/about.component';
import {RecipesListComponent} from './features/recipes/recipes-list/recipes-list.component';
import {BlogHomepageComponent} from './features/blog/blog-homepage/blog-homepage.component';

export const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'} ,
  {path:'home',component:HomeComponent} ,
  {path:'about' ,component:AboutComponent} ,
  {path:'recipes',component:RecipesListComponent},
  //{path:'recipes/:id',component:RecipesListComponent} ,
  {path:'blog',component:BlogHomepageComponent}
];
