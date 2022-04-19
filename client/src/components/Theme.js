import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FFE99D",
    },
    secondary: {
      main: "#EE7B35",
    },
    info: {
      main: "#99CEC8",
    },
  },
  typography: {
    title: {
    fontFamily: "Quarto",
    fontWeight: 600,
    },
    subheader: {
    fontFamily: "Buenos Aires",
  },
  body2:{
    fontFamily: "Buenos Aires",
    fontWeight: 400,
  }
  },
});
