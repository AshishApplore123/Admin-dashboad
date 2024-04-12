import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#0051B7",
      error: "red",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
      defaultProps: {
        InputLabelProps: {
          shrink: true,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {},
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {},
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {},
      },
    },
    // Card
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          padding: 20,
        },
      },
    },
    // Typography
    MuiTypography: {
      styleOverrides: {
        root: {
          wordBreak: "break-word",
        },
      },
    },
    // Radio
    MuiRadio: {
      styleOverrides: {
        root: {
          color: "#484848",
        },
      },
    },
  },
});

export default muiTheme;
