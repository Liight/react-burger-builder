import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import { withRouter } from 'react-router-dom';

const burger = (props) => {
    console.log(props);
    // transforming an object of key: value pairs to an array of burger components
    // Returns an array from the props object passed into this component
    let transformedIngredients = Object.keys(props.ingredients)
        .map((ingredientKey)=>{ 
        // Creates and array as long as the given ingredient key value
            return [...Array(props.ingredients[ingredientKey])]
                .map((_, i) => {
                // return number of required BurgerIngredient components in place of the old value, keys.
                    return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
                })
        })
        .reduce((arr, el) => { // The reduce() method executes a reducer function (that you provide) on each member of the array resulting in a single output value.
            return arr.concat(el); // This allows us to count the sub-items in the array //verifi: is this flattening?
        }, []);
        
        if (transformedIngredients.length === 0){
            transformedIngredients = <p>Please start adding ingredients</p>
        }

    console.log(transformedIngredients)

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
        
    );
};

export default withRouter(burger);