import SearchResult from './SearchResult';
import styles from './SearchResultsList.module.css';
import {
  Grid,
} from '@material-ui/core';

export default function SearchResultsList(props) {
  const { results, setNominations, nominations } = props;

  const list = results && results[0] && results.map((movie, index) => {
    return <SearchResult
      movie={movie}
      setNominations={setNominations}
      nominations={nominations}
      key={index}
    />
  });

  return (
    <Grid container
      className={styles.grid}
      spacing={1}
      classes={{
        container: styles.container,
      }}
    >
      {list}
    </Grid>
  );
}
