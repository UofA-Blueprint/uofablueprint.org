import React from "react";
import { useState } from "react";
import {Drawer,IconButton,List,ListItemButton,ListItemIcon,ListItemText} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const pages=["About us","Projects","For Students","For Nonprofits"]
const Hamburger =()=>{
    const[openDrawer,setOpenDrawer]=useState(false)
    return (
        <React.Fragment>
            <Drawer 
            anchor="right"
            open={openDrawer}
            onClose={()=> setOpenDrawer(false)}>
                <List>
                    {pages.map((page ,index)=>(
                    <ListItemButton key={index}>
                        <ListItemIcon>
                            <ListItemText>{page}</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    ))}
                </List>
            </Drawer>
            <IconButton onClick={()=> setOpenDrawer(!openDrawer)}>
                <MenuIcon style={{ color: 'white' }}/>
            </IconButton>
        </React.Fragment>
    );
};

export default Hamburger;