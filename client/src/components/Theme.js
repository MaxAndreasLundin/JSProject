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
    fontFamily: "",
    h1: {
      fontFamily: "Quarto",
      fontSize: "2rem",
      fontWeight: 400,
    },
    subtitle1: {
      fontFamily: "Buenos Aires",
      fontWeight: 400,
      fontSize: "0.8rem",
    },
  },
});
