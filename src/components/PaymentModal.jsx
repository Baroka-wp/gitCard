import React, { useState } from 'react';

const PaymentModal = ({ isOpen, onClose, onSuccess, product, shippingCost }) => {
    const [paymentStatus, setPaymentStatus] = useState('initial'); // 'initial', 'processing', 'success', 'error'

    if (!isOpen) return null;

    const handlePayment = () => {
        setPaymentStatus('processing');
        // Simuler un processus de paiement
        setTimeout(() => {
            setPaymentStatus('success');
            setTimeout(() => {
                onSuccess();
                setPaymentStatus('initial');
            }, 2000);
        }, 2000);
    };

    const totalCost = product ? product.price + shippingCost : 0;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">Payer pour {product?.name}</h2>
                <p className="mb-2">Prix: {product?.price.toFixed(2)} €</p>
                <p className="mb-2">Frais de livraison: {shippingCost.toFixed(2)} €</p>
                <p className="font-bold mb-4">Total: {totalCost.toFixed(2)} €</p>

                {paymentStatus === 'initial' && (
                    <button
                        onClick={handlePayment}
                        className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition duration-300"
                    >
                        Payer maintenant
                    </button>
                )}

                {paymentStatus === 'processing' && (
                    <div className="text-center">Traitement du paiement...</div>
                )}

                {paymentStatus === 'success' && (
                    <div className="text-center text-green-600">Paiement réussi !</div>
                )}

                {paymentStatus === 'error' && (
                    <div className="text-center text-red-600">Erreur de paiement. Veuillez réessayer.</div>
                )}

                <button
                    onClick={onClose}
                    className="mt-4 w-full bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400 transition duration-300"
                >
                    Fermer
                </button>
            </div>
        </div>
    );
};

export default PaymentModal;