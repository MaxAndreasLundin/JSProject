import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        fontFamily: "Buenos Aires",
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          marginLeft: 5,
        },
        root: {
          backgroundColor: "white",
          marginTop: 3,
          marginBottom: 10,
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: 0,
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
      variants: [
        {
          props: { variant: "flex" },
          style: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            bgcolor: "background.paper",
          },
        },
      ],
    },

    MuiContainer: {
      variants: [
        {
          props: { variant: "flex" },
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          },
        },
      ],
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
    error: {
      main: "#FBEEED",
    },
  },

  typography: {
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
    h5: {
      fontFamily: "Quarto",
      fontSize: "2rem",
      fontWeight: 600,
    },
  },
});

export default theme;
