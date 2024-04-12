import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { SidebarProvider } from "./context/SidebarContext.jsx";
import { ToastContainer } from "react-toastify";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

import muiTheme from "./themes/muiTheme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <MuiThemeProvider theme={muiTheme}>
      <SidebarProvider>
        <App />
        <ToastContainer />
      </SidebarProvider>
    </MuiThemeProvider>
  </ThemeProvider>
);
