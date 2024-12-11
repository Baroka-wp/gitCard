import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ currentPage }) => {
    return (
        <header className="bg-pink-800 text-white p-4 rounded-t-lg">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">MilleFleurs</h1>
                <nav className="text-sm">
                    <Link to="/" className="text-pink-200 hover:text-white mr-4">Accueil</Link>
                    <span className="text-pink-200">/</span>
                    <span className="ml-4 text-white">{currentPage}</span>
                </nav>
            </div>
        </header>
    );
};

export default Header;