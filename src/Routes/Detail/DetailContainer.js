import React, { useState, useEffect } from 'react';
import DetailPresenter from './DetailPresenter';
import { moviesApi, tvApi } from 'api';

export default (props) => {
  const { location: {pathname} } = props;
  let [ result, setResult ] = useState(null);
  let [ error, setError ] = useState(null);
  let [ loading, setLoading ] = useState(true);
  let isMovie = pathname.includes('/movie/');

  // console.log(props);
  useEffect(()=>{
    const fetchData = async() => {
      const {match: {params: { id }}, history: {push}} = props;
      const parsedId = parseInt(id);
      let result;

      if(isNaN(parsedId)) {
        return push('/');
      }

      try {
        if(isMovie) {
          ({data: result} = await moviesApi.movieDetail(parsedId))
        } else {
          ({data: result} = await tvApi.showDetail(parsedId))
        }
        console.log(result);
        setResult(result)

      } catch {
        setError ("can't find anything")
      } finally {
        setLoading(false);
        // setResult();
      }
      // console.log(id);
      // console.log(isMovie);
    }

    fetchData();
  },[])

  return (
    <DetailPresenter 
      result = { result }
      error = { error }
      loading = { loading }
    />
  )
}