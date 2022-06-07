import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from './components/shared'
import { Theme } from './config/Theme'
import { ThemeProvider } from '@mui/material'
import { CssBaseline } from '@mui/material';



function App() {
    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline enableColorScheme />
            <Header />
            <Outlet />
            <Footer />
        </ThemeProvider>
    )
}

export default App
