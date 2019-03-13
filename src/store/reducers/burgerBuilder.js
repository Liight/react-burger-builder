import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

// note setting ingredients to null will result in an error on the order summary page if navigated to without ingredients
// this error is handled by rerirecting the user if ingredients are null
const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
};

// Set ingredient prices here in the reducer
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

const addIngredient = (state, action) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient)
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true
    };
    return updateObject(state, updatedState);
};


const removeIngredient = (state, action) => {
    const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 };
    const updatedIngs = updateObject(state.ingredients, updatedIng)
    const updatedSt = {
        ingredients: updatedIngs,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
        building: true
    };
    return updateObject(state, updatedSt);
};

// sets the ingredient order manually as firebase db has sorted them alphabetically
// drawback is now we have now hardcoded out set of ingredients and must support this hardcoding till a more dynamic approach is implemented
const setIngredients = (state, action) => {
    return updateObject(state, { 
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat
    },
        totalPrice: 4,
        error: false,
        building: false
    });
};

const fetchIngredientsFailed = (state, action) => {
    return updateObject(state, {error: true});
};

const reducer = (state = initialState, action) => {
    // returns a new version of the state with an updated ingredient (immutably)
    // also updates the total price of the burger

    // Note: The VS Code IDE does nto recognise the unreachable code in the switch statement
    // because of this the REMOVE_INGREDIENT have been short-names to make them unique
    switch (action.type){
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action);
        default: return state;
    }
};

export default reducer;