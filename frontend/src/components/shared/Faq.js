import React from 'react'
import { Box, Typography } from '@mui/material';


function Faq(props) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        }} bgcolor="primary.dark">
            <Typography fontSize={20} color='primary.light'> Frequently Asked Questions</Typography>
            <h1> hello, {props.name} </h1>
        </Box>
    )
}

export default Faq
