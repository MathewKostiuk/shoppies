import Nomination from './Nomination';
import {
  Typography,
  SwipeableDrawer,
  Divider,
} from '@material-ui/core';

import styles from './NominationsList.module.css';

export default function NominationsList(props) {
  const { nominations, setNominations, drawerOpen, toggleDrawer } = props;

  const list = nominations && nominations.length > 0 && nominations.map((nomination, index) => {
    return (
      <React.Fragment key={index}>
        <Nomination
          nomination={nomination}
          setNominations={setNominations}
        />
        <Divider />
      </React.Fragment>
    );
  });

  return (
    <SwipeableDrawer
      anchor='right'
      open={drawerOpen}
      onOpen={toggleDrawer(true)}
      onClose={toggleDrawer(false)}
      classes={{ paper: styles.drawer }}
    >
      <div className={styles.title}>
        <Typography
          variant='h4'
          align='center'
        >
          Nominations
        </Typography>
      </div>
      <Divider />
      {list}
    </SwipeableDrawer>
  );
}
