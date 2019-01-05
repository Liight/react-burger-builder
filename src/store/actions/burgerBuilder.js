import * as actiontypes from './actionTypes';

export const addIngredient = (name) => {
    return {
        type: actiontypes.ADD_INGREDIENT,
        ingredientName: name
    }
};

export const removeIngredient = (name) => {
    return {
        type: actiontypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
};