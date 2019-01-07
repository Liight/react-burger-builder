import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

// note setting ingredients to null will result in an error on the order summary page if navigated to without ingredients
// this error is handled by rerirecting the user if ingredients are null
const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
};

// Set ingredient prices here in the reducer
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}



const reducer = (state = initialState, action) => {
    // returns a new version of the state with an updated ingredient (immutably)
    // also updates the total price of the burger

    // Note: The VS Code IDE does nto recognise the unreachable code in the switch statement
    // because of this the REMOVE_INGREDIENT have been short-names to make them unique
    switch (action.type){
        case actionTypes.ADD_INGREDIENT:
        const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
        const updatedIngredients = updateObject(state.ingredients, updatedIngredient)
        const updatedState = {
            ingredients: updatedIngredients,
            totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
        };
        return updateObject(state, updatedState)
    case actionTypes.REMOVE_INGREDIENT:
        const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
        const updatedIngs = updateObject(state.ingredients, updatedIng)
        const updatedSt = {
            ingredients: updatedIngs,
            totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
        };
        return updateObject(state, updatedSt)
    case actionTypes.SET_INGREDIENTS:
        return updateObject(state, { 
            ingredients: {
                salad: action.ingredients.salad,
                bacon: action.ingredients.bacon,
                cheese: action.ingredients.cheese,
                meat: action.ingredients.meat
        },
            totalPrice: 4,
            error: false
        });
        // sets the ingredient order manually as firebase db has sorted them alphabetically
        // drawback is now we have now hardcoded out set of ingredients and must support this hardcoding till a more dynamic approach is implemented
    case actionTypes.FETCH_INGREDIENTS_FAILED:
        return updateObject(state, {error: true});
    default:
        return state;
    }
};

export default reducer;