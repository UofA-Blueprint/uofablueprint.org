import React from 'react'
import studentCriteria from '../../../src/data/studentCriteria.json'
import {Grid, Typography} from '@mui/material'
function Criteria() {
    return (
        <div overflow = "hidden">
            <Grid container spacing ={2} align="Center" >
                {studentCriteria.map(criteria => { //Maps the criteria json to a grid with title and images
                    return( 
                    <Grid item xs = {12} sm = {6} lg = {4} 
                    marginBottom = {4} marginTop ={2} overflow = "hidden"//Resizes the grid based on screen size
                     key = {criteria.title}
                     > 
                        <img src = {criteria.image} width = {100} height = {100}/>
                        <Typography  //Sets h1 for the titles and h2 for the text contents
                        component = {"h1"} 
                        fontSize = {"24px"} 
                        fontWeight ={"bold"}>

                            {criteria.title}

                        </Typography>
                        
                        <Typography 
                        component = {"h2"}
                        fontFamily={"Roboto"} 
                        fontSize = {"24px"}  
                        fontWeight= {400} 
                        color={"#0B2538"}
                        width = {310}
                        >
                            {criteria.body}

                        </Typography>
                    </Grid>
                    )
                })}
            </Grid>
            
        </div>
    )
}

export default Criteria
