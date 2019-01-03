import * as actionTypes from './actions';

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 4
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
    
    default:
        return state;
    }
};

export default reducer;