import React from 'react'

import { Banner } from '../components/shared'
import { Member, Mission, Value } from '../components/about'
import { Grid } from '@mui/material'

function About() {
    return (
        <Grid container>

            <Grid item xs={12}>
                <Banner />
            </Grid>

            <Grid item xs={12}>
                <Mission />
            </Grid>
            
            <Grid item xs={12}>
                <Value />
            </Grid>
                 
            <Grid item xs={12}>
                <Member />
            </Grid>

        </Grid>
    )
}

export default About
