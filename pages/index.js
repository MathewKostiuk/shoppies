import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SearchForm from '../components/SearchForm';
import { useState } from 'react';

export default function Home() {
  const [nominations, setNominations] = useState([]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchForm nominations={nominations} setNominations={setNominations} />
    </div>
  )
}
