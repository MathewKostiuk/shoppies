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
        <div className={styles.horizontal}>
          <svg className={styles.icon} aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <title>Search icon</title>
            <path d="M19.5 21.5L13.6155 15.1628" stroke="currentColor" strokeWidth="1.75" />
            <circle cx="9.5" cy="9.5" r="7" stroke="currentColor" strokeWidth="1.75" />
          </svg>
          <input className={styles.input} type='text' value={query} onChange={handleChange} placeholder='Search by movie title' />
        </div>
      </form>
    </>
  );
}
