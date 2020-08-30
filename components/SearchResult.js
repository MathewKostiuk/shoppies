export default function SearchResult(props) {
  const { movie, setNominations, nominations } = props;

  const handleClick = () => {
    setNominations(nominations => [...nominations, movie]);
  }

  const shouldBeDisabled = () => {
    const exists = nominations.filter(item => item.imdbID === movie.imdbID);
    const limitReached = nominations.length === 5;
    return limitReached || exists.length > 0 ? true : false;
  }

  return (
    <li>
      <span>{movie.Title} ({movie.Year})</span>
      <button type='button' disabled={shouldBeDisabled()} onClick={handleClick}>Nominate</button>
    </li>
  );
}
