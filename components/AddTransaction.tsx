'use client';
import addTransaction from '@/app/actions/addTransaction';
import { toast } from 'react-toastify';
import { useRef } from 'react';

import React from 'react';

const AddTransaction = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const clientAction = async (formData: FormData) => {
    const result = await addTransaction(formData);

    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success('Transaction added!');
      formRef.current?.reset();
    }
  };
  return (
    <div>
      <h3>Add transaction</h3>
      <form ref={formRef} action={clientAction}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            id='text'
            name='text'
            placeholder='enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br /> (negative - expense, positive - income)
          </label>
          <input
            type='number'
            id='amount'
            step='0.01'
            name='amount'
            placeholder='enter amount...'
          />
        </div>
        <button className='btn'>Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
