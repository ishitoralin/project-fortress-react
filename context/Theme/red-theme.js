import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MAIN_RED } from '@/assets/color-code';

const theme = createTheme({
  palette: {
    primary: {
      main: MAIN_RED,
    },
  },
});

export default function RedTheme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
