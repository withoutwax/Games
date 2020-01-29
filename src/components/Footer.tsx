import React from 'react';

const Footer: React.FC = () => {
    let currentYear = new Date().getFullYear();

    return (
        <footer>
            <p><span role="img" aria-label="pingpong">🕹</span> Copyright &copy; {currentYear} Will Kim <span role="img" aria-label="pingpong">👾</span></p>
            <p>Invely's</p>
        </footer>
    );
};

export default Footer;