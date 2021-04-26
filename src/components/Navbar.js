import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";

const Navbar = ()=>{
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit" style={{marginLeft:"800px",}}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{marginRight:"-800px",fontFamily:"popins",fontWeight:"bold"}}>
                    CricLive
                </Typography>
            </Toolbar>



            
        </AppBar>

    )
}

export default Navbar;