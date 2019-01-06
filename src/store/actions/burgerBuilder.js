import * as actionTypes from './actionTypes';

// importing axios like this returns the axios object with a baseURL property preset as custom
import axios from '../../axios-orders';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
};

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
};

// takes ingredients and returns a javascript object with key: value pairs
// type is required and is set
// ingredients is set as the passed in argument 
export const setIngredients = ( ingredients ) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
};

// Action to dispatch by initIngreients method (below) 
// when fetching the ingredients from the firebase server (using axios) fails
export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
};

// can use 'dispatch' to dispatch actions provided by redux-thunk
// redux-thunk allows us to execute async code with action creators
export const initIngredients = () => {
    return dispatch => {
        axios.get(axios.baseURL + '/ingredients.json')
            .then(response => {
                dispatch(setIngredients(response.data));
            })
            .catch(error => {
                dispatch(fetchIngredientsFailed());
            });
    }
};