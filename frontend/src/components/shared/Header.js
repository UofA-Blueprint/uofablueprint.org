import React from 'react'
import { Box, Typography, Link } from '@mui/material'

function Header() {
    return (
        <main>
            <div>
                <Box sx={{ display: "flex", flexDirection: "row", bgcolor: "primary.dark", p: 3 }}>
                    <Box component="img"
                        sx={{ height: 50, width: 45 }}
                        src="/assets/bp-logo.png" />
                    <Typography fontSize={20} color='primary.light' mt={0.5} ml={0.5}>blueprint</Typography>

                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        flexGrow: 1,
                        flexWrap: 'wrap',
                        justifyContent: "flex-end",
                    }}>
                        <Typography mx={2} my={1}>
                            <Link color='primary.light' href='/about' underline="none"> About Us</Link>
                        </Typography>
                        <Typography mx={2} my={1}>
                            <Link color='primary.light' href='/projects' underline="none"> Projects</Link>
                        </Typography>
                        <Typography mx={2} my={1}>
                            <Link color='primary.light' href='/apply/students' underline="none"> For Students</Link>
                        </Typography>
                        <Typography mx={2} my={1}>
                            <Link color='primary.light' href='/apply/nonprofits' underline="none">For Nonprofits</Link>
                        </Typography>

                    </Box>

                </Box>
            </div>
        </main >

    )
}

export default Header
