import styles from './Header.module.css';
import SearchForm from '../components/SearchForm';

export default function Header(props) {
  const { setSearchResults } = props;

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>The Shoppies Nominations</h1>
      <SearchForm setSearchResults={setSearchResults} />
    </header>
  );
}
