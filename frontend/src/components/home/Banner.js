import { Typography } from '@mui/material'
import React from 'react'
import { Box } from '@mui/material'
import { Button } from '@mui/material'

function Banner() {
    return <div>
        <Box sx ={{textAlign: "center", backgroundColor: "primary.dark", color: "primary.light",padding:"150px"}}>
            <Typography variant='h2' sx={{ fontFamily: "Lato", fontWeight: "medium"}}>
                Tech For Social Good
            </Typography>
            <br></br>
            <Typography variant='h5' sx={{ fontFamily: "Lato" }}>
                We’re a student group at the University of <br></br> Alberta building web apps for nonprofits pro <br></br>bono
            </Typography>
            <br></br>
            <Button variant = "outlined" sx={{fontFamily: "Lato",color: "white", borderColor:"white"}}>Learn More</Button>
        </Box>
    </div>
}

export default Banner
