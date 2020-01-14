import React from 'react'

import customStyles from '../NavigationItems/NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

// Material UI
import { withStyles } from "@material-ui/styles";
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
    typography: {
        fontSize: "1.4em",
    }
});

const navigationItems = ( props ) => (
    <ul className={customStyles.NavigationItems}>
        <NavigationItem link="/" exact><Typography className={props.classes.typography}>Burger Builder</Typography></NavigationItem>
        {props.isAuthenticated ? <NavigationItem link="/orders" ><Typography className={props.classes.typography}>Orders</Typography></NavigationItem> : null}
        { !props.isAuthenticated 
            ? <NavigationItem link="/auth" ><Typography className={props.classes.typography}>Sign Up / Login</Typography></NavigationItem>
            : <NavigationItem link="/logout" ><Typography className={props.classes.typography}>Logout</Typography></NavigationItem>
        }
    </ul>
);

export default withStyles(styles)(navigationItems);