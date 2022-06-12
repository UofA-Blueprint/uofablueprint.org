import React from 'react'
import MemberInfo from './MemberInfo'
import { Grid, Typography } from '@mui/material';

import members from '../../data/members.js'

// doesn't work
// function getMembers() {
//     fetch('members.json')
//     .then((res) => res.json())
//     .then((data) => console.log(data))
// }


function Member() {
    const IMG_URI = "https://previews.123rf.com/images/studiostoks/studiostoks1604/studiostoks160400296/55726621-male-business-coach-draws-on-background-pop-art-retro-style-business-training-drawing-board.jpg";
    const LINK_IMAGE = "https://cdn-icons-png.flaticon.com/512/38/38669.png";


    return (
        <>
            <Typography align='center' variant='h4'>
                Meet the team
            </Typography>

            <Grid container direction='row' justifyContent='space-evenly' alignItems='center'>
                {
                members.map(member => {
                    return (
                    <Grid  key={member.id} item xs={3}>
                        <MemberInfo image={IMG_URI} linkImage={LINK_IMAGE} link={member.linkedin} name={member.name} position={member.position}/>
                    </Grid>
                    )
                })}
            </Grid>

        </>
    )
}

export default Member
