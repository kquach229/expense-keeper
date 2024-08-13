import React from 'react';
import { Transaction } from '@/types/Transaction';
import getTransactions from '@/app/actions/getTransactions';
import TransactionItem from './TransactionItem';
const TransactionList = async () => {
  const { transactions, error } = await getTransactions();
  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transactions &&
          transactions.map((transaction: Transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))}
      </ul>
    </>
  );
};

export default TransactionList;
