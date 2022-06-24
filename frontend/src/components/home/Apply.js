import React from 'react'
import { Typography, Box, Grid, Button } from '@mui/material'


function Apply() {
    return <div>
        <Box sx={{ padding: "50px", }}>
            <Typography variant='h2' sx={{ fontFamily: "Lato", fontWeight: "medium", textAlign: "center" }}>
                Get Involved
            </Typography>
            <br></br>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <item>
                        <Box sx={{ textAlign: "center" }}>
                            <Box
                                component="img"
                                sx={{
                                    height: 215,
                                    width: 215,

                                }}
                                alt="Students image"
                                src="/assets/cap.png"
                            />
                            <Typography variant="h3" sx={{ fontFamily: "Lato", }}>
                                For Students
                            </Typography>
                            <br></br>
                            <Typography variant='h5' sx={{ fontFamily: "Lato", }}>
                                Joining Blueprint is the perfect <br></br>way to use your skills to give<br></br> back to the community.
                            </Typography>
                            <br></br>
                            <Button variant="outlined" sx={{ fontFamily: "Lato", color: "primary.main", borderColor: "primary.main" }}>Learn more</Button>
                        </Box></item>
                </Grid>
                <Grid item xs={6}>
                    <item>

                        <Box sx={{ textAlign: "center" }}>
                            <Box
                                component="img"
                                sx={{
                                    height: 226,
                                    width: 226,
                                }}
                                alt="Nonprofit image"
                                src="/assets/office-building.png"
                            />
                            <Typography variant="h3" sx={{ fontFamily: "Lato", textAlign: "center" }}>
                                For Nonprofits
                            </Typography>
                            <br></br>
                            <Typography variant='h5' sx={{ fontFamily: "Lato", textAlign: "center" }}>
                                Partner with Blueprint to <br></br>build the application your <br></br>organization needs.
                            </Typography>
                            <br></br>
                            <Button variant="outlined" sx={{ fontFamily: "Lato", color: "primary.main", borderColor: "primary.main" }}>Learn more</Button>
                        </Box></item>
                </Grid>

            </Grid>
        </Box>
    </div>
}

export default Apply
