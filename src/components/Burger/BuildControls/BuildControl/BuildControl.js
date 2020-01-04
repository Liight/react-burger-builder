import React from 'react';
import customStyles from './BuildControl.css';

// Material UI
import { withStyles } from "@material-ui/styles";
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';

const styles = () => ({
    typography: {
        fontSize: "1.4em"
    },
    button: {
    }
});

const buildControl = (props) => (
    <div className={customStyles.BuildControl}>
        <div className={customStyles.Label}><Typography className={props.classes.typography}>{props.label}</Typography></div>
        <Button 
            className={[customStyles.Less]} 
            onClick={props.removed} 
            disabled={props.disabled}
            aria-label="less"><Typography className={props.classes.typography}>Less</Typography></Button>
        <Button 
            className={[customStyles.More]} 
            onClick={props.added}
                aria-label="more"><Typography className={props.classes.typography}>More</Typography></Button>
    </div>
);

export default withStyles(styles)(buildControl);
