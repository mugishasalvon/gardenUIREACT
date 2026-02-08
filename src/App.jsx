import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./Component/Sidebar";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import About from "./Component/About";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import ForgetPassword from "./Component/ForgetPassword";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

function Main() {
  const location = useLocation();
  const hideSidebarRoutes = ["/login", "/signup", "/forgot"];
  const hideSidebar = hideSidebarRoutes.includes(location.pathname);

  return (
    <div className="app-container">
      {!hideSidebar && <Sidebar />}

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot" element={<ForgetPassword />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
