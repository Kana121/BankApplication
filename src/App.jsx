import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./conponents/layouts/NavBar";
import HomePage from "./conponents/pages/HomePage";
import AboutPage from "./conponents/pages/AboutPage";
import ContactPage from "./conponents/pages/ContactPage";
import "bootstrap/dist/css/bootstrap.min.css";
import PageNotFound from "./conponents/layouts/PageNotFound";
import RegisterForm from "./conponents/pages/RegisterForm";
import LoginPage from "./conponents/pages/LoginPage";
import Employee from "./conponents/pages/Employee";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route extact path="/emp" element={<Employee />} />
      </Routes>
    </Router>
  );
}

export default App;
