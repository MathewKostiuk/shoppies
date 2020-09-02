import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchResultsList from '../components/SearchResultsList';
import NominationsList from '../components/NominationsList';
import Banner from '../components/Banner';

export default function Home() {
  const [searchResults, setSearchResults] = useState([]);
  const [nominations, setNominations] = useState([]);

  useEffect(() => {
    const cachedNominations = localStorage.getItem('nomination-list');
    if (cachedNominations) {
      setNominations(JSON.parse(cachedNominations));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('nomination-list', JSON.stringify(nominations));
  }, [nominations]);

  return (
    <div>
      <Head>
        <title>The Shoppies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Banner shouldDisplay={nominations.length === 5} /> */}
      <Header setSearchResults={setSearchResults} />
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
      />
    </div>
  );
}
