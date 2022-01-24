import React from "react";
import { TextField } from "@material-ui/core";

const Input = (props)=>{
    const {name, label, value, error=null, onChange, ...other} = props;
    return (
        <TextField
        {...(error && {error: true, helperText: error})}
        variant="outlined" name={name} label={label} value={value} onChange={onChange} {...other}/>
    );
};

export default Input;