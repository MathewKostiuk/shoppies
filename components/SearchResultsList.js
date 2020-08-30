import SearchResult from './SearchResult';

export default function SearchResultsList(props) {
  const { movies, setNominations, nominations } = props;

  const list = movies.map((movie, index) => {
    return <SearchResult
      movie={movie}
      setNominations={setNominations}
      nominations={nominations}
      key={index}
    />
  });

  return (
    <ul>
      {list}
    </ul>
  );
}
