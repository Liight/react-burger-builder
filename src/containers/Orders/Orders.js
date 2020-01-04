import React, { Component } from 'react'
import { connect } from 'react-redux';
import './Orders.css';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

// Material UI
import { withStyles } from "@material-ui/styles";
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const styles = () => ({
    container: {
        backgroundColor: "#fff",
        height: "100%",
        width: "100%",
        padding: 5,
        marginTop: 0,
        border: "1 px solid #f5f5f5",
    },
    typography: {
        textAlign: "center",
    }
});

class Orders extends Component {

    componentDidMount () {
        this.props.onFetchOrders(this.props.token, this.props.userId);
    }

    render () {
        let orders = <Spinner />;
        const { classes } = this.props;
        if(!this.props.loading){
            orders = (
                this.props.orders.map(order => (
                    <Order 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}/>
                )   )
            );
        }
        return (
            <div className="ordersContainer">
            <Container className={classes.container}>
                    <Typography className={classes.typography} variant="h4">Your previous burger orders</Typography>
                {orders}
            </Container>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
    };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios)));