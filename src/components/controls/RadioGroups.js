import React from "react";
import { RadioGroup, FormControlLabel, Radio, FormControl, FormLabel } from "@material-ui/core";

const RadioGroups = (props) =>{

    const {name, label, value, onChange, items} = props;

    return (

        <FormControl>
            <FormLabel>
            {label} 
            </FormLabel>
            <RadioGroup row={true} name={name} value={value} onChange={onChange}>
                {items.map((item)=>(
                <FormControlLabel key={item.id} value={item.id} control={<Radio />} label={item.title}/>
                ))}
            </RadioGroup>
            
        </FormControl>
        
        
    );
};

export default RadioGroups;