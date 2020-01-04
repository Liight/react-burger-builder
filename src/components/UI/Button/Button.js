import React from 'react';
import customStyles from './Button.css';

// Material UI
import { withStyles } from "@material-ui/styles";
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const styles = () => ({
    typography: {
        fontSize: "1.6em"
    },
    button: {
        backgroundColor: "inherit",
        width: "250px",
        textAlign: "center"
    }
});

const button = (props) => (
    <Button
        variant="contained"
        disabled={props.disabled}
        className={[customStyles.Button, customStyles[props.btnType], props.classes.button].join(' ')}
        onClick={props.clicked}><Typography className={props.classes.typography}>{props.children}</Typography></Button>
);

export default withStyles(styles)(button);