import Nomination from './Nomination';
import styles from './NominationsList.module.css';

export default function NominationsList(props) {
  const { nominations, setNominations } = props;

  const list = nominations && nominations.length > 0 && nominations.map((nomination, index) => {
    return <Nomination
      nomination={nomination}
      setNominations={setNominations}
      key={index}
    />
  })

  return (
    <section>
      <h2 className={styles.title}>Nominations</h2>
      <ul className={styles.list}>
        {list}
      </ul>
    </section>
  )
}
