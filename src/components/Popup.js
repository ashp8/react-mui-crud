import { Dialog, DialogContent, DialogTitle, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Close } from '@material-ui/icons';
import { Controls } from './controls/Controls';

const useStyles = makeStyles(theme=>({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogTitle: {
        paddingRight: "0px",
    }
}));


const Popup = (props)=>{
    const {title, children, openPopup, setOpenPopup} = props;
    const classes = useStyles();

    return (
        <Dialog open={openPopup} classes={{paper: classes.dialogWrapper}} maxWidth="md">
            <DialogTitle className={classes.dialogTitle}>

            <div style={{display: "flex"}}>
                <Typography variant="h6" component="div" style={{flexGrow: "1"}}>{title}</Typography>
                <Controls.ActionButton 
                    color="secondary"
                    onClick={()=>setOpenPopup(false)}
                >
                    <Close/>
                </Controls.ActionButton>
            </div>
            </DialogTitle>
           <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    );
};

export default Popup;