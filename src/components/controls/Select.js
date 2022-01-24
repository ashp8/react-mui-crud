import { FormControl, InputLabel, MenuItem, Select as MuiSelect } from "@material-ui/core";
import React from "react";

const Select = (props)=>{
    const {name, label, value, onChange, option} = props;
    return (
        <FormControl variant="outlined">
            <InputLabel>{label}</InputLabel>
            <MuiSelect name={name} label={label} value={value} onChange={onChange}>
                <MenuItem value="">None</MenuItem>
                {option.map(item=>(<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>))}
            </MuiSelect>

        </FormControl>
    );
};

export default Select;