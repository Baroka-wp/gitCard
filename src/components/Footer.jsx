import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-pink-900 text-pink-100 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p>&copy; {currentYear} GiftWish. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;