import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function createColorTheme(color) {
  const theme = createTheme({
    palette: {
      primary: {
        main: color,
      },
    },
  });

  return function CustomTheme({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  };
}
