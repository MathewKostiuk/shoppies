import SearchForm from '../components/SearchForm';
import styles from './Header.module.css';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core'

import {
  ViewList,
} from '@material-ui/icons';

export default function Header(props) {
  const { setSearchResults, toggleDrawer } = props;

  return (
    <AppBar position="fixed">
      <Toolbar classes={{ root: styles.root }}>
        <Typography className={styles.title} variant='h4'>
          Shoppies
        </Typography>
        <SearchForm setSearchResults={setSearchResults} />
        <ViewList
          classes={{ root: styles.icon }}
          onClick={toggleDrawer(true)}
          fontSize='large'
        />
      </Toolbar>
    </AppBar>
  );
}
