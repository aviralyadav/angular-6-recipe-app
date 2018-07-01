import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs/Subject";

export class ShoppingListService {
    ingredientChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[]  = [
        new Ingredient('Apples', 5),
        new Ingredient('Grapes', 10)
      ];
    
    getIngredients () {
        return this.ingredients.slice();
    }

    getIngredient (index: number) {
        return this.ingredients[index];
    }

    addIngredients (ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    addIngredientsToShopping (ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    updateIngredients (index: number, newIngredients: Ingredient) {
        this.ingredients[index] = newIngredients;
        this.ingredientChanged.next(this.ingredients.slice());
    }

    onDeleteItem (index) {
        this.ingredients.splice(index, 1);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}