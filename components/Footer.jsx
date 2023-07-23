"use client";

import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.left_text}>Hacks for Hackers</div>
        <div className={styles.footer_socials}>
          <p>Follow Us On</p>
          <div className={styles.footer_socials_all}>
            <a
              href="https://www.linkedin.com/in/khemrajshrestha471/"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.facebook.com/khemrajshrestha471"
              target="_blank"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/khemrajshrestha471/"
              target="_blank"
            >
              <FiInstagram />
            </a>
          </div>
        </div>
        <div className={styles.contacts}>
        <h3>Contact Us</h3>
          <h5>Kathmandu, Nepal</h5>
          <h6>+977-9876543210</h6>
        </div>
        <div className={styles.quicklinks}>
          <ul>
            <li>links1</li>
            <li>links1</li>
            <li>links1</li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>Hacks for Hackers &copy; 2023</div>
    </>
  );
};

export default Footer;
