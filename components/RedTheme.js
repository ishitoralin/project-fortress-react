import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: '#EA0000'
        }
    }
})

export default function RedTheme({children}) {

    return (
        <ThemeProvider theme={theme} >
            {children}
        </ThemeProvider>
    )
}