import React from "react";
import {makeStyles} from '@material-ui/core';
import {Link} from 'react-router-dom';


const useStyles = makeStyles(theme=>({
    root: {
        maxWidth: '80%',
        height: theme.spacing(50),
        backgroundColor: '#eee',
        margin: '100px auto',
        padding: '2rem',
        borderRadius: '6px',
        boxShadow: '5px 5px 5px 10px 5px rgba(0, 0, 0, 0.7)'
    }
}));

const Products = ()=>{
    const classes = useStyles();
    return (
    <div className={classes.root}>
        <div>
            Products coming soon...
        </div>
        <div>
            <Link to="/users">Go Back</Link>
        </div>
    </div>
    );
};


export default Products;