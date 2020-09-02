import SearchForm from '../components/SearchForm';
import styles from './Header.module.css';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core'

export default function Header(props) {
  const { setSearchResults } = props;

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography className={styles.title} variant='h4'>
          Shoppies
        </Typography>
        <SearchForm setSearchResults={setSearchResults} />
      </Toolbar>
    </AppBar>
  );
}
