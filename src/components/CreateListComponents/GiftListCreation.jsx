import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Step1NameList from './Step1NameList';
import Step2ProductSelection from './Step2ProductSelection';
import Step3UserInfo from './Step3UserInfo';
import Step4ShareList from './Step4ShareList';

const GiftListCreation = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        listName: '',
        products: [],
        userInfo: {},
        shareLink: ''
    });

    const handleNextStep = (newData, final = false) => {
        setFormData(prev => ({ ...prev, ...newData }));
        if (final) {
            // Ici, vous pouvez envoyer les données au serveur
            console.log(newData);
            return;
        }
        setStep(prev => prev + 1);
    };

    const handlePrevStep = (newData) => {
        setFormData(prev => ({ ...prev, ...newData }));
        setStep(prev => prev - 1);
    };

    const steps = [
        <Step1NameList next={handleNextStep} data={formData} />,
        <Step2ProductSelection next={handleNextStep} prev={handlePrevStep} data={formData} />,
        <Step3UserInfo next={handleNextStep} prev={handlePrevStep} data={formData} />,
        <Step4ShareList next={handleNextStep} prev={handlePrevStep} data={formData} />
    ];

    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">Créez votre liste de cadeaux</h2>
            {steps[step - 1]}
        </div>
    );
};

export default GiftListCreation;