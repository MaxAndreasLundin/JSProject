import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          margin: "5px",
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        title: {
          fontFamily: "Quarto",
          fontWeight: 400,
          fontSize: "2rem",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        body1: {
          fontFamily: "Buenos Aires",
          fontWeight: 400,
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          maxWidth: "80%",
        },
        container: {
          maxWidth: "80%",
          justifyContent: "center",
        },
      },
    },
  },
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
