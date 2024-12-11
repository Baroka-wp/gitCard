import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Step3UserInfo = ({ next, prev, data }) => {
    const handleSubmit = (values) => {
        next({ ...data, userInfo: values });
    };

    const schema = Yup.object().shape({
        firstName: Yup.string().required('Le prénom est requis'),
        lastName: Yup.string().required('Le nom est requis'),
        address: Yup.string().required('L\'adresse est requise'),
        phone: Yup.string().required('Le numéro de téléphone est requis')
    });

    return (
        <Formik
            initialValues={data.userInfo || { firstName: '', lastName: '', address: '', phone: '' }}
            validationSchema={schema}
            onSubmit={handleSubmit}
        >
            {({ values }) => (
                <Form className="space-y-4">
                    <div>
                        <label htmlFor="firstName" className="block text-pink-700 mb-2">Prénom</label>
                        <Field name="firstName" type="text" className="w-full p-2 border border-pink-300 rounded" />
                        <ErrorMessage name="firstName" component="div" className="text-red-500 mt-1" />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-pink-700 mb-2">Nom</label>
                        <Field name="lastName" type="text" className="w-full p-2 border border-pink-300 rounded" />
                        <ErrorMessage name="lastName" component="div" className="text-red-500 mt-1" />
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-pink-700 mb-2">Adresse de livraison</label>
                        <Field name="address" as="textarea" className="w-full p-2 border border-pink-300 rounded" />
                        <ErrorMessage name="address" component="div" className="text-red-500 mt-1" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-pink-700 mb-2">Téléphone</label>
                        <Field name="phone" type="tel" className="w-full p-2 border border-pink-300 rounded" />
                        <ErrorMessage name="phone" component="div" className="text-red-500 mt-1" />
                    </div>
                    <div className="flex justify-between mt-4">
                        <button type="button" onClick={() => prev({ ...data, userInfo: values })} className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition duration-300">
                            Précédent
                        </button>
                        <button type="submit" className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 transition duration-300">
                            Suivant
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default Step3UserInfo;