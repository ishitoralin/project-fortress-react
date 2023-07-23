import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function createBreakPointTheme(values) {
  const theme = createTheme({
    breakpoints: {
      values: {
        th: 1000,
      },
    },
  });

  return function CustomTheme({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  };
}
