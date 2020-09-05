import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchResultsList from '../components/SearchResultsList';
import NominationsList from '../components/NominationsList';

import {
  Snackbar,
} from '@material-ui/core';

import {
  Alert,
} from '@material-ui/lab'

export default function Home() {
  const [searchResults, setSearchResults] = useState([]);
  const [nominations, setNominations] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerOpen(open);
  }

  const Notification = (props) => {
    return <Alert elevation={6} variant='filled' {...props} />;
  }

  const handleClose = () => {
    setShowNotification(false);
  }

  useEffect(() => {
    const cachedNominations = localStorage.getItem('nomination-list');
    if (cachedNominations) {
      setNominations(JSON.parse(cachedNominations));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('nomination-list', JSON.stringify(nominations));
    if (nominations.length === 5) {
      setShowNotification(true);
    }
  }, [nominations]);

  return (
    <div>
      <Head>
        <title>The Shoppies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        setSearchResults={setSearchResults}
        toggleDrawer={toggleDrawer}
        nominations={nominations}
      />
      <Snackbar 
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={5000}
        open={showNotification}
        onClose={handleClose}
      >
        <Notification onClose={handleClose} severity='success'>Thank you for submitting your movie nominations!</Notification>
      </Snackbar>
      <main className={styles.root}>
        <SearchResultsList
          results={searchResults}
          setNominations={setNominations}
          nominations={nominations}
        />
      </main>
      <NominationsList
        nominations={nominations}
        setNominations={setNominations}
        drawerOpen={drawerOpen}
        toggleDrawer={toggleDrawer}
      />
      <a href='https://www.freepik.com/vectors/people'>People vector created by pch.vector - www.freepik.com</a>
    </div>
  );
}
