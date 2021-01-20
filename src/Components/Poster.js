import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    font-size: 12px;
`;

const ImageContainer = styled.div`
    margin-bottom: 5px;
`;

const Image = styled.div`
    background-img: url(${props => `https://image.tmdb.org/t/p/w500${props.bgUrl}`})
`;

const Rating = styled.span``;

const Title = styled.span`
    display: block;
    margin-bottom: 3px;
    font-size: 12px;
`;

const Year = styled.span`
    font-size: 10px;
    color: rgba(255, 255, 255, 0.5)
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
    <Link to={isMovie ? `/movie/${id}` : `/show/${id}` } >
        <Container>
            <ImageContainer>
                <Image bgUrl={ imageUrl } />
                <Rating>
                    <span role="img" aria-label="rating">
                        ⭐️
                    </span>{" "}
                    { rating }/10
                </Rating>
            </ImageContainer>
            <Title>{ title }</Title>
            <Year>{ year }</Year>
        </Container>
    </Link>
);

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string,
    isMovie: PropTypes.bool  
}

export default Poster;