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
        <svg aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <title>Close icon</title>
          <path d="M17 1L1 17" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round" />
          <path d="M1 1L17 17" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round" />
        </svg>
      </button>
    </li>
  )
}
