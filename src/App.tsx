import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import PLP from "./components/PLP/PLP";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import Home from "./components/Home/Home";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/root";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root></Root>,
//   },
// ]);

function App() {
  const theme = createTheme({
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
