import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { FaApple, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import backgroundImage from '../assets/bg.jpg';


const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
            const payload = isLogin ? { email, password } : { username, email, password };
            const response = await axios.post(`http://localhost:5001${endpoint}`, payload);
            localStorage.setItem('token', response.data.token);
            navigate('/profile');
        } catch (err) {
            setError(err.response?.data?.message || 'Une erreur est survenue');
        }
    };

    const toggleMode = () => {
        setIsLogin(!isLogin);
        setError('');
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="bg-white bg-opacity-90 rounded-3xl shadow-xl overflow-hidden max-w-md w-full p-8">
                <Link to="/" className="absolute top-4 left-4 text-pink-600 hover:text-pink-700 flex items-center">
                    <ArrowLeft className="w-5 h-5 mr-1" />
                    <span>Retour à l'accueil</span>
                </Link>
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-pink-600 mb-2 font-serif italic tracking-wide">
                        MilleFleurs
                    </h1>
                    <h2 className="text-2xl font-bold text-pink-800">Bienvenue</h2>
                    <p className="text-pink-700">
                        {isLogin ? "Connectez-vous à votre compte" : "Créez votre compte"}
                    </p>
                </div>

                <div className="flex justify-center space-x-4 mb-6">
                    <button className="w-12 h-12 rounded-full border border-pink-300 flex items-center justify-center bg-white">
                        <FaApple className="text-pink-600 w-6 h-6" />
                    </button>
                    <button className="w-12 h-12 rounded-full border border-pink-300 flex items-center justify-center bg-white">
                        <FaGoogle className="text-pink-600 w-6 h-6" />
                    </button>
                    <button className="w-12 h-12 rounded-full border border-pink-300 flex items-center justify-center bg-white">
                        <FaTwitter className="text-pink-600 w-6 h-6" />
                    </button>
                </div>

                <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-pink-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-pink-600">OU</span>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {!isLogin && (
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-pink-700 mb-1">Nom d'utilisateur</label>
                            <input
                                id="username"
                                type="text"
                                placeholder="Entrez votre nom d'utilisateur..."
                                className="w-full px-4 py-3 rounded-lg border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required={!isLogin}
                            />
                        </div>
                    )}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-pink-700 mb-1">Adresse e-mail</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Entrez votre email..."
                            className="w-full px-4 py-3 rounded-lg border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-pink-700 mb-1">Mot de passe</label>
                        <div className="relative">
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••••"
                                className="w-full px-4 py-3 rounded-lg border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff className="h-5 w-5 text-pink-400" /> : <Eye className="h-5 w-5 text-pink-400" />}
                            </button>
                        </div>
                    </div>
                    {isLogin && (
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-pink-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-pink-700">
                                    Se souvenir de moi
                                </label>
                            </div>
                            <div className="text-sm">
                                <a href="#" className="font-medium text-pink-600 hover:text-pink-500">
                                    Mot de passe oublié ?
                                </a>
                            </div>
                        </div>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-pink-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-pink-700 transition duration-300"
                    >
                        {isLogin ? "Se connecter" : "S'inscrire"}
                    </button>
                </form>
                {error && <p className="mt-4 text-red-600 text-sm text-center">{error}</p>}
                <p className="mt-8 text-center text-sm text-pink-700">
                    {isLogin ? "Vous n'avez pas de compte ?" : "Vous avez déjà un compte ?"}
                    <button onClick={toggleMode} className="font-medium text-pink-600 hover:text-pink-500 ml-1">
                        {isLogin ? "S'inscrire" : "Se connecter"}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default AuthPage;