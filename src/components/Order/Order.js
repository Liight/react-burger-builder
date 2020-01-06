import React from 'react'

// import classes from './Order.css';

// Material UI
import { withStyles } from "@material-ui/styles";
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

const styles = () => ({
    container: {
        backgroundColor: "#fff",
        height: "",
        width: "100%",
        padding: 0,
        marginTop: 0,
    },
    paper: {
        marginTop: 5,
        marginBot: 5,
        display: "flex",
        padding: 10,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    typography: {
        display: "block",
        lineHeight: 2.0,
        fontSize: "1.4em",
    }
});

const order = (props) => {
    const ingredients = [];
    const { classes } = props;
    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        });
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span
            style={{
                textTransform: 'capitalize',
                display: 'inline block',
                margin: '0 8px 3px 0px',
                // border: '1px solid #ccc',
                padding: '0px'
            }}
            key={ig.name}>{ig.name} ({ig.amount})</span>;
    });

    return (
        <Container className={classes.container}>
            <Paper className={classes.paper}>
                {/* // <div className={classes.Order}> */}
                <Typography className={classes.typography}>
                    Ingredients: {ingredientOutput}
                </Typography>
                <Typography className={classes.typography}>
                    Price: <strong>NZD {Number.parseFloat(props.price).toFixed(2)}</strong>
                </Typography>
                {/* // </div> */}
            </Paper>
        </Container>
    );

};

export default withStyles(styles)(order);

