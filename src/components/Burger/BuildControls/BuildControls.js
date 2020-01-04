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
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
];

const styles = () => ({
    typography: {
        fontSize: "1.6em"
    },
    button: {
        backgroundColor: "#FFC72C",
        width: "250px",
    }
});

const buildControls = (props) => (
    <div className={customStyles.BuildControls}>
        <Typography className={props.classes.typography}>Current Price: <strong>{props.price.toFixed(2)}</strong></Typography>
        {controls.map((ctrl)=>(
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)} 
                disabled={props.disabled[ctrl.type]} />
        ))}
        <Button 
            className={[customStyles.OrderButton, props.classes.button]}
            disabled={!props.purchasable}  
            onClick={props.ordered}>{props.isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER'}</Button>
    </div>
);

export default withStyles(styles)(buildControls);
