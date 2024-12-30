import React, { useEffect } from 'react';
import { useKKiaPay } from 'kkiapay-react';


function Payement() {
  const { openKkiapayWidget, addKkiapayListener, removeKkiapayListener } = useKKiaPay();
  function open() {
    console.log("button clicked");
    openKkiapayWidget({
      amount: 4000,
      api_key: import.meta.env.VITE_KKIA_PAY_KEY,
      email: "adjoviyvette6@gmail.com",
      phone: "2290156784121",
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