import React from "react";

import {makeStyles, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";

const useStyle = makeStyles(theme=>({
    root: {
        padding: '2rem',
    },
    img: {
        borderRadius: '50%',
    }
}));

const UserInfo = (props)=>{
    const { data} = props;
    const classes = useStyle();
    return (
        <Grid container className={classes.root}>
                 <Grid item xs={6}>
                     <img src={data.avatar} className={classes.img} alt=""/>
                 </Grid>
                 <Grid item xs={2}></Grid>
                 <Grid item xs={4}>
                    <Typography variant="h6" component="div">
                        {data.first_name + " " + data.last_name}
                    </Typography>
                    <Typography variant="h6" component="div">
                        {data.email}
                    </Typography>
                 </Grid>

        </Grid>
    );
};

export default UserInfo;