import { Component, signal, computed, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Recipe } from '../../models/recipe.model';
import { RECIPES_DATA } from '../../data/recipes.data';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card';

@Component({
  selector: 'app-recipe-detail',
  imports: [RouterLink, RecipeCardComponent],
  templateUrl: './recipe-detail.html',
})
export class RecipeDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);

  recipe = signal<Recipe | null>(null);

  moreRecipes = computed(() =>
    RECIPES_DATA.filter(r => r.slug !== this.recipe()?.slug).slice(0, 3)
  );

  ngOnInit(): void {
    const slug = this.route.snapshot.params['slug'];
    const found = RECIPES_DATA.find(r => r.slug === slug) ?? null;
    this.recipe.set(found);
  }
}
