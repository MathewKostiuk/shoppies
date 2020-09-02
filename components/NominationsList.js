import Nomination from './Nomination';
import {
  List,
  Typography,
  Drawer,
  Divider,
} from '@material-ui/core';
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
    <Drawer
      variant='permanent'
      anchor='right'
      classes={{
        paper: styles.drawer,
      }}
    >
      <Divider />
      <Typography
      variant='h4'
      align='center'>
        Nominations
      </Typography>
      <List>
        {list}
      </List>
    </Drawer>
  );
}
