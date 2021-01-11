import React, { useState } from 'react';
import SearchPresenter from './SearchPresenter';

export default () => {
  let { movieResults, setMovieResults } = useState(null);
  let { tvResultes, setTVResults } = useState(null);
  let { searchTerm, setSearchTerm } = useState('');
  let { error, setError } = useState(null);
  let { loading, setLoading } = useState(false);

  return(
    <SearchPresenter 
      movieResults = { movieResults }
      tvResultes = { tvResultes }
      searchTerm = { searchTerm }
      error = { error }
      loading = { loading }
    />
  )
}