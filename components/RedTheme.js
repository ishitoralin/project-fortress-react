import { useState, createContext, useContext } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const ThemeChangeContext = createContext()

export const useTheme = () => useContext(ThemeChangeContext)

const redTheme = createTheme({
    palette: {
        primary: {
            main: '#EA0000'
        }
    }
})

export default function RedTheme({children}) {
    const [theme, setTheme] = useState(redTheme)

    const changeTheme = (color) => {
        const theme = createTheme({
            palette: {
                primary: {
                    main: color
                }
            }
        })

        setTheme(theme)
    }

    return (
        <ThemeProvider theme={theme} >
            <ThemeChangeContext.Provider value={changeTheme}>
            {children}
            </ThemeChangeContext.Provider>
        </ThemeProvider>
    )
}