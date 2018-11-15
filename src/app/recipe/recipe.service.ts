import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  
 private recipes:Recipe[]=[
    new Recipe('Hamburger',
    'Hamburger (atau seringkali disebut dengan burger) adalah sejenis makanan berupa roti berbentuk bundar yang diiris dua dan ditengahnya diisi dengan patty',
    '../src/app/img/hamburger.jpg',
    [
      new Ingredient('meal', 1),
      new Ingredient('tomato', 2)
    ]),
    new Recipe('Spaghetti',
    'Spageti (nama resmi: Spaghetti ; pengucapan bahasa Italia: [spaˈɡetti]) adalah salah satu jenis pasta yang berbentuk panjang, tipis, silindris, dan padat',
    '../src/app/img/logo.jpg',
    [
      new Ingredient('rice', 1),
      new Ingredient('meal', 3),
      new Ingredient('egg',1)
    ]),
    ];

    getRecipes() {
      return this.recipes.slice();
    }
    addIngredientsShoppingList(ingredients:Ingredient[]) {
      this.slsService.addIngredients(ingredients);
    }

    getRecipe(index:number) {
      return this.recipes[index];
    }
constructor(private slsService: ShoppingListService) { }

}
