import React from 'react'
import { Box, Typography, Link } from '@mui/material'
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineInstagram, AiFillGithub } from 'react-icons/ai'
import Tooltip from '@mui/material/Tooltip';

function Footer() {
    return (
        <main>
            <div>
                <Box sx={{ display: "flex", flexDirection: "row", bgcolor: "secondary.dark", p: 3 }}>
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
                        <Box sx={{ mx: 5, justifyContent: "center" }}>
                            <Typography variant='h6' color='primary.light' mb={2} mr={1} fontWeight='medium'> General </Typography>
                            <Link href='/' underline="none">
                                <Typography variant='subtitle1' color='primary.light'> Home</Typography>
                            </Link>
                            <Link href='/' underline="none">
                                <Typography variant='subtitle1' color='primary.light'> General</Typography>
                            </Link>
                            <Link href='/' underline="none">
                                <Typography variant='subtitle1' color='primary.light'> Projects</Typography>
                            </Link>
                        </Box>
                        <Box sx={{ mx: 5 }}>
                            <Typography variant='h6' color='primary.light' mb={2}> For Students </Typography>
                            <Link href='/apply/students' underline="none">
                                <Typography variant='subtitle1' color='primary.light'> About</Typography>
                            </Link>
                            <Link href='/apply/students' underline="none">
                                <Typography variant='subtitle1' color='primary.light'> FAQ</Typography>
                            </Link>
                        </Box>
                        <Box sx={{ mx: 5 }}>
                            <Typography variant='h6' color='primary.light' mb={2}> For Nonprofits </Typography>
                            <Link href='/apply/nonprofits' underline="none">
                                <Typography variant='subtitle1' color='primary.light'> About</Typography>
                            </Link>
                            <Link href='/apply/nonprofits' underline="none">
                                <Typography variant='subtitle1' color='primary.light'> FAQ</Typography>
                            </Link>
                        </Box>
                        <Box sx={{ mx: 5 }}>
                            <Typography variant='h6' color='primary.light' mb={2}> Contact Us </Typography>
                            <Box sx={{ display: "flex", flexDirection: "row" }}>

                                <Box sx={{ mt: 0.5 }}>
                                    <AiOutlineMail style={{ color: "white", fontSize: "1.5em" }} size={15} />
                                </Box>
                                <Tooltip disableFocusListener disableTouchListener title="uofa-blueprint@gmail.com">
                                    <Typography variant='subtitle1' color='primary.light' ml={1} > Email</Typography>
                                </Tooltip>
                            </Box >
                            <Box sx={{ display: "flex", flexDirection: "row" }}>
                                <Box sx={{ mt: 0.5 }}>
                                    <AiOutlineLinkedin style={{ color: "white", fontSize: "1.5em" }} size={15} />
                                </Box>
                                <Link href="https://www.linkedin.com/company/uofa-blueprint/" target="_blank" underline="none" >

                                    <Typography variant='subtitle1' color='primary.light' ml={1} > LinkedIn</Typography>
                                </Link>
                            </Box >
                            <Box sx={{ display: "flex", flexDirection: "row" }}>
                                <Box sx={{ mt: 0.5 }}>
                                    <AiOutlineInstagram style={{ color: "white", fontSize: "1.5em" }} size={15} />
                                </Box>
                                <Link href="https://www.instagram.com/uofablueprint/" target="_blank" underline="none">
                                    <Typography variant='subtitle1' color='primary.light' ml={1} > Instagram</Typography>
                                </Link>
                            </Box >
                            <Box sx={{ display: "flex", flexDirection: "row" }}>
                                <Box sx={{ mt: 0.5 }}>
                                    <AiFillGithub style={{ color: "white", fontSize: "1.5em" }} size={15} />
                                </Box>
                                <Link href="https://github.com/UofA-Blueprint" target="_blank" underline="none">
                                    <Typography variant='subtitle1' color='primary.light' ml={1} > Github</Typography>
                                </Link>
                            </Box >
                        </Box>

                    </Box>
                </Box>

            </div>
        </main >
    )
}

export default Footer
