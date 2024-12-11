import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const occasions = [
    "Anniversaire", "Mariage", "Naissance", "Crémaillère", "Noël", "Autre"
];

const Step1NameList = ({ next, data }) => {
    const handleSubmit = (values) => {
        next(values);
    };

    const schema = Yup.object().shape({
        listName: Yup.string().required('Le nom de la liste est requis').min(3, 'Le nom doit contenir au moins 3 caractères'),
        occasion: Yup.string().required('L\'occasion est requise')
    });

    return (
        <Formik
            initialValues={{
                listName: data.listName || '',
                occasion: data.occasion || ''
            }}
            validationSchema={schema}
            onSubmit={handleSubmit}
        >
            <Form className="space-y-4">
                <div>
                    <label htmlFor="listName" className="block text-pink-700 mb-2">Nom de votre liste</label>
                    <Field name="listName" type="text" className="w-full p-2 border border-pink-300 rounded" />
                    <ErrorMessage name="listName" component="div" className="text-red-500 mt-1" />
                </div>
                <div>
                    <label htmlFor="occasion" className="block text-pink-700 mb-2">Occasion</label>
                    <Field as="select" name="occasion" className="w-full p-2 border border-pink-300 rounded">
                        <option value="">Sélectionnez une occasion</option>
                        {occasions.map(occ => (
                            <option key={occ} value={occ}>{occ}</option>
                        ))}
                    </Field>
                    <ErrorMessage name="occasion" component="div" className="text-red-500 mt-1" />
                </div>
                <button type="submit" className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition duration-300">
                    Suivant
                </button>
            </Form>
        </Formik>
    );
};

export default Step1NameList;