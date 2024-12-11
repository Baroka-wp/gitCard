import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Heart, LogOut, PlusCircle } from 'lucide-react';

const Sidebar = ({ user, onLogout }) => {
    const navigate = useNavigate();

    const handleCreateList = () => {
        navigate('/create-wishlist');
    };

    return (
        <div className="w-full md:w-1/4 p-6 bg-pink-100 rounded-bl-lg">
            <div className="flex items-center mb-6">
                <img className="h-16 w-16 rounded-full mr-4" src={user.avatar || 'https://via.placeholder.com/64'} alt={user.username} />
                <div>
                    <h2 className="text-xl font-semibold text-pink-800">{user.username}</h2>
                    <p className="text-pink-600">{user.email}</p>
                </div>
            </div>
            <nav className="space-y-2">
                <SidebarLink to="/create-wishlist" icon={<PlusCircle size={20} />} text="Créer une liste" isButton onClick={handleCreateList} />
                <SidebarLink to="/wishlists" icon={<Heart size={20} />} text="Voir mes listes" />
                <SidebarLink to="/profile/info" icon={<User size={20} />} text="Informations personnelles" />
                <button
                    onClick={onLogout}
                    className="flex items-center w-full px-4 py-2 mt-4 text-pink-700 hover:bg-pink-200 rounded-md"
                >
                    <LogOut size={20} />
                    <span className="ml-3">Déconnexion</span>
                </button>
            </nav>
        </div>
    );
};

const SidebarLink = ({ to, icon, text, isButton, onClick }) => {
    const baseClasses = "flex items-center px-4 py-2 rounded-md text-pink-700 hover:bg-pink-200";

    if (isButton) {
        return (
            <button onClick={onClick} className={`${baseClasses} w-full text-left`}>
                {icon}
                <span className="ml-3">{text}</span>
            </button>
        );
    }

    return (
        <Link to={to} className={baseClasses}>
            {icon}
            <span className="ml-3">{text}</span>
        </Link>
    );
};

export default Sidebar;