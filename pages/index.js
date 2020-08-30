import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import SearchForm from '../components/SearchForm';
import NominationsList from '../components/NominationsList';

export default function Home() {
  const [nominations, setNominations] = useState([]);

  const nominationsList = nominations && nominations.length > 0 && (
    <NominationsList
      nominations={nominations}
      setNominations={setNominations}
    />
  )

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchForm nominations={nominations} setNominations={setNominations} />
      {nominationsList}
    </div>
  )
}
