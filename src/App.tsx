import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import "./App.css";
import Header from "./components/Header/Header";

import { Root } from "./routes/root";

function App() {
  const theme = createTheme({
    components: {
      MuiIconButton: {
        styleOverrides: {
          root: {
            "&:hover": {
              backgroundColor: "inherit",
            },
          },
        },
      },
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            "&:hover": {
              backgroundColor: "inherit",
              color: "inherit",
            },
          },
        },
      },
    },
    palette: {
      primary: {
        main: "#556cd6",
      },
      secondary: {
        main: "#19857b",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Root />
      </Container>
    </ThemeProvider>
  );
}

export default App;
