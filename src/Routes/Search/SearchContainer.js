import React, { useState } from 'react';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchTerm !== ''){
      searchByTerm();
    }
  };

  const updateTerm = (e) => {
    const { target: { value } } = e;
    setSearchTerm(value);
    // console.log(value);
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
      updateTerm = { updateTerm }
    />
  )
}