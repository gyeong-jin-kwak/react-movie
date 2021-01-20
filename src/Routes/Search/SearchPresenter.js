import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import Section from 'Components/Section';
import Message from 'Components/Message';
import Poster from 'Components/Poster';

const Container = styled.div`
    padding: 0 20px;
`;

const Form = styled.form`
    width: 100%;
    margin-bottom: 50px;
`;

const Input = styled.input`
    all: unset;
    width: 100%;
    font-size: 28px;
`;

const Search = ({ 
    movieResults, 
    tvResultes, 
    searchTerm, 
    error, 
    loading, 
    handleSubmit,
    updateTerm 
}) => <Container>
    <Form onSubmit={ handleSubmit }>
        <Input 
            onChange={ updateTerm } 
            value={ searchTerm } 
            placeholder="Search Movies or TV show" 
        />
    </Form>
    { loading ? <Loader /> : <>
        {movieResults && movieResults.length > 0 && 
            <Section title="Movie Result"> 
                { movieResults.map( movie => (
                    <Poster 
                        id={ movie.id }
                        isMovie = { true }
                        title={ movie.original_title } 
                        imageUrl = { movie.poster_path }
                        year={ movie.release_date && movie.release_date.substring(0, 4) } 
                        rating={ movie.vote_average } 
                    />
                ))}
            </Section>
        }

        {tvResultes && tvResultes.length > 0 && 
            <Section title="TV Show Result"> 
                { tvResultes.map( show => (
                    <Poster 
                        id={ show.id }
                        title={ show.original_name } 
                        imageUrl = { show.poster_path }
                        year={ show.first_air_date && show.first_air_date.substring(0, 4) } 
                        rating={ show.vote_average } 
                    />
                ))}
            </Section>
        }

        { error && <Message text={error} color="#e74c3c" /> }

        { 
            movieResults && 
            tvResultes && 
            movieResults.length === 0 && 
            tvResultes.length === 0 &&(
            <Message text="Nothing Found " color="#95a5a6" />
        )}
    </>}
</Container>;

Search.propTypes = {
    movieResults: PropTypes.array,
    tvResultes: PropTypes.array,
    searchTerm: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
}

export default Search;