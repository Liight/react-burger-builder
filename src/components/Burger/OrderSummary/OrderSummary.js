import React, { Component } from 'react'

import Aux from '../../../hoc/_Aux/_Aux';
import Button from '../../UI/Button/Button';

// Material UI
import { withStyles } from "@material-ui/styles";
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
    typography: {
        fontSize: "1.4em",
        textAlign: "center"
    }
});

class OrderSummary extends Component {
    render () {
        const { classes } = this.props;
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map((igKey) => {
            return (
                <li key={igKey} style={{listStyleType: "none"}}>
                    <Typography className={classes.typography}><span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}</Typography>
                </li> );
        } );
        return (
            <Aux>
                <h3><Typography className={classes.typography}>Your Order</Typography></h3>
                <Typography className={classes.typography}>A delicious burger with the following ingredients:</Typography>
                <ul style={{marginLeft: 0, paddingLeft: 0}}>
                    {ingredientSummary}
                </ul>
                <Typography className={classes.typography}><strong>Total price: {this.props.price.toFixed(2)}</strong></Typography>
                <Typography className={classes.typography}>Continue to Checkout?</Typography>
                <div style={{width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", paddingTop: "20px"}}>
                    <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                    <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
                </div>
            </Aux>
        )
    }
}

export default withStyles(styles)(OrderSummary);