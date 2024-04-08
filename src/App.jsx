import { useContext, useEffect } from "react";
import "./App.scss";
import { ThemeContext } from "./context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "./constants/themeConstants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import BaseLayout from "./layout/BaseLayout";
import { Dashboard, PageNotFound} from "./screens";
import LoginScreen from "./screens/login/loginScreen";
import SignUpScreen from "./screens/sign/SignUpPage";
import {UserManagement} from "./screens";
import Payment from "./screens/payment/PaymentPage";
import {SettlementPage} from "./screens";
import {ApiIntegrationPage} from "./screens";
import {RefundPage} from "./screens";
import {RevenuePage} from "./screens";
import { SettingPage } from "./screens";
import { Navigate } from "react-router-dom";


function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // adding dark-mode class if the dark mode is set on to the body tag
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  const ProtectedRoute = ({ element, access }) => {
      const isTokenAvailable = !!localStorage.getItem("token");
      return isTokenAvailable ? element : <Navigate to="/login" />;
    };
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<LoginScreen/>} />
        <Route path="/login" element={<LoginScreen/>} />
        <Route path="/signup" element={<SignUpScreen/>} />
          <Route element={<BaseLayout />}>
            <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
            <Route path="/revenue" element={<ProtectedRoute element ={<RevenuePage />} />} />
            <Route path='/usermanagement' element={<ProtectedRoute element={<UserManagement />} />} />
            <Route path='/payment' element={<ProtectedRoute element={<Payment />} />} />
            <Route path='/settlement' element={<ProtectedRoute element={<SettlementPage />} />}/>
            <Route path='/apipage' element={<ProtectedRoute element={<ApiIntegrationPage />} />}/>
            <Route path='/refund' element={<ProtectedRoute element={<RefundPage />}/>}/>
            <Route path='/setting' element={<ProtectedRoute element={<SettingPage />}/>} />
            <Route path="*" element={<ProtectedRoute element={<PageNotFound />} />}/>
           
          </Route>
        </Routes>

        {/* <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
        >
          <img
            className="theme-icon"
            src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
          />
        </button> */}
      </Router>
    </>
  );
}

export default App;
