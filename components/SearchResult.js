import styles from './SearchResult.module.css';

export default function SearchResult(props) {
  const { movie, setNominations, nominations } = props;

  const handleClick = () => {
    setNominations(nominations => [...nominations, movie]);
  }

  const shouldBeDisabled = () => {
    const exists = nominations.filter(item => item.imdbID === movie.imdbID);
    const limitReached = nominations.length === 5;
    if (limitReached || exists.length > 0) {
      return styles.disabled;
    } else {
      return '';
    }
  }

  return (
    <li className={`${styles.result} ${shouldBeDisabled()}`}>
      <img className={styles.image} src={movie.Poster} />
      <h3 className={styles.title} >{movie.Title} ({movie.Year})</h3>
      <button className={styles.button} type='button' onClick={handleClick}>Nominate</button>
    </li>
  );
}
