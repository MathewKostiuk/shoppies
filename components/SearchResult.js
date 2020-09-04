import styles from './SearchResult.module.css';
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Grid,
  Typography,
  Button,
} from '@material-ui/core';

export default function SearchResult(props) {
  const { movie, setNominations, nominations } = props;

  const handleClick = () => {
    setNominations(nominations => [...nominations, movie]);
  }

  const shouldBeDisabled = () => {
    const exists = nominations.filter(item => item.imdbID === movie.imdbID);
    const limitReached = nominations.length === 5;
    return limitReached || exists.length > 0;
  }

  return (
    <Grid
    item
    xs={6}
    sm={4}
    lg={3}
    classes={{root: styles.item}}
    >
      <Card className={styles.card} >
        <CardActionArea>
          <CardMedia
            className={styles.image}
            image={movie.Poster}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {movie.Title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {movie.Year}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
          size="small"
          variant="outlined"
          color="primary"
          onClick={handleClick}
          fullWidth="true"
          disabled={shouldBeDisabled()}
          >
            Nominate
        </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
