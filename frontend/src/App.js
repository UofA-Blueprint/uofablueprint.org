import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from './components/shared'


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
