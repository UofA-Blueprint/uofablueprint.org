import React from 'react'
import studentCriteria from '../../../src/data/studentCriteria.json'
import {Grid, Typography, Box} from '@mui/material'
function Criteria() {
    return (
        <div overflow = "hidden">
            <Grid container spacing ={1} align="Center" justify="space-between" >
                {studentCriteria.map(criteria => { //Maps the criteria json to a grid with title and images
                    return( 
                    
                    <Grid item xs = {12} sm = {6} lg = {4}
                     marginBottom = {"4%"}
                     marginTop ={"2%"}
                     overflow = "hidden"//Resizes the grid based on screen size
                     key = {criteria.title}
                     > 

                    <Box width = "75%">
                        <div align={"left"}>
                        <img src = {criteria.image} width = {"30%"} height = {"30%"} marginbottom = {"10%"}/>

                        <Typography  //Sets h1 for he titles and h2 for the text contents
                        component = {"h1"} 
                        fontSize = {"24px"} 
                        fontWeight ={"bold"}
                        marginLeft = {"2%"}
                        marginTop = {"5%"}>
                            {criteria.title}
                        </Typography>
                        </div>
                        <Typography 
                        component = {"h2"}
                        fontFamily={"Roboto"} 
                        fontSize = {"24px"}  
                        fontWeight= {400} 
                        align = {"left"}
                        color={"#0B2538"}
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
