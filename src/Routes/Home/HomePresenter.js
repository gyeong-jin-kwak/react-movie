import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Section from 'Components/Section';
import Loader from 'Components/Loader';
import Message from 'Components/Message';
import Poster from 'Components/Poster';

const Container = styled.div`
    padding: 0 10px;
`;

const Home = ({ 
    nowPlaying, 
    upcoming, 
    popular, 
    error, 
    loading
}) => loading ? <Loader /> : 
    <Container>
        {nowPlaying && nowPlaying.length > 0 && (
            <Section title="Now Playing">
                {nowPlaying.map(movie => (
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
        )}

        {upcoming && upcoming.length > 0 && (
            <Section title="Upcoming Movies">
                {upcoming.map(movie => (
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
        )}

        {popular && popular.length > 0 && (
            <Section title="Popular Movies">
                {popular.map(movie => (
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
        )}

        {error && <Message text={error} color="#e74c3c" />}
    </Container>

Home.propTypes = {
    nowPlaying: PropTypes.array,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

export default Home;