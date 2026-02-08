import { Link } from "react-router-dom";
import "../Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="footer-socials">
        <a
          href="https://facebook.com/YourPage"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="social"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#1877F2"/><text x="12" y="16" fontSize="12" textAnchor="middle" fill="#fff" fontFamily="Arial">f</text></svg>
        </a>

        <a
          href="https://instagram.com/YourProfile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="social"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" fill="#E1306C"/><circle cx="12" cy="11" r="3.2" fill="#fff"/><circle cx="17.5" cy="6.5" r="1" fill="#fff"/></svg>
        </a>

        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="social"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#25D366"/><path d="M16.5 14.5c-.4 0-1 .2-1.5.2-.3 0-.6 0-.9-.1-.3-.1-1-.4-1.8-1-.7-.6-1.2-1.3-1.4-1.6-.2-.3-.1-.6 0-.8.1-.3.4-.6.6-.9.2-.2.3-.4.5-.6.2-.2.1-.6 0-.9-.1-.3-.9-2-1.3-2.4-.4-.4-1-.4-1.5-.4-.5 0-1 .1-1.5.5-.4.4-1.4 1.4-1.4 3.4 0 2 .9 4 2 5.4 1.1 1.4 2.9 2.3 4.9 2.3 3.1 0 4.8-1.5 5.3-2.6.5-1 0-1.8-.4-2.1-.4-.3-.9-.4-1.3-.4z" fill="#fff"/></svg>
        </a>

        <a
          href="https://github.com/YourUsername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="social"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#24292F"/><text x="12" y="16" fontSize="10" textAnchor="middle" fill="#fff" fontFamily="Arial">GH</text></svg>
        </a>

        <a
          href="https://x.com/YourHandle"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
          className="social"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#000"/><text x="12" y="16" fontSize="12" textAnchor="middle" fill="#fff" fontFamily="Arial">x</text></svg>
        </a>
      </div>

      <div className="footer-info">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>

      <p>© 2026 Garden TVET School. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
