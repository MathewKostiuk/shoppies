import useSWR from 'swr';
import { useState } from 'react';

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
  const { data, error } = useSWR(`api/movies`, fetcher);
  
  return (
    <form>
      <label>Movie title:</label>
      <input type='text' value={query} onChange={event => setQuery(event.target.value)} />
    </form>
  );
}
