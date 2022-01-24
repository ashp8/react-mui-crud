import React from "react";
import { Button as MuiButton, makeStyles } from "@material-ui/core";

const useStyles=makeStyles(theme=>({
    root: {
        minWidth: 0,
        margin: theme.spacing(0.5)
    },
    secondary: {
        backgroundColor: theme.palette.secondary.light,
        '& .MuiButton-label': {
            color: theme.palette.secondary.main,
        }
    },
    primary: {
        backgroundColor: theme.palette.primary.light,
        '& .MuiButton-label': {
            color: theme.palette.primary.main
        }
    }
}));


const ActionButton = (props)=>{
    const {color, onClick, children} = props;
    const classes = useStyles();
    return (
        <MuiButton
            className={`${classes.root} ${classes[color]}`}
            onClick={onClick}
        >
            {children}
        </MuiButton>
    );
};

export default ActionButton;