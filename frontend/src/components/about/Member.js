import React from 'react'
import MemberInfo from './MemberInfo'
import { Grid, Typography } from '@mui/material';


function Member() {
    const IMG_URI = "https://previews.123rf.com/images/studiostoks/studiostoks1604/studiostoks160400296/55726621-male-business-coach-draws-on-background-pop-art-retro-style-business-training-drawing-board.jpg";
    const LINK_IMAGE = "https://cdn-icons-png.flaticon.com/512/38/38669.png";
    const LINK = "https://uofablueprint.org"

    return (
        <>
            <Typography align='center' variant='h4'>
                Meet the team
            </Typography>
            <Grid container direction='row' justifyContent='space-evenly' alignItems='center'>
                <Grid item xs={3}>
                    <MemberInfo image={IMG_URI} linkImage={LINK_IMAGE} link={LINK} name="Name Surname" position="position"/>
                </Grid>
                <Grid item xs={3}>
                    <MemberInfo image={IMG_URI} linkImage={LINK_IMAGE} link={LINK} name="Name Surname" position="position"/>
                </Grid>
                <Grid item xs={3}>
                    <MemberInfo image={IMG_URI} linkImage={LINK_IMAGE} link={LINK} name="Name Surname" position="position"/>
                </Grid>
                <Grid item xs={3}>
                    <MemberInfo image={IMG_URI} linkImage={LINK_IMAGE} link={LINK} name="Name Surname" position="position"/>
                </Grid>
                <Grid item xs={3}>
                    <MemberInfo image={IMG_URI} linkImage={LINK_IMAGE} link={LINK} name="Name Surname" position="position"/>
                </Grid>
                <Grid item xs={3}>
                    <MemberInfo image={IMG_URI} linkImage={LINK_IMAGE} link={LINK} name="Name Surname" position="position"/>
                </Grid>
                <Grid item xs={3}>
                    <MemberInfo image={IMG_URI} linkImage={LINK_IMAGE} link={LINK} name="Name Surname" position="position"/>
                </Grid>
                <Grid item xs={3}>
                    <MemberInfo image={IMG_URI} linkImage={LINK_IMAGE} link={LINK} name="Name Surname" position="position"/>
                </Grid>
            </Grid>

        </>
    )
}

export default Member
