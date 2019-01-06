import * as actionTypes from '../actions/actionTypes';

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
    switch (action.type){
        case actionTypes.ADD_INGREDIENT:
        return {
            ...state, // no deep clone hence, copying ingredients object below
            ingredients: {
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] + 1
            },
            totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
        }
    case actionTypes.REMOVE_INGREDIENT:
        return {
            ...state, // no deep clone hence, copying ingredients object below
            ingredients: {
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] - 1
            },
            totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
        }
    case actionTypes.SET_INGREDIENTS:
        return {
            ...state, // copies state shallowly
            ingredients: {
                salad: action.ingredients.salad,
                bacon: action.ingredients.bacon,
                cheese: action.ingredients.cheese,
                meat: action.ingredients.meat
            }, // sets the ingredient order manually as firebase db has sorted them alphabetically
            // drawback is now we have now hardcoded out set of ingredients and must support this hardcoding till a more dynamic approach is implemented
            error: false
        };
    case actionTypes.FETCH_INGREDIENTS_FAILED:
        return {
            ...state, // copies state shallowly
            error: true
        };
    default:
        return state;
    }
};

export default reducer;