import React, { useState } from 'react';
import { X } from 'lucide-react';
import GiftListCreation from './CreateListComponents/GiftListCreation';

const FullScreenModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-pink-50 z-50 overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-pink-200">
                <h2 className="text-2xl font-bold text-pink-600">Créer votre liste de cadeaux</h2>
                <button
                    onClick={onClose}
                    className="text-pink-600 hover:text-pink-800 transition duration-300"
                >
                    <X size={24} />
                </button>
            </div>
            <div className="p-4">
                <GiftListCreation />
            </div>
        </div>
    );
};

const CreateList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <section id="create-list" className="py-12 bg-pink-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-extrabold text-pink-900 mb-6">
                    Commencez maintenant à créer une liste
                </h2>
                <p className="text-xl text-pink-700 mb-8">
                    Sans contrainte ni engagement, créez votre liste de cadeaux en quelques clics !
                </p>
                <button
                    onClick={openModal}
                    className="py-3 px-6 font-medium text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition duration-300 text-lg"
                >
                    Créer une liste
                </button>
            </div>

            <FullScreenModal isOpen={isModalOpen} onClose={closeModal} />
        </section>
    );
};

export default CreateList;