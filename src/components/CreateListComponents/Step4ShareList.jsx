import React, { useState } from 'react';
import { Share2 } from 'lucide-react';

const Step4ShareList = ({ next, prev, data }) => {
    const [copied, setCopied] = useState(false);
    const [showAccountOptions, setShowAccountOptions] = useState(false);

    const uid = data.uid || 'default-uid';
    const shareLink = `${window.location.origin}/list/${uid}`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(shareLink).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const shareOnSocialMedia = (platform) => {
        console.log(`Partage sur ${platform}: ${shareLink}`);
    };

    const handleFinish = (args) => {
        setShowAccountOptions(args);
    };

    const handleAccountDecision = (createAccount) => {
        const finalData = {
            ...data,
            shareLink,
            hasAccount: createAccount
        };

        localStorage.setItem(`giftlist-${uid}`, JSON.stringify(finalData));

        if (createAccount) {
            // Rediriger vers la page de création de compte
            console.log("Redirection vers la création de compte");
        } else {
            // Afficher un message d'avertissement
            alert("Votre liste a été créée, mais ne pourra plus être modifiée. Vous pourrez uniquement suivre son évolution.");
            // Rediriger vers la page de la liste
            console.log("Redirection vers la page de la liste");
        }
    };

    if (showAccountOptions) {
        return (
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-pink-600 mb-4">Créer un compte ?</h3>
                <p className="text-gray-700">Créer un compte vous permettra de modifier votre liste plus tard.</p>
                <div className="flex justify-between">
                    <button onClick={() => handleFinish(false)} className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition duration-300">
                        Liste de partage
                    </button>
                    <button onClick={() => handleAccountDecision(true)} className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 transition duration-300">
                        Créer un compte
                    </button>
                    <button onClick={() => handleAccountDecision(false)} className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition duration-300">
                        Non, merci
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <h3 className="text-2xl font-bold text-pink-600 mb-4">Partagez votre liste</h3>
            <div>
                <p className="text-pink-700 mb-2">Lien de votre liste :</p>
                <div className="flex items-center">
                    <input
                        type="text"
                        value={shareLink}
                        readOnly
                        className="flex-grow p-2 border border-pink-300 rounded-l"
                    />
                    <button
                        onClick={copyToClipboard}
                        className="bg-pink-600 text-white p-2 rounded-r hover:bg-pink-700 transition duration-300"
                    >
                        {copied ? 'Copié !' : 'Copier'}
                    </button>
                </div>
            </div>
            <div>
                <p className="text-pink-700 mb-2">Partager sur les réseaux sociaux :</p>
                <div className="flex space-x-4">
                    <button onClick={() => shareOnSocialMedia('facebook')} className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-300">
                        Facebook
                    </button>
                    <button onClick={() => shareOnSocialMedia('twitter')} className="bg-blue-400 text-white p-2 rounded hover:bg-blue-500 transition duration-300">
                        Twitter
                    </button>
                    <button onClick={() => shareOnSocialMedia('whatsapp')} className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-300">
                        WhatsApp
                    </button>
                </div>
            </div>
            <div className="flex justify-between mt-4">
                <button onClick={() => prev(data)} className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition duration-300">
                    Précédent
                </button>
                <button onClick={() => handleFinish(true)} className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 transition duration-300">
                    Terminer
                </button>
            </div>
        </div>
    );
};

export default Step4ShareList;