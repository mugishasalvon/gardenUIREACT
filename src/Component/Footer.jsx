import { FaFacebook, FaInstagram, FaWhatsapp, FaGithub, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import "../Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <a
          href="https://facebook.com/GardenTVET"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="social facebook"
        >
          <FaFacebook size={24} />
        </a>

        <a
          href="https://instagram.com/GardenTVET"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="social instagram"
        >
          <FaInstagram size={24} />
        </a>

        <a
          href="https://wa.me/250722336363"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="social whatsapp"
        >
          <FaWhatsapp size={24} />
        </a>

        <a
          href="https://github.com/GardenTVET"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="social github"
        >
          <FaGithub size={24} />
        </a>

        <a
          href="https://twitter.com/GardenTVET"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="social twitter"
        >
          <FaTwitter size={24} />
        </a>

        <a
          href="https://linkedin.com/GardenTVET"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="social linkedin"
        >
          <FaLinkedin size={24} />
        </a>

        <a
          href="https://youtube.com/GardenTVET"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="social youtube"
        >
          <FaYoutube size={24} />
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
