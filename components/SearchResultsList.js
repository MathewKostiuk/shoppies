import SearchResult from './SearchResult';
import styles from './SearchResultsList.module.css';

export default function SearchResultsList(props) {
  const { results, setNominations, nominations } = props;

  const list = results.map((movie, index) => {
    return <SearchResult
      movie={movie}
      setNominations={setNominations}
      nominations={nominations}
      key={index}
    />
  });

  return (
    <ul className={styles.list}>
      {list}
    </ul>
  );
}
