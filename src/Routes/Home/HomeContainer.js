import React, { useState } from 'react';
import HomePresenter from './HomePresenter';

export default () => {
  let { nowPlaying, setNowPlaying } = useState(null);
  let { upcoming, setupcoming } = useState(null);
  let { popular, setPopular } = useState(null);
  let { error, setError } = useState(null);
  let { loading, setLoading } = useState(true);

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