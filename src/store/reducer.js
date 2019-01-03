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

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.ADD_INGREDIENT:
        // returns a new version of the state with an updated ingredient (immutably)
        return {
            ...state, // no deep clone hence, copying ingredients object below
            ingredients: {
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] + 1
            }
        }
    case actionTypes.REMOVE_INGREDIENT:
        return {
            ...state, // no deep clone hence, copying ingredients object below
            ingredients: {
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] - 1
            }
        }
    
    default:
        return state;
    }
};

export default reducer;