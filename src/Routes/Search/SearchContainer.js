import React from 'react';
import SearchPresenter from './SearchPresenter';

export default class extends React.Component {
  state = {
    movieResluts: null,
    tvResultes: null,
    searchTerm: '',
    error: null,
    loading: false
  }

  render() {
    const { movieResluts, tvResultes, searchTerm, error, loading } = this.state;

    return(
      <SearchPresenter 
        movieResluts = { movieResluts }
        tvResultes = { tvResultes }
        searchTerm = { searchTerm }
        error = { error }
        loading = { loading }
      />
    )
  }
}