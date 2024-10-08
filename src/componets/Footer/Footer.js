import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-col">
            <h1>
              Bloom <span>Beauty</span>
            </h1>
            <p className="footer-p">
              Discover nature's beauty with our natural care products.
            </p>
            <p className="footer-p">+ 82 21234567</p>
            <p className="footer-p">bloombt@kmail.com </p>
            <p className="footer-p">Seoul 07777, Republic of Korea</p>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">About</h4>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">My account</h4>
            <ul>
              <li>
                <a href="#">Order Status</a>
              </li>
              <li>
                <a href="#">Rewards</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Customer care</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Shipping Information</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Returns & Exchanges</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Sign up for email</h4>
            <p className="footer-p">
              Stay informed, subscribe to our newsletter now!
            </p>
            <input type="text" className="footer-input" placeholder="Email" />
            <div className="footer-sub-container">
              <p className="footer-sub-text">Subscribe</p>
              <FontAwesomeIcon className="footer-sub-icon" icon={faArrowRight} />
            </div>
          </div>
        </div>
        <hr />
        <div className="copyright">
          <div className="copyright-container">
            <p className="copyright-p">© 2023 Bloom Beauty </p>
          </div>
          <div className="copyright-container">
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
