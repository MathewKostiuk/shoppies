import { useState, useEffect } from 'react';
import useDebounce from '../hooks/use-debounce';
import styles from './SearchForm.module.css';

import SearchResultsList from './SearchResultsList';

const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(data.message);
  }
  return data;
}

export default function SearchForm(props) {
  const { setSearchResults } = props;
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500);

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  useEffect(() => {
    const uri = `api/movies?title=${debouncedQuery}`;
    fetcher(uri)
      .then(data => setSearchResults(data.Search));
  }, [debouncedQuery]);

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>Movie title</label>
        <input type='text' value={query} onChange={handleChange} />
      </form>
    </>
  );
}
