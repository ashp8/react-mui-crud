import React from 'react';
import { AppBar, Toolbar, CssBaseline, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
  navlinks: {
    display: "flex",
  },
 logo: {
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(4),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}), {name: "app"});


const Navbar = (props)=>{
    const classes = useStyles();
    return (
        <AppBar position="static" style={{backgroundColor: "orange"}}> 
            <CssBaseline />
            <Toolbar>
                <Typography variant="h5" className={classes.logo}>
                    Navbar
                </Typography>
                <div className={classes.navlinks}>
                    <Link to="/users" className={classes.link}>
                        Users
                    </Link>
                    <Link to="/products" className={classes.link}>
                        Products 
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;