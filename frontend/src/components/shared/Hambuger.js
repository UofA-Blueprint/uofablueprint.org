import React from "react";
import { useState } from "react";
import {Drawer,IconButton,List,Typography,Link} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const Hamburger =()=>{
    const[openDrawer,setOpenDrawer]=useState(false)
    return (
        <React.Fragment>
            <Drawer 
            anchor="right"
            open={openDrawer}
            onClose={()=> setOpenDrawer(false)}>
                
                <List>
                    <Typography mx={2} my={1}>
                            <Link
                                color="Black"
                                fontWeight="bold"
                                href="/about"
                                underline="none"
                            >
                                {' '}
                                About Us
                            </Link>
                        </Typography>
                        <Typography mx={2} my={1}>
                            <Link
                                color="Black"
                                fontWeight="bold"
                                href="/projects"
                                underline="none"
                            >
                                {' '}
                                Projects
                            </Link>
                        </Typography>
                        <Typography mx={2} my={1}>
                            <Link
                                color="Black"
                                fontWeight="bold"
                                href="/apply/students"
                                underline="none"
                            >
                                {' '}
                                For Students
                            </Link>
                        </Typography>
                        <Typography mx={2} my={1}>
                            <Link
                                color="Black"
                                fontWeight="bold"
                                href="/apply/nonprofits"
                                underline="none"
                            >
                                For Nonprofits
                            </Link>
                        </Typography>
                </List>
                
            </Drawer>
                                
                            
            <IconButton onClick={()=> setOpenDrawer(!openDrawer)}>
                <MenuIcon style={{ color: 'white' }}/>
            </IconButton>
        </React.Fragment>
    );
};

export default Hamburger;

