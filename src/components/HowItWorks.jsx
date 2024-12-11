import React from 'react';
import { PenLine, Share2, Gift, Truck } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            title: "Créez votre liste",
            description: "Ajoutez facilement les cadeaux que vous souhaitez recevoir.",
            icon: PenLine,
        },
        {
            title: "Partagez avec vos proches",
            description: "Envoyez le lien de votre liste à vos amis et votre famille.",
            icon: Share2,
        },
        {
            title: "Recevez vos cadeaux",
            description: "Vos proches choisissent et achètent les cadeaux de votre liste.",
            icon: Gift,
        },
        {
            title: "Nous livrons pour vous",
            description: "Nous nous chargeons de la livraison des cadeaux.",
            icon: Truck,
        },
    ];

    return (
        <section id="how-it-works" className="py-12 bg-pink-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-pink-900 text-center mb-12">
                    Comment ça marche
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-pink-100 text-pink-600 mb-4">
                                <step.icon size={32} />
                            </div>
                            <h3 className="text-xl font-semibold text-pink-900 mb-2">{step.title}</h3>
                            <p className="text-pink-700">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;