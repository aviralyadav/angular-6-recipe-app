import * as ShoppingListActions from "./shopping-list.actions";
import { Ingredient } from "../../shared/ingredient.model";
 
const initial_state = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Grapes', 10)
      ]
}

export function shoppingListReducer (state = initial_state, action: ShoppingListActions.ShoppingListActions) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT : 
            return {
                ...state, 
                ingredients: [...state.ingredients, action.payload]
            }
        default:
            return state;
    }
}