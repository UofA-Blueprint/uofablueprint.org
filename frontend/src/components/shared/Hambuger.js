import React from "react";
import { useState } from "react";
import {Drawer,IconButton,List,Typography,Link,Grid} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
const drawerwidth = 532;
const Hamburger =()=>{
    const[openDrawer,setOpenDrawer]=useState(false)
    return (
        <React.Fragment>
            <Drawer 
                PaperProps={{sx: {width: drawerwidth,
                    flexshrink:0,
                    backgroundColor: "rgba(11,37,56,1)",
                    
            }}}

            anchor="right"
            open={openDrawer}
            onClose={()=> setOpenDrawer(false)}>
                
                <List>
                    <Grid
                     container
                     spacing={0}
                     direction="column"
                     alignItems="center"
                     justifyContent="center">
                    <Typography mx={2} my={3} variant='h2' >
                            <Link
                                color="White"
                                fontWeight="bold"
                                href="/about"
                                underline="none"
                                
                            >
                                {' '}
                                About Us
                            </Link>
                        </Typography>
                        
                        <Typography mx={2} my={3} variant='h2'>
                            <Link
                                color="White"
                                fontWeight="bold"
                                href="/projects"
                                underline="none"
                            >
                                {' '}

                                Projects
                                
                            </Link>
                        </Typography>
                        <Typography mx={2} my={3} variant='h2'>
                            <Link
                                color="White"
                                fontWeight="bold"
                                href="/apply/students"
                                underline="none"
                            >
                                {' '}
                                For Students
                            </Link>
                        </Typography>
                        <Typography mx={2} my={3} variant='h2'>
                            <Link
                                color="White"
                                fontWeight="bold"
                                href="/apply/nonprofits"
                                underline="none"
                            >
                                For Nonprofits
                            </Link>
                        </Typography>
                        </Grid>
                </List>
                
            </Drawer>
                                
                            
            <IconButton onClick={()=> setOpenDrawer(!openDrawer)}>
                <MenuIcon style={{ color: 'white' }}/>
            </IconButton>
        </React.Fragment>
    );
};

export default Hamburger;

