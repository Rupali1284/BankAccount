import React, { useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';
import styles from './header.module.css';

export default function Headers() {

  const location = useLocation();
  const [heading, setHeading] = React.useState('');

  useEffect(() => {
    if (location.pathname === ROUTES.TRANSACTION.path) {
      setHeading(ROUTES.TRANSACTION.name);
    }
    else if (location.pathname === ROUTES.ACCOUNT.path) {
      setHeading(ROUTES.ACCOUNT.name);
    }
  }, [location])

  return (
    <React.Fragment>
      <div className={styles.header}>
        <h2>My {heading}</h2>
      </div>
      <hr style={{ marginBottom: '20px' }} />
      <Outlet />
    </React.Fragment>
  )
}
