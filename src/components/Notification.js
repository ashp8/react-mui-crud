import React from "react";
import {Snackbar, makeStyles} from '@material-ui/core';
import {Alert} from '@material-ui/lab';


const useStyles = makeStyles(theme=>({
    root: {
        top: theme.spacing(9),
    }
}));

const Notification = (props)=>{
    const classes = useStyles();
    const {notify, setNotify} = props;

    const handleClose = (event, reason)=>{
        setNotify({...notify, isOpen: false});
    };

    return (
        <Snackbar
        className={classes.root}
        anchorOrigin={{vertical: 'top', horizontal: 'right'}}
        open={notify.isOpen}
        onClose={handleClose}
        autoHideDuration={3000}>
            <Alert
            onClose={handleClose}
             severity={notify.type}>
                {notify.message}
            </Alert>
        </Snackbar>
    );
}

export default Notification;
