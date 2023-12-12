import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="footer">
        <div className="container text-center">
            {/* get the current year and put it in our credit statement */}
            <span className="text-muted">&copy; {new Date().getFullYear()} SnapCanvas. All rights reserved. </span>

            {/* route the link to the credit endpoint */}
            <Link to="/credits">Credits</Link>
        </div>
    </footer>
);

export default Footer;
