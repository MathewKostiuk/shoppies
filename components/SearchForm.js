import { useState, useEffect } from 'react';
import useDebounce from '../hooks/use-debounce';

const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(data.message);
  }
  return data;
}

export default function SearchForm() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    fetcher(`api/movies`)
      .then(data => console.log(data));
    console.log(debouncedQuery);
  }, [debouncedQuery]);

  return (
    <form>
      <label>Movie title:</label>
      <input type='text' value={query} onChange={event => setQuery(event.target.value)} />
    </form>
  );
}
