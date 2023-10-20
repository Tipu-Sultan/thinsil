import React from 'react';
import { Link } from 'react-router-dom';
import '../style/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-column">
        <div className="footer-logo">Company Logo</div>
        <p className="footer-title">About Us</p>
        <p>Your about us text goes here.</p>
      </div>

      <div className="footer-column">
        <p className="footer-title">Useful Links</p>
        <div className="footer-links">
          <ul>
            <li><Link href="#">Link 1</Link></li>
            <li><Link href="#">Link 2</Link></li>
            <li><Link href="#">Link 3</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-column">
        <p className="footer-title">Follow Us</p>
        <div className="footer-social-icons">
          <Link href="#" className="fab fa-facebook"></Link>
          <Link href="#" className="fab fa-twitter"></Link>
          <Link href="#" className="fab fa-instagram"></Link>
        </div>
      </div>

      <div className="footer-column">
        <p className="footer-title">About &copy; Tipu Sultan 2023-24</p>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
