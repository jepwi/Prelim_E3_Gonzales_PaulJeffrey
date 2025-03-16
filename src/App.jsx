import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // User state with nested settings object
  const [user, setUser] = useState({
    name: "Paul Jeffrey",
    settings: { darkMode: false }
  });

  return (
    <Router>
      <div className={user.settings.darkMode ? "bg-dark text-light min-vh-100" : "bg-light text-dark min-vh-100"}>
        <nav className={`navbar navbar-expand-lg ${user.settings.darkMode ? "navbar-dark bg-secondary" : "navbar-light bg-primary"}`}>
          <div className="container">
            <Link className="navbar-brand text-white" to="/">Home</Link>
            <div className="navbar-nav">
              <Link className="nav-link text-white" to="/profile">Profile</Link>
              <Link className="nav-link text-white" to="/settings">Settings</Link>
            </div>
          </div>
        </nav>

        <div className="container py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
            <Route path="/settings" element={<Settings user={user} setUser={setUser} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
