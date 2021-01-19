import React, { useState, useEffect } from 'react';
import HomePresenter from './HomePresenter';
import { moviesApi } from 'api';

export default () => {
  let [ nowPlaying, setNowPlaying ] = useState(null);
  let [ upcoming, setupcoming ] = useState(null);
  let [ popular, setPopular ] = useState(null);
  let [ error, setError ] = useState(null);
  let [ loading, setLoading ] = useState(true);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const {data: {results: nowPlaying}} = await moviesApi.nowPlaying();
        const {data: {results: upcoming}} = await moviesApi.upcoming();
        const {data: {results: popular}} = await moviesApi.popular();
        console.log(popular); 

        setNowPlaying(nowPlaying);
        setupcoming(upcoming);
        setPopular(popular);

      } catch(e) {
        setError("can't find movies information")
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <HomePresenter 
      nowPlaying = { nowPlaying }
      upcoming = { upcoming }
      popular = { popular }
      error = { error }
      loading = { loading }
    />
  );
}