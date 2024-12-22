import React from 'react';
import giftIllustration from '../assets/bg.jpg';
import HowItWorks from '../components/HowItWorks';
import CreateList from '../components/CreateList';


const HeroSection = () => {
    return (
        <div className="relative bg-pink-50 overflow-hidden">
            {/* Image de fond */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${giftIllustration})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.2
                }}
            ></div>

            {/* Contenu du hero */}
            <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
                <div className="lg:w-1/2">
                    <h1 className="text-4xl tracking-tight font-extrabold text-pink-900 sm:text-5xl md:text-6xl">
                        <span className="block xl:inline">Créez la liste de cadeaux</span>{' '}
                        <span className="block text-pink-600 xl:inline">de vos rêves</span>
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-lg text-pink-800 sm:text-xl md:mt-5 md:max-w-3xl">
                        Avec GiftWish, choisissez les cadeaux que vous souhaitez vraiment recevoir.
                        Partagez votre liste personnalisée et assurez-vous d'obtenir des cadeaux qui vous font plaisir !
                    </p>
                    <div className="mt-10 sm:flex sm:justify-start">
                        <div className="rounded-md shadow">
                            <a href="#create-list" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 md:py-4 md:text-lg md:px-10 transition duration-300">
                                Créer ma liste
                            </a>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                            <a href="#how-it-works" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-pink-700 bg-pink-100 hover:bg-pink-200 md:py-4 md:text-lg md:px-10 transition duration-300">
                                Comment ça marche
                            </a>
                        </div>
                    </div>
                    <p className="mt-6 text-sm text-pink-700">
                        Idéal pour les mariages, anniversaires, naissances et toutes les occasions spéciales !
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;