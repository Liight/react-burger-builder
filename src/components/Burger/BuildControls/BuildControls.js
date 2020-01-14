import React from 'react'
import customStyles from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

// Material UI
import { withStyles } from "@material-ui/styles";
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const styles = () => ({
    typography: {
        fontSize: "1.6em"
    },
    button: {
        backgroundColor: "#A3080C",
        width: "250px",
        color: "#FFFFFF",
    },
    "&:hover": {
        backgroundColor: "#A3080C",
    }
});

const buildControls = (props) => (
    <div id="buildControls" className={customStyles.BuildControls}>
        <div className={customStyles.BuildControlsInner}>
            <Typography className={props.classes.typography}>Current Price: <strong>{props.price.toFixed(2)}</strong></Typography>

            {controls.map((ctrl) => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]} 
                    ingredient={props.ingredients[ctrl.type]}
                    />
            ))}
            <Button
                className={[customStyles.OrderButton, props.classes.button].join(' ')}
                disabled={!props.purchasable}
                onClick={props.ordered}>{props.isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER'}</Button>
        </div>
    </div>
);

export default withStyles(styles)(buildControls);
