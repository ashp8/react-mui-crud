import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
    sideMenu: {
        display: "flex",
        flexDirection: 'column',
        position: 'absolute',
        left: '0',
        width: '12rem',
        height: '100%',
        backgroundColor: '#253053'
    }

});

const SideMenu = ()=>{
    const classes = useStyles();
    return (
        <div className={classes.sideMenu}>
            this is the sidemenu.
        </div>
    );
};

export default SideMenu;