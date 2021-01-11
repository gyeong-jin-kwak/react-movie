import React, { useState } from 'react';
import DetailPresenter from './DetailPresenter';

export default () => {
  let {result, setResult} = useState(null);
  let {error, setError} = useState(null);
  let {loading, setLoading} = useState(true);

  return (
    <DetailPresenter 
      result = { result }
      error = { error }
      loading = { loading }
    />
  )
}