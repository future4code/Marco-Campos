import { ThemeProvider } from "@material-ui/core";
import React from "react"
import theme from "./constants/theme";
import Router from "./route/Router"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router/>
    </ThemeProvider>
  )
}

export default App;
