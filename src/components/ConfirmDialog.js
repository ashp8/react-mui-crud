import { Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { api } from "../services/services";
import { Controls } from "./controls/Controls";

const useStyles = makeStyles(theme=>({
    dialog: {
        position: 'absolute',
        top: theme.spacing(5),
        padding: theme.spacing(2),
    },
    dialogContent: {
        textAlign: 'center',
    },
    dialogAction: {
        justifyContent: "center",
    }
}));

const ConfirmDialog = (props)=>{
    const {confirmDialog, setConfirmDialog, data } = props;
    const classes = useStyles();
    return (
        <Dialog classes={{paper: classes.dialog}} open={confirmDialog.isOpen}>
            <DialogTitle>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <Typography variant="h6">
                    {confirmDialog.title}
                </Typography>

                <Typography variant="subtitle2" className={classes.dialogAction}>
                    {confirmDialog.subTitle}
                </Typography>


            </DialogContent>
            <DialogActions>
                <Controls.Button
                    text="No"
                    color="default"
                    onClick={()=>setConfirmDialog({isOpen: false})}
                />
                <Controls.Button
                    text="Yes"
                    color="secondary"
                    onClick={async ()=>{
                        setConfirmDialog({isOpen: false});
                        console.log(data);
                        const resp = await api.patch(`/users/${data.id}`);
                        console.log(resp);
                    }}
                />
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDialog;