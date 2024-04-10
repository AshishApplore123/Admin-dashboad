import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { SidebarProvider } from "./context/SidebarContext.jsx";
import { toast, ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <SidebarProvider>
      <App />
      <ToastContainer />
    </SidebarProvider>
  </ThemeProvider>
);
