import { Component, signal, computed, effect, HostListener } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { RECIPES_DATA } from '../../data/recipes.data';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card';

@Component({
  selector: 'app-recipes',
  imports: [RecipeCardComponent],
  templateUrl: './recipes.html',
})
export class RecipesComponent {
  // --- State signals ---
  readonly recipes = signal<Recipe[]>(RECIPES_DATA);
  searchQuery = signal('');
  maxPrepTime = signal<number | null>(null);
  maxCookTime = signal<number | null>(null);
  showPrepDropdown = signal(false);
  showCookDropdown = signal(false);

  // --- Filter options ---
  readonly prepOptions = [0, 5, 10];
  readonly cookOptions = [0, 5, 10, 15, 20];

  // --- Derived state via computed() ---
  filteredRecipes = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const maxPrep = this.maxPrepTime();
    const maxCook = this.maxCookTime();

    return this.recipes().filter(recipe => {
      const matchesSearch =
        !query ||
        recipe.title.toLowerCase().includes(query) ||
        recipe.ingredients.some(i => i.toLowerCase().includes(query));

      const matchesPrep = maxPrep === null || recipe.prepMinutes <= maxPrep;
      const matchesCook = maxCook === null || recipe.cookMinutes <= maxCook;

      return matchesSearch && matchesPrep && matchesCook;
    });
  });

  filteredCount = computed(() => this.filteredRecipes().length);

  // --- Effect for reactive logging ---
  constructor() {
    effect(() => {
      const query = this.searchQuery();
      const prep = this.maxPrepTime();
      const cook = this.maxCookTime();
      const count = this.filteredCount();
      console.log(
        `[RecipeFinder] query="${query}" prep≤${prep ?? '—'} cook≤${cook ?? '—'} → ${count} result(s)`
      );
    });
  }

  // --- Actions ---
  onSearch(event: Event): void {
    this.searchQuery.set((event.target as HTMLInputElement).value);
  }

  selectPrepTime(minutes: number): void {
    this.maxPrepTime.set(minutes);
    this.showPrepDropdown.set(false);
  }

  clearPrepTime(): void {
    this.maxPrepTime.set(null);
    this.showPrepDropdown.set(false);
  }

  selectCookTime(minutes: number): void {
    this.maxCookTime.set(minutes);
    this.showCookDropdown.set(false);
  }

  clearCookTime(): void {
    this.maxCookTime.set(null);
    this.showCookDropdown.set(false);
  }

  togglePrepDropdown(event: Event): void {
    event.stopPropagation();
    this.showPrepDropdown.update(v => !v);
    this.showCookDropdown.set(false);
  }

  toggleCookDropdown(event: Event): void {
    event.stopPropagation();
    this.showCookDropdown.update(v => !v);
    this.showPrepDropdown.set(false);
  }

  @HostListener('document:click')
  closeDropdowns(): void {
    this.showPrepDropdown.set(false);
    this.showCookDropdown.set(false);
  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }
}
