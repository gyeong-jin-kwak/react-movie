import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Section from 'Components/Section';
import Loader from 'Components/Loader';
import Message from 'Components/Message';
import Poster from 'Components/Poster';

const Container = styled.div`
    padding: 20px;
`;

const TVPresenter = ({ 
    popular, 
    topRated, 
    airingToday, 
    error, 
    loading 
}) => <>
    <Helmet><title>TV Shows | Reactflix</title></Helmet>
    {
        loading ? <Loader /> : 
        (<Container>
            { topRated && topRated.length > 0 && (
                <Section title="Top Rated Shows">
                    { topRated.map( show => (
                        <Poster 
                            id={ show.id }
                            title={ show.original_name } 
                            imageUrl = { show.poster_path }
                            year={ show.first_air_date && show.first_air_date.substring(0, 4) } 
                            rating={ show.vote_average } 
                        />
                    ))}
                </Section>
            )}
    
            { popular && popular.length > 0 && (
                <Section title="Popular Shows">
                    { popular.map( show => (
                        <Poster 
                            id={ show.id }
                            title={ show.original_name } 
                            imageUrl = { show.poster_path }
                            year={ show.first_air_date && show.first_air_date.substring(0, 4) } 
                            rating={ show.vote_average } 
                        />
                    ))}
                </Section>
            )}
    
            { airingToday && airingToday.length > 0 && (
                <Section title="Airing Today">
                    { airingToday.map( show => (
                        <Poster 
                            id={ show.id }
                            title={ show.original_name } 
                            imageUrl = { show.poster_path }
                            year={ show.first_air_date && show.first_air_date.substring(0, 4) } 
                            rating={ show.vote_average } 
                        />
                    ))}
                </Section>
            )}
    
            {error && <Message text={error} color="#e74c3c" />}
        </Container>)
    }
</>

TVPresenter.propTypes = {
    popular: PropTypes.array,
    topRated: PropTypes.array,
    airingToday: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

export default TVPresenter;