'use client'

import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    cssVariables: true,
    typography: {
        fontFamily: 'var(--font-roboto)',
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#1a1a1a',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#5a5a5a',
            contrastText: '#ffffff',
        },
        background: {
            default: '#f9f9f9',
            paper: '#ffffff',
        },
        text: {
            primary: '#1a1a1a',
            secondary: '#5a5a5a',
        },
        divider: '#e0e0e0',
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#1a1a1a',
                },
            },
        },
    },
})

export default theme
