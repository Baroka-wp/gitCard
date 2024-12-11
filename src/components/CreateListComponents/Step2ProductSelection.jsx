import React, { useState, useEffect } from 'react';
import { dummyProducts } from '../../utils/dumydata.js';
import { v4 as uuidv4 } from 'uuid';
import { ShoppingCart, Minus, Plus, X } from 'lucide-react';

const occasions = [
    "Anniversaire", "Mariage", "Naissance", "Crémaillère", "Noël", "Autre"
];

const Step2ProductSelection = ({ next, prev, data }) => {
    const [selectedProducts, setSelectedProducts] = useState(data.products || []);
    const [occasion, setOccasion] = useState(data.occasion || '');
    const [showCart, setShowCart] = useState(false);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'visible';
        };
    }, []);

    const handleProductToggle = (product) => {
        const index = selectedProducts.findIndex(p => p.id === product.id);
        if (index === -1) {
            setSelectedProducts([...selectedProducts, { ...product, quantity: 1 }]);
        } else {
            setSelectedProducts(selectedProducts.filter(p => p.id !== product.id));
        }
    };

    const handleQuantityChange = (productId, newQuantity) => {
        setSelectedProducts(selectedProducts.map(p =>
            p.id === productId ? { ...p, quantity: Math.max(1, newQuantity) } : p
        ));
    };

    const handleSubmit = () => {
        const listName = data.listName.toLowerCase().replace(/\s+/g, '-');
        const uid = uuidv4();
        const shareLink = `${window.location.origin}/list/${listName}-${uid}`;

        const listData = {
            ...data,
            products: selectedProducts,
            occasion,
            uid,
            shareLink
        };

        localStorage.setItem(`giftlist-${uid}`, JSON.stringify(listData));
        next({ products: selectedProducts, occasion, uid, shareLink });
    };

    const totalItems = selectedProducts.reduce((sum, product) => sum + product.quantity, 0);
    const totalPrice = selectedProducts.reduce((sum, product) => sum + (product.price * product.quantity), 0);

    return (
        <div className="fixed inset-0 bg-gray-100 overflow-y-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h2 className="text-3xl font-bold text-pink-700 mb-6">Créez votre liste de cadeaux</h2>

                <div className="mb-8 flex justify-between items-center">
                    <div className="w-1/2">
                        <label htmlFor="occasion" className="block text-lg font-medium text-gray-700 mb-2">
                            Choisissez l'occasion
                        </label>
                        <select
                            id="occasion"
                            value={occasion}
                            onChange={(e) => setOccasion(e.target.value)}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md"
                        >
                            <option value="">Sélectionnez une occasion</option>
                            {occasions.map((occ) => (
                                <option key={occ} value={occ}>{occ}</option>
                            ))}
                        </select>
                    </div>
                    <button
                        onClick={() => setShowCart(true)}
                        className="bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition-colors flex items-center"
                    >
                        <ShoppingCart size={20} className="mr-2" />
                        Panier ({totalItems})
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dummyProducts.map(product => (
                        <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                            <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="font-semibold text-xl mb-2 text-pink-600">{product.name}</h3>
                                <p className="text-gray-600 mb-4">{product.description}</p>
                                <div className="flex justify-between items-center mb-4">
                                    <p className="font-bold text-2xl text-pink-600">{product.price.toFixed(2)} €</p>
                                    {selectedProducts.some(p => p.id === product.id) ? (
                                        <div className="flex items-center">
                                            <button onClick={() => handleQuantityChange(product.id, selectedProducts.find(p => p.id === product.id).quantity - 1)} className="p-2 bg-pink-100 text-pink-600 rounded-l hover:bg-pink-200 transition-colors">
                                                <Minus size={20} />
                                            </button>
                                            <span className="px-4 py-2 bg-pink-50 text-pink-600 font-semibold">
                                                {selectedProducts.find(p => p.id === product.id).quantity}
                                            </span>
                                            <button onClick={() => handleQuantityChange(product.id, selectedProducts.find(p => p.id === product.id).quantity + 1)} className="p-2 bg-pink-100 text-pink-600 rounded-r hover:bg-pink-200 transition-colors">
                                                <Plus size={20} />
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => handleProductToggle(product)}
                                            className="flex items-center justify-center px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors"
                                        >
                                            <ShoppingCart size={20} className="mr-2" />
                                            Ajouter
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between mt-8">
                    <button type="button" onClick={prev} className="bg-gray-300 text-gray-700 py-2 px-6 rounded-md hover:bg-gray-400 transition-colors">
                        Précédent
                    </button>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="bg-pink-600 text-white py-2 px-6 rounded-md hover:bg-pink-700 transition-colors"
                        disabled={selectedProducts.length === 0 || !occasion}
                    >
                        Suivant
                    </button>
                </div>
            </div>

            {showCart && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
                    <div className="bg-white w-full max-w-md p-6 overflow-y-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-2xl font-bold text-pink-700">Votre panier</h3>
                            <button onClick={() => setShowCart(false)} className="text-gray-500 hover:text-gray-700">
                                <X size={24} />
                            </button>
                        </div>
                        {selectedProducts.map(product => (
                            <div key={product.id} className="flex justify-between items-center py-2 border-b">
                                <div>
                                    <p className="font-semibold">{product.name}</p>
                                    <p className="text-sm text-gray-500">{product.quantity} x {product.price.toFixed(2)} €</p>
                                </div>
                                <button onClick={() => handleProductToggle(product)} className="text-red-500 hover:text-red-700">
                                    <X size={20} />
                                </button>
                            </div>
                        ))}
                        <div className="mt-4">
                            <p className="text-xl font-bold">Total: {totalPrice.toFixed(2)} €</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Step2ProductSelection;