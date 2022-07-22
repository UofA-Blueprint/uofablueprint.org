import React from 'react'
import { Typography, Box, Button } from '@mui/material'

function Project() {
    return <div>
        <Box sx ={{textAlign: "left", padding: "100px", color:"white",backgroundColor:"primary.dark"}}>
        <Typography variant='h2'sx ={{fontFamily: "Lato", fontWeight:"medium"}}>
        Our Projects
        </Typography>
        <br></br>
        <Typography variant='h5'sx ={{fontFamily: "Lato",}}>
        Each year, teams of five students work with non-profit organizations on projects to help them better <br></br>serve their communities.
        </Typography>
        <br></br>
        <Button variant = "outlined" sx={{fontFamily: "Lato",color: "white", borderColor:"white"}}> View all projects</Button>
        </Box>
    </div>
}

export default Project
