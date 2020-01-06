import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import { withRouter } from 'react-router-dom';
import { getDimensions } from '../../shared/utility';

class Burger extends React.Component {

    state = {
        buildControlsHeight: 0,
        toolbarHeight: 0,
    }

    componentDidMount() {
        let buildControlsHeight = 0;
        let toolbarHeight = 0;
        if (document.getElementById("buildControls") !== null) {
            buildControlsHeight = document.getElementById("buildControls").getBoundingClientRect().height;
            toolbarHeight = document.getElementById("toolbar").getBoundingClientRect().height;
            this.setState({
                buildControlsHeight: buildControlsHeight,
                toolbarHeight: toolbarHeight,
            })
        }
    }

    render() {
        let windowHeight = getDimensions().height;
        let burgerBuilderWindowHeight = "";
        if (this.state.buildControlsHeight > 0) {
            burgerBuilderWindowHeight = (((windowHeight - this.state.buildControlsHeight) - this.state.toolbarHeight) - 30).toString() + "px";
        }
        // transforming an object of key: value pairs to an array of burger components
        // Returns an array from the this.props object passed into this component
        let transformedIngredients = Object.keys(this.props.ingredients)
            .map((ingredientKey) => {
                // Creates and array as long as the given ingredient key value
                return [...Array(this.props.ingredients[ingredientKey])]
                    .map((_, i) => {
                        // return number of required BurgerIngredient components in place of the old value, keys.
                        return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
                    })
            })
            .reduce((arr, el) => { // The reduce() method executes a reducer function (that you provide) on each member of the array resulting in a single output value.
                return arr.concat(el); // This allows us to count the sub-items in the array //verifi: is this flattening?
            }, []);

        if (transformedIngredients.length === 0) {
            transformedIngredients = <p>Please start adding ingredients</p>
        }
        return (
            <div className={classes.Burger} style={{ height: burgerBuilderWindowHeight }}>
                <BurgerIngredient type="bread-top" />
                {transformedIngredients}
                <BurgerIngredient type="bread-bottom" />
            </div>
        );
    }
}

export default withRouter(Burger);