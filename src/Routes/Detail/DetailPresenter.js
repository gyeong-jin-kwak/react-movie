import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Loader from 'Components/Loader';
import Message from 'Components/Message';

const Container = styled.div`
    position: relative;
    width: 100%;
    height: calc(100vh - 50px);
    padding: 50px;
`

const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    filter: blur(3px);
    opacity: 0.5;
    z-index: 0;
`

const Content = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    z-index: 1;
`

const Cover = styled.div`
    width: 30%;
    height: 100%;
    margin-right: 15px;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    border-radius: 5px;
`

const Data = styled.div`
    width: 70%;
    margin-left: 10px;
`

const Title = styled.h3`
    font-size: 32px;
    margin-bottom: 10px;
`

const ItemContainer = styled.div`
    margin: 20px 0;
`

const Item = styled.span`
`

const Devider = styled.span`
    margin: 0 10px;
`

const Overview = styled.p`
    width: 50%;
    margin-top: 10px;
    font-size: 12px;
    opacity: 0.7;
    line-height: 1.5;
`

const Detail = ({ 
    result, 
    error, 
    loading 
}) => loading ? (
        <>
            <Helmet><title>Loading | Reactflix</title></Helmet>
            <Loader />
        </>
    ) : (
        error ? 
        <Message /> : 
        <Container>
            <Helmet>
                <title>{
                    result.original_title ? 
                    result.original_title : 
                    result.original_name
                } | Reactflix</title>
            </Helmet>
            <Backdrop 
                bgImage = {`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
            />
            <Content>
                <Cover 
                    bgImage = {result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : require("../../assets/noPosterSmall.png")}
                />
                <Data>
                    <Title>{
                        result.original_title ? 
                        result.original_title : 
                        result.original_name
                    }</Title>
                    <ItemContainer>
                        <Item>{
                            result.release_date ? 
                            result.release_date.substring(0, 4) : 
                            result.first_air_date.substring(0, 4)
                        }</Item>
                        <Devider>・</Devider>
                        <Item>
                            {result.runtime ?
                            result.runtime : 
                            result.episode_run_time} min
                        </Item>
                        <Devider>・</Devider>
                        <Item>{
                            result.genres && 
                            result.genres.map((genre, index) => index === result.genres.length - 1 ? 
                            genre.name : 
                            `${genre.name} / ` )
                        }</Item>
                        <Overview>{result.overview}</Overview>
                    </ItemContainer>
                </Data>
            </Content>
        </Container>
    )

Detail.propTypes = {
    result: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

export default Detail;