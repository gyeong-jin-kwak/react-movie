import React, { useState } from 'react';
import TVPresenter from './TVPresenter';

export default () => {
  let {popular, setPopular} = useState(null);
  let {topRated, setTopRated} = useState(null);
  let {airingToday, setAiringToday} = useState(null);
  let {error, setError} = useState(null);
  let {loading, setLoading} = useState(true);

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