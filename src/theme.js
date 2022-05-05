import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        fontFamily: "Poppins",
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

    MuiGridItem: {},
    MuiCardHeader: {
      styleOverrides: {
        title: {
          fontFamily: "Merriweather",
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
    MuiChip: {
      variants: [
        {
          props: { variant: "activityCard" },
          style: {
            fontWeight: 500,
            fontFamily: "Poppins",
            fontSize: 10,
          },
        },
      ],
    },
  },

  palette: {
    primary: {
      main: "#FFE99D",
      dark: "#F5D668",
    },
    secondary: {
      main: "#EE7B35",
    },
    info: {
      main: "#99CEC8",
      dark: "#52A399",
    },
    error: {
      main: "#FBEEED",
    },
    warning: {
      main: "#000000",
    },
    success: {
      main: "#FF0202",
    },
  },

  typography: {
    h1: {
      fontFamily: "Merriweather",
      fontSize: "2rem",
      fontWeight: 700,
    },
    subtitle1: {
      fontFamily: "Poppins",
      fontWeight: 500,
      fontSize: "0.8rem",
    },
    subtitle2: {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: "0.9rem",
      lineHeight: 1.2,
    },
    h5: {
      fontFamily: "Merriweather",
      fontSize: "2rem",
      fontWeight: 600,
    },
    signupHeader: {
      fontFamily: "Poppins",
      fontWeight: 400,
      fontSize: "26px",
    },
    pswrdInfo: {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: "12px",
      color: "#3A3A3A",
    },
  },
});

export default theme;
