import React, { useEffect } from 'react';
import { useKKiaPay } from 'kkiapay-react';


function Payement() {
  const { openKkiapayWidget, addKkiapayListener, removeKkiapayListener } = useKKiaPay();

  function open() {
    openKkiapayWidget({
      amount: 4000,
      api_key: import.meta.env.VITE_KKIAPAY_API_KEY,
      sandbox: true,
      email: "ekpomachi@gmail.com",
      phone: "0168548443",
    });
  }

  function successHandler(response) {
    console.log(response);
  }

  function failureHandler(error) {
    console.log(error);
  }

  useEffect(() => {
    addKkiapayListener('success', successHandler);
    addKkiapayListener('failed', failureHandler);

    return () => {
      removeKkiapayListener('success', successHandler);
      removeKkiapayListener('failed', failureHandler);
    };
  }, [addKkiapayListener, removeKkiapayListener]);

  return <button className='text-red-900' onClick={open}>Payer</button>;
}

export default Payement;