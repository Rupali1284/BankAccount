import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import TransactionContext from '../../context/TransactionContext';

export default function AccountDetails() {
  const data = React.useContext(TransactionContext);
  const location = useLocation();
  const [transactionDetail, setTransactionDetail] = useState({});

  useEffect(() => {
    console.log(location.state);
    setTransactionDetail(data.transactions.find((e) => e.account === location.state));
  }, [data]);

  if (!transactionDetail) {
    return (<h1>Loading....</h1>);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <span><b>Accout No:</b> {transactionDetail.account}</span>
      <span><b>Account Name:</b> {transactionDetail.accountName}</span>
      <span><b>Mask:</b> {transactionDetail.mask}</span>
      <span><b>Amount:</b> {transactionDetail.amount}</span>
      <span><b>Transaction Type:</b> {transactionDetail.transactionType}</span>
      <span><b>Currency Code:</b> {transactionDetail.currencyCode}</span>
      <span><b>Currency Name:</b> {transactionDetail.currencyName}</span>
      <span><b>Currency Symbol:</b> {transactionDetail.currencySymbol}</span>
    </div>
  )
}
