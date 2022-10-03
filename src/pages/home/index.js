import React from 'react';
import styles from './home.module.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to State Street Accounts</h1>
      <hr className={styles.hr} />

      <Link to="/transactions" className={styles.linkBtn}>
        <span>Transactions »</span>
      </Link>
    </div>
  )
}
