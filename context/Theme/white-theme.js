import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MAIN_WHITE } from '@/assets/color-code';

const theme = createTheme({
  palette: {
    primary: {
      main: MAIN_WHITE,
    },
  },
});

export default function WhiteTheme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
