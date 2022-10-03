import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TransactionContext from '../../context/TransactionContext';
import styles from './transaction.module.css';
import { ACCOUNT_FILTER, TRANSACTION_FILTER } from '../../utils/constants';
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

export default function Transactions() {
  const transactionContext = React.useContext(TransactionContext);
  const [transactions, setTransactions] = useState([]);
  const [accountFilter, setAccountFilter] = useState([]);
  const [transactionFilter, setTransactionFilter] = useState([]);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    if (transactionContext) {
      setTransactions(transactionContext.transactions);
    }
  }, [transactionContext]);

  const accountNameFilter = (event) => {
    if (accountFilter.includes(event.target.value)) {
      accountFilter.splice(accountFilter.indexOf(event.target.value), 1)
      setAccountFilter(accountFilter);
    } else {
      let filter = accountFilter;
      filter.push(event.target.value);
      setAccountFilter(filter);
    }
    filterData();
  }

  const transactionTypeFilter = (event) => {
    if (transactionFilter.includes(event.target.value)) {
      transactionFilter.splice(transactionFilter.indexOf(event.target.value), 1)
      setTransactionFilter(transactionFilter);
    } else {
      let filter = transactionFilter;
      filter.push(event.target.value);
      setTransactionFilter(filter);
    }
    filterData();
  }

  const filterData = () => {
    if (accountFilter.length == 0 && transactionFilter.length == 0) {
      setTransactions(transactionContext.transactions);
    }
    if (accountFilter.length > 0 && transactionFilter.length > 0) {
      setTransactions(transactionContext.transactions.filter((e) => accountFilter.includes(e.accountName) && transactionFilter.includes(e.transactionType)));
    } else {
      if (accountFilter.length > 0) {
        setTransactions(transactionContext.transactions.filter((e) => accountFilter.includes(e.accountName)));
      }
      if (transactionFilter.length > 0) {
        setTransactions(transactionContext.transactions.filter((e) => transactionFilter.includes(e.transactionType)));
      }
    }
  }

  const Row = ({ index, style }) => {
    return (
      <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
        <tr style={{ display: 'inline-table', width: '100%' }}>
          <td><Link to="/account-details" state={transactions[index].account}>{transactions[index].account}</Link></td>
          <td>{transactions[index].accountName}</td>
          <td>{transactions[index].currencyCode}</td>
          <td>{transactions[index].amount}</td>
          <td>{transactions[index].transactionType}</td>
        </tr>
      </div>
    )
  };

  return (
    <div className={styles.content}>
      <div className={styles.filterContent}>
        <h4 style={{ paddingTop: '10px' }}>Filters</h4>
        <div className={styles.filterContentBox}>
          <h3>Account Name</h3>
          {
            ACCOUNT_FILTER.map(element => {
              return (
                <React.Fragment key={element}>
                  <label>
                    <input
                      type={'checkbox'}
                      value={element}
                      onClick={accountNameFilter}
                      style={{ margin: '10px 10px 10px 0px' }} />
                    {element}
                  </label> <br />
                </React.Fragment>
              )
            })
          }
        </div>
        <div className={styles.filterContentBox}>
          <h3>Transaction Type</h3>
          {
            TRANSACTION_FILTER.map(element => {
              return (
                <React.Fragment key={element}>
                  <label>
                    <input
                      type={'checkbox'}
                      value={element}
                      onClick={transactionTypeFilter}
                      style={{ margin: '10px 10px 10px 0px' }} />
                    {element}
                  </label> <br />
                </React.Fragment>
              )
            })
          }
        </div>
      </div>
      <div className={styles.tableContent}>
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>ACCOUNT NO.</th>
              <th>ACCOUNT NAME</th>
              <th>CURRENCY</th>
              <th>AMOUNT</th>
              <th>TRANSACTION TYPE</th>
            </tr>
          </thead>
          <AutoSizer>
            {({ height, width }) => (
              <List
                className="List"
                height={height}
                itemCount={transactions.length}
                itemSize={40}
                width={width}
              >
                {Row}
              </List>
            )}
          </AutoSizer>
        </table>
      </div>
    </div>

  )
}
