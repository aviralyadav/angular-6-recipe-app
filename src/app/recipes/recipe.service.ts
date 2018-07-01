import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Recipe } from "./recipe-list/recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    constructor (private slService: ShoppingListService) {}
    
    recipeChanged = new Subject<Recipe[]>();
    recipeSelected = new EventEmitter<Recipe>();
       
    private recipes: Recipe[] = [
        new Recipe(
            'This is new Recipe', 
            'This is very good recipe', 'http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg',
            [ new Ingredient('Meat', 5), new Ingredient('French Fries', 20) ]
    ),
        new Recipe(
            'Another new Recipe', 
            'This is very hot recipe', 'http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg',
            [ new Ingredient('Buns', 2), new Ingredient('French Tikki', 12) ]
        )
      ];

    getRecipes () {
        return this.recipes.slice();
    }

    addGredientsToShppingList (ingredients) {
        this.slService.addIngredientsToShopping(ingredients);
    }

    getRecipeById (index: number ) {
        return this.recipes[index];
    }

    getRecipe (id: number) {
        return this.recipes[id];
    }
    
    addRecipe (recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe (index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe (id: number) {
        this.recipes.splice(id, 1);
        this.recipeChanged.next(this.recipes.slice());
    }
}
