import React from 'react';
import { Routes, Route } from 'react-router-dom';
import style from './app.module.css'
import Home from './pages/home';
import AccountDetails from './pages/account-details';
import Transactions from './pages/transaction';
import Headers from './pages/commons/Headers';
import { ROUTES } from './utils/constants';
import TransactionContext from './context/TransactionContext';
import transactionData from './utils/transactions.json';

export default function App() {
  return (
    <TransactionContext.Provider value={transactionData}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Headers />} >
          <Route path={ROUTES.TRANSACTION.path} element={<Transactions />} />
          <Route path={ROUTES.ACCOUNT.path} element={<AccountDetails />} />
        </Route>
        <Route path="*" element={<h1>404 NOTE FOUND</h1>} />
      </Routes>
    </TransactionContext.Provider>
  )
}
