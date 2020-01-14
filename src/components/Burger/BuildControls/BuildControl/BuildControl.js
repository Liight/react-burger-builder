import React from "react";
import customStyles from "./BuildControl.css";

// Material UI
import { withStyles } from "@material-ui/styles";
import "typeface-roboto";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import Paper from '@material-ui/core/Paper';

const styles = () => ({
  typography: {
    fontSize: "1.4em"
  },
  button: {}
});

const buildControl = props => (
  <div className={customStyles.BuildControl}>
    <div className={customStyles.Label}>
      <Typography className={props.classes.typography}>
        {props.label}
      </Typography>
    </div>
    <div style={{ cursor: "not-allowed" }}>
      {" "}
      {/** Workaround(Inline Override): Material UI button not rendering style property correctly */}
      <Button
        className={customStyles.Less}
        onClick={props.removed}
        disabled={props.disabled}
        aria-label="less"
      >
        <img src="https://img.icons8.com/android/24/000000/minus.png" alt="" />
      </Button>
    </div>
    <div className={customStyles.burgerIngredientCounter}>
      <Typography className={props.classes.typography}>{props.ingredient}</Typography>
    </div>
    <Button
      className={customStyles.More}
      onClick={props.added}
      aria-label="more"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style={{ fill: "#FFFFFF" }}
      >
        <path
          fillRule="evenodd"
          d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
        ></path>
      </svg>
    </Button>
  </div>
);

export default withStyles(styles)(buildControl);
