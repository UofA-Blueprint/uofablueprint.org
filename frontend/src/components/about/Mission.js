import { Typography } from '@mui/material'
import React from 'react'
import { Box } from '@mui/system';

function Mission() {
    return (
        <Box sx={{
            background: '#f6f6f6',
            textAlign: 'center'
        }}>
            <Typography variant='h3' color='primary' sx={{
                p: 4,
                fontWeight: 'medium'
            }}>
                Our Mission Statement
            </Typography>

            <Typography variant='body1' sx={{
                p: 4,
                fontSize: 22
            }}>
                To make beautiful engineering accessible and useful for those who create
                communities and promote public welfare.
            </Typography>
        </Box>
    )
}

export default Mission
