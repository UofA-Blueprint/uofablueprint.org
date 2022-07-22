import { Button, Typography } from '@mui/material'
import React from 'react'
import { Box } from '@mui/material'

function About() {
    return <div>
        <Box sx={{ textAlign: "right", padding: "100px" }}>
            <Typography variant='h2' sx={{ fontFamily: "Lato", color: "primary.main", fontWeight: "medium" }}>
                About Us
            </Typography>
            <br></br>
            <Typography variant='h5' sx={{ fontFamily: "Lato" }}>
                Blueprint is a student-run organization that creates technological <br></br>solutions for nonprofit organizations.<br></br> <br></br>

                Blueprint is a multinational organization founded in 2013 at the <br></br>University of California, Berkeley. Our UofA Chapter is the fourth <br></br>established chapter in Canada and the first one in Western Canada.
            </Typography>
            <br></br>
            <Button variant='outlined' sx={{fontFamily: "Lato",color: "primary.main",borderColor:"primary.main"}}>
                Read More
            </Button>
        </Box>
    </div>
}

export default About
