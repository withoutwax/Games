import React from 'react';

const Footer: React.FC = () => {
    let currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>Copyright &copy; {currentYear} Will Kim</p>
            <p>Invely's</p>
        </footer>
    );
};

export default Footer;