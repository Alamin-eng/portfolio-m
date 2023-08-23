import "./App.css";
import Navbar from "./Nav.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function Header() {
  return (
    <div className="Header">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"  />
          <Route path="/" />
       
        </Routes>
      </Router>
  
    </div>
  );
}

export default Header;
