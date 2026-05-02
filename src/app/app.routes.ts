import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { RecipesComponent } from './pages/recipes/recipes';
import { RecipeDetailComponent } from './pages/recipe-detail/recipe-detail';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'recipes/:slug', component: RecipeDetailComponent },
  { path: '**', redirectTo: '' },
];
