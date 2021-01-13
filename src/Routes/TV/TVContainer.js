import React, { useState, useEffect } from 'react';
import TVPresenter from './TVPresenter';
import { tvApi } from 'api';

export default () => {
  let [ popular, setPopular ] = useState(null);
  let [ topRated, setTopRated ] = useState(null);
  let [ airingToday, setAiringToday ] = useState(null);
  let [ error, setError ] = useState(null);
  let [ loading, setLoading ] = useState(true);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const {data: {results: popular}} = await tvApi.popular();
        const {data: {results: topRated}} = await tvApi.topRated();
        const {data: {results: airingToday}} = await tvApi.airingToday();
        // console.log(airingToday);

        setPopular(popular);
        setTopRated(topRated);
        setAiringToday(airingToday);
      } catch {
        setError("can't find TV information")
      } finally {
        setLoading(false);
      }
    } 
    fetchData();
  }, []);

  return (
    <TVPresenter 
      popular = { popular }
      topRated = { topRated }
      airingToday = { airingToday }
      error = { error }
      loading = { loading }
    />
  )
}