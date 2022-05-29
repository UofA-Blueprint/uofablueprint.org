import React from 'react'
import Box from '@mui/material/Box';
import { ThemeProvider } from '@emotion/react';
import { Theme } from '../../config/Theme';
import { Typography } from '@mui/material';


const values = [{
    title: "1. Mission First", body: "We as Blueprint members ultimately unify under one goal - achieving our mission. We place the interests of the people and partners we serve above our own. Our primary measure of success is the amount of positive impact we create through our work."
    , image: "/images/mountain.png"
},
{
    title: "2. Perpetual Growth", body: "We as Blueprint members value the academic, social, and personal growth of our peers. We constantly seek to perpetuate the cycle of learning and teaching, for our benefit and for others.We strive to offer a helping hand in times of need and push each other to succeed."
    , image: "/images/growth.png"
},
{
    title: "3. Cherish Each Other", body: "We as Blueprint members seek to cherish our time spent together. We develop meaningful relationships that extend well beyond the scope of the organization. We value each other as individuals and appreciate our differences."
    , image: "/images/love.png"
},
{
    title: "4. Always Innovate", body: "We as Blueprint members value the academic, social, and personal growth of our peers. We constantly seek to perpetuate the cycle of learning and teaching, for our benefit and for others. We strive to offer a helping hand in times of need and push each other to succeed."
    , image: "/images/rocket.png"
},
{
    title: "5. Be Humble", body: "We as Blueprint members strive to remain humble, accept our imperfections, and be receptive to feedback. We approach challenges with an open mind and remember that anyone can pursue social good, not just Blueprint."
    , image: "/images/support.png"
}];

const display = [];


for (var i = 1; i < (values.length + 1); i++) {
    //Odd
    if (i % 2 !== 0) {
        display.push((<Box sx={{
            display: 'flex',
            flexDirection: 'row',
            width: 1,
            height: 1,
            m: 4,
            mx: 20,
            bgcolor: 'primary.light',
            color: 'primary.dark'

        }} key={i}>

            <img src={values[i - 1].image} width={120} height={120} />
            <Box sx={{
                width: 1 / 2,
                display: 'flex',
                flexDirection: 'column',
                mx: 4,
                mb: 1
            }} >

                <Typography mb={1} color='primary.main' fontSize={20}> {values[i - 1].title}</Typography>
                <Typography color='secondary.main' fontSize={14}> {values[i - 1].body}</Typography>
            </Box>
        </Box>))

    }
    //Even
    else if (i % 2 === 0) {
        display.push((<Box sx={{
            display: 'flex',
            flexDirection: 'row',
            width: 1,
            height: 1,
            m: 4,
            mx: 20,
            bgcolor: 'primary.light',
            color: 'primary.dark'

        }} key={i}>


            <Box sx={{
                width: 1 / 2,
                display: 'flex',
                flexDirection: 'column',
                mx: 4,
                mb: 1
            }}>

                <Typography mb={1} align='right' color='primary.main' fontSize={20}> {values[i - 1].title}</Typography>
                <Typography align='right' color='secondary.main' fontSize={14}> {values[i - 1].body}</Typography>
            </Box>
            <img src={values[i - 1].image} width={120} height={120} />
        </Box>))

    }
}
function Value() {
    return (
        <ThemeProvider theme={Theme}>
            <Typography color="primary.dark" mx={5} my={2} fontSize={25}> Our Values </Typography>
            {display}
        </ThemeProvider >
    )
}

export default Value
