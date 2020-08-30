import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import Header from '../components/Header';
import SearchResultsList from '../components/SearchResultsList';
import NominationsList from '../components/NominationsList';
import Banner from '../components/Banner';

export default function Home() {
  const [searchResults, setSearchResults] = useState([]);
  const [nominations, setNominations] = useState([]);

  const searchResultsList = searchResults && searchResults[0] && (
    <SearchResultsList
      results={searchResults}
      setNominations={setNominations}
      nominations={nominations}
    />
  );

  const nominationsList = nominations && nominations.length > 0 && (
    <NominationsList
      nominations={nominations}
      setNominations={setNominations}
    />
  );

  const banner = nominations && nominations.length === 5 && (
    <Banner />
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>The Shoppies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner shouldDisplay={nominations.length === 5} />
      <Header setSearchResults={setSearchResults} />
      <main className={styles.grid}>
        {searchResultsList}
        {nominationsList}
      </main>
    </div>
  );
}
