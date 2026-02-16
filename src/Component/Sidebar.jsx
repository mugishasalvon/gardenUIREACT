import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const [open, setOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    setIsAdmin(user.is_admin === 1 || user.is_admin === true);
  }, []);

  return (
    <>
      {/* TOP BAR */}
      <header className="topbar">
        <div className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </div>
        <h2 className="logo">Garden TVET School</h2>
      </header>

      {/* SIDEBAR */}
      <aside className={open ? "sidebar open" : "sidebar"}>
        <Link to="/home" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setOpen(false)}>AboutUs</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>ContactUs</Link>
        {isAdmin && <Link to="/admin" onClick={() => setOpen(false)}>Admin Dashboard</Link>}
        <Link to="/" onClick={() => setOpen(false)} className="logout-link">Logout</Link>
      </aside>

      {/* OVERLAY */}
      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}
    </>
  );
}

export default Sidebar;
