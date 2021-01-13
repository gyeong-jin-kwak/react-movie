import React, { useState, useEffect } from 'react';
import SearchPresenter from './SearchPresenter';
import { moviesApi, tvApi } from 'api';

export default () => {
  let [ movieResults, setMovieResults ] = useState(null);
  let [ tvResultes, setTVResults ] = useState(null);
  let [ searchTerm, setSearchTerm ] = useState('');
  let [ error, setError ] = useState(null);
  let [ loading, setLoading ] = useState(false);

  // useEffect (()=>{
  //   handleSubmit();
  // }, []);

  const handleSubmit = () => {
    if(searchTerm !== ''){
      searchByTerm();
    }
  };

  const searchByTerm = async() => {
    setLoading(true);
    try {
      const {data: {results: movieResults}} = await moviesApi.search(searchTerm);
      const {data: {results: showResults}} = await tvApi.search(searchTerm);
      // console.log(movieResults, showResults);

      setMovieResults(movieResults);
      setTVResults(showResults);
    } catch {
      setError("can't find results")
    } finally {
      setLoading(false);
    }
  };

  return(
    <SearchPresenter 
      movieResults = { movieResults }
      tvResultes = { tvResultes }
      searchTerm = { searchTerm }
      error = { error }
      loading = { loading }
      handleSubmit = { handleSubmit }
    />
  )
}