// Footer.js

import React from 'react';
import styles from '@/styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerection}>
                <div className={styles.footerlogo}>
                    <img src="/blap1.jpg" alt="Company Logo" />
                </div>
                <div className={styles.footeraddress}>
                    <p>123 Street, Varanasi</p>
                    <p>INDIA</p>
                </div>
            </div>
            <div className={styles.footersection}>
                <h3>Products</h3>
                <div className={styles.sociallinks}>
                    {/* Add your social media icons and links here */}
                    <a href="#facebook">Facebook</a>
                    <a href="#twitter">Twitter</a>
                    <a href="#instagram">Instagram</a>
                </div>
            </div><div className={styles.footersection}>
                <h3>Policy</h3>
                <div className={styles.sociallinks}>
                    {/* Add your social media icons and links here */}
                    <a href="#facebook">Facebook</a>
                    <a href="#twitter">Twitter</a>
                    <a href="#instagram">Instagram</a>
                </div>
            </div>
            <div className={styles.footersection}>
                <h3>Follow Us</h3>
                <div className={styles.sociallinks}>
                    {/* Add your social media icons and links here */}
                    <a href="#facebook">Facebook</a>
                    <a href="#twitter">Twitter</a>
                    <a href="#instagram">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
