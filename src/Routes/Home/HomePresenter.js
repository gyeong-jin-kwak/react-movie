import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Home = ({ 
    nowPlaying, 
    upcoming, 
    popular, 
    error, 
    loading
}) => null

Home.propTypes = {
    nowPlaying: PropTypes.array,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

export default Home;