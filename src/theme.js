import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      light: '#FF7F48',
      dark: '#E75517',
      main: "#E75517D1",
    },
    secondary: {
      main: "#222222",
    },
    error: {
      main: red.A400,
    },
  },
  typography:{
    allVariants:{
      textTransform: 'none'  
    }
  }
});

export default theme;
