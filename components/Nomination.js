import {
  Divider,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';

import {
  Delete,
} from '@material-ui/icons';

export default function Nomination(props) {
  const { nomination, setNominations } = props;

  const handleClick = () => {
    setNominations(nominations => {
      return nominations.filter(item => item.imdbID !== nomination.imdbID);
    })
  }

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar alt={nomination.Title} src={nomination.Poster} />
      </ListItemAvatar>
      <ListItemText 
        primary={nomination.Title}
      />
      <ListItemSecondaryAction>
        <IconButton edge='end' aria-label='delete' onClick={handleClick}>
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
