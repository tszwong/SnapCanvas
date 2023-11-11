import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="footer">
        <div className="container text-center">
            <span className="text-muted">
                &copy; {new Date().getFullYear()} SnapCanvas. All rights reserved.
            </span>
            <Link to="/credits">Credits</Link>
        </div>
    </footer>
);

export default Footer;
