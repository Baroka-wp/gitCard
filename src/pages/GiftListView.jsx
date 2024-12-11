import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PaymentModal from '../components/PaymentModal';
import { Gift, Truck } from 'lucide-react';

const GiftListView = () => {
    const { uid } = useParams();
    const [listData, setListData] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

    useEffect(() => {
        const storedData = localStorage.getItem(`giftlist-${uid}`);
        if (storedData) {
            setListData(JSON.parse(storedData));
        }
    }, [uid]);

    const handleOffer = (product) => {
        setSelectedProduct(product);
        setIsPaymentModalOpen(true);
    };

    const handlePaymentSuccess = (productId) => {
        const updatedProducts = listData.products.map(p =>
            p.id === productId ? { ...p, isOffered: true } : p
        );
        const updatedListData = { ...listData, products: updatedProducts };
        setListData(updatedListData);
        localStorage.setItem(`giftlist-${uid}`, JSON.stringify(updatedListData));
        setIsPaymentModalOpen(false);
    };

    if (!listData) {
        return <div className="text-center mt-10">Liste non trouvée</div>;
    }

    const shippingCost = 5.99; // Frais de livraison fixes pour cet exemple

    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="bg-pink-100 rounded-lg p-6 mb-8 shadow-md">
                <h1 className="text-4xl font-bold text-pink-700 mb-4">{listData.listName}</h1>
                <div className="flex items-center text-pink-600 mb-4">
                    <Gift size={24} className="mr-2" />
                    <span className="font-semibold">Liste créée par : {listData.userInfo.firstName} {listData.userInfo.lastName}</span>
                </div>
                <p className="text-gray-700">{listData.description || "Une superbe liste de cadeaux pour une occasion spéciale !"}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {listData.products.map(product => (
                    <div key={product.id} className={`bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${product.isOffered ? 'border-2 border-green-500' : 'hover:shadow-xl'}`}>
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="font-semibold text-lg mb-2 text-pink-600">{product.name}</h3>
                            <p className="text-gray-600 mb-2 h-12 overflow-hidden">{product.description}</p>
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-bold text-pink-600">{product.price.toFixed(2)} €</span>
                                <div className="flex items-center text-gray-500">
                                    <Truck size={16} className="mr-1" />
                                    <span className="text-sm">{shippingCost.toFixed(2)} €</span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 mb-4">Quantité: {product.quantity}</p>
                            {product.isOffered ? (
                                <div className="bg-green-100 text-green-800 p-2 rounded text-center font-semibold">Déjà offert</div>
                            ) : (
                                <button
                                    onClick={() => handleOffer(product)}
                                    className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition duration-300"
                                >
                                    Offrir ce cadeau
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <PaymentModal
                isOpen={isPaymentModalOpen}
                onClose={() => setIsPaymentModalOpen(false)}
                onSuccess={() => handlePaymentSuccess(selectedProduct?.id)}
                product={selectedProduct}
                shippingCost={shippingCost}
            />
        </div>
    );
};

export default GiftListView;