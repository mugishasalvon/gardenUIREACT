import { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const [open, setOpen] = useState(false);

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
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setOpen(false)}>AboutUs</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>ContactUs</Link>
        <Link to="/login" onClick={() => setOpen(false)} className="logout-link">Logout</Link>
      </aside>

      {/* OVERLAY */}
      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}
    </>
  );
}

export default Sidebar;
