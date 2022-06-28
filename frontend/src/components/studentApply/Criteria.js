import React from 'react'
import studentCriteria from '../../../src/data/studentCriteria.json'
import {Grid, Typography} from '@mui/material'
function Criteria() {
    return (
        //First I will render each image

        //Then I will render each title

        //Then I will render each text box

        //Then I will put them side by side in a grid with 3 textboxes as columns

        <div>
            <Grid space container ={3} alignItems={"center"} justifyItems="center">
                {studentCriteria.map(criteria => {
                    return( <Grid item xs = {4}
                     key = {criteria.title}
                     >
                        <img src = {criteria.image} width = {100} height = {100}/>
                        <Typography 
                        component = {"h1"}
                        fontSize = {"24px"} 
                        fontWeight ={"bold"}>

                            {criteria.title}
                            <Typography 
                            component = {"h2"}
                            fontFamily={"Roboto"} 
                            fontSize = {"24px"} 
                            fontWeight= {400} 
                            color={"#0B2538"}
                            width = {310}
                            alignItems={"right"}
                            >

                                {criteria.body}
                            </Typography>
                        </Typography>
                    </Grid>
                    )
                })}
            </Grid>
            
        </div>
    )
}

export default Criteria
