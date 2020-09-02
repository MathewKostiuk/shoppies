import { useState, useEffect } from 'react';
import useDebounce from '../hooks/use-debounce';
import { TextField } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import styles from './SearchForm.module.css';

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
  const [queryCache, setQueryCache] = useState({});
  const debouncedQuery = useDebounce(query, 500);

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  useEffect(() => {
    const uri = `api/movies?title=${debouncedQuery}`;
    const cachedResults = localStorage.getItem(debouncedQuery);

    if (cachedResults && debouncedQuery) {
      setSearchResults(JSON.parse(cachedResults));
    } else {
      fetcher(uri)
        .then(data => {
          setSearchResults(data.Search);
          localStorage.setItem(debouncedQuery, JSON.stringify(data.Search));
          setQueryCache({ ...queryCache, debouncedQuery: data.Search });
        });
    }
  }, [debouncedQuery]);

  return (
    <form
      className={styles.root}
      onSubmit={handleSubmit}
    >
      <div className={styles.icon}>
        <Search
          fontSize="large" />
      </div>

      <TextField
        classes={{
          root: styles.input,
        }}
        type='search'
        value={query}
        onChange={handleChange}
        placeholder='Search by movie title'
      />
    </form>
  );
}
