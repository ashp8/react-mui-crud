import { AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Toolbar } from "@material-ui/core";
import React from "react";
import { Search as SearchIcon, NotificationsNone, ChatBubbleOutlined } from "@material-ui/icons";
const useStyels = makeStyles(theme => ({
    root: {
        backgroundColor: '#fff',
        transform: 'translateZ(0)',
    },
    searchInput: {
        opacity: 0.6,
        padding: `0px ${theme.spacing(1)}`,
        fontSize: "0.8rem",
        "&:hover": {
            backgroundColor: "#ccc"
        },
        "& .MuiSvgIcon-root":{
            marginRight: theme.spacing(1),
        }
    }
}));


const Header = ()=>{
    const classes = useStyels();
    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item style={{border: "1px solid white"}}>
                        <InputBase className={classes.searchInput} placeholder="Search for topics!" startAdornment={<SearchIcon fontSize="small"/>} />
                    </Grid>
                    <Grid item sm />
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsNone fontSize="small"/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={5} color="secondary">
                                <ChatBubbleOutlined fontSize="small" />
                            </Badge>


                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};


export default Header;