import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-pink-50 shadow-md' : 'bg-transparent'}`}>
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
                        <span className="font-semibold text-pink-600 text-lg">GiftWish</span>
                    </Link>
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="hero" smooth={true} duration={500} className="cursor-pointer py-2 px-2 font-medium text-pink-900 hover:text-pink-600 transition duration-300">Accueil</Link>
                        <Link to="how-it-works" smooth={true} duration={500} className="cursor-pointer py-2 px-2 font-medium text-pink-900 hover:text-pink-600 transition duration-300">Comment ça marche</Link>
                        <Link to="create-list" smooth={true} duration={500} className="cursor-pointer py-2 px-2 font-medium text-pink-900 hover:text-pink-600 transition duration-300">Créer une liste</Link>
                        <a href="#" className="py-2 px-4 font-medium text-white bg-pink-500 rounded hover:bg-pink-600 transition duration-300">Connexion</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;