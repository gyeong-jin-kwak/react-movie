import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';

const Container = styled.div`
    position: relative;
    width: 100%;
    height: calc(100vh - 50px);
    padding: 50px;
`

const Content = styled.div`
    display: flex;
`

const Cover = styled.div``

const Backdrop = styled.div`
    posision: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    filter: blur(3px);
    opacity: 0.5
`

const Detail = ({ 
    result, 
    error, 
    loading 
}) => loading ? <Loader /> :
    <Container>
        <Backdrop 
            bgImage = {`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
        />
        <Content>
            <Cover />
        </Content>
    </Container>

Detail.propTypes = {
    result: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

export default Detail;