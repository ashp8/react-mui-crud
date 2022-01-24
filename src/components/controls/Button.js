import React from "react";
import { Button as MuiButton } from "@material-ui/core";

const Button = (props)=>{
    const {text, size, color, variant, onClick, ...other} = props;
    return (
        <MuiButton style={{margin: "8px"}} variant={variant || 'contained'} size={size || "large"} color={color || "primary"} {...other} onClick={onClick}>{text}</MuiButton>
    );
};

export default Button;