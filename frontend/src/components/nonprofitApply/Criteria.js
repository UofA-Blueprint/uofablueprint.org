import React from 'react'
import nonprofitCriteria from '../../data/nonprofitCriteria.json'
import {Grid, Typography, Box} from '@mui/material'
function Criteria() {
    return (
        <div overflow = "hidden">
            <Typography
            align = {"center"}
            component = {"h1"} 
            fontSize = {"48px"} 
            fontWeight ={"bold"}
            marginLeft = {"3.5%"}
            marginBottom = {"3%"}>
                Decision Criteria
            </Typography>
            <Grid container 
             align ="center"
             width = "100%">
                {nonprofitCriteria.map((criteria, index) => { //Maps the criteria json to a grid with title and images
                    let columnMax = 12;
                    let columnAmount = 3;
                    let widthPercent = "75%"
                    if (index >= 3){
                        columnAmount = 2;
                        widthPercent = "48%";
                    }
                    let ratio = columnMax /columnAmount;

                        return( 
                            // After 3 items remove
                            <Grid item xs = {12} sm = {6} lg = {ratio}
                            marginBottom = {"2%"}
                            padding = {0}
                            overflow = {"hidden"}//Resizes the grid based on screen size
                            key = {criteria.title}
                            > 
    
                            <Box width = {widthPercent} align = {"center"}>
                                <div>
                                <img src = {criteria.image} width = {"30%"} 
                                height = {"30%"} />
    
                                <Typography  //Sets h1 for he titles and h2 for the text contents
                                component = {"h2"} 
                                fontSize = {"24px"} 
                                fontWeight ={"bold"}
                                marginTop = {"5%"}>
                                    {criteria.title}
                                </Typography>
                                </div>
                                <Typography 
                                component = {"h3"}
                                fontSize = {"24px"}  
                                align = {"center"}
                                color={"primary.dark"}
                                >
                                    {criteria.body}
                                </Typography>
                                </Box>
                            </Grid>
                        )
                            
                })}
            </Grid>
            
        </div>
    )
}

export default Criteria
