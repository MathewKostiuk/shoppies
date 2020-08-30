import styles from './Nomination.module.css';

export default function Nomination(props) {
  const { nomination, setNominations } = props;

  const handleClick = () => {
    setNominations(nominations => {
      return nominations.filter(item => item.imdbID !== nomination.imdbID);
    })
  }

  return (
    <li className={styles.nomination}>
      <span>
        {nomination.Title} ({nomination.Year})
      </span>
      <button className={styles.button} type='button' onClick={handleClick}>
        X
      </button>
    </li>
  )
}
