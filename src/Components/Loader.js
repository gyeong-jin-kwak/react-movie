import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100wh;
    height: 100vh;
    margin-top: 20px;
    font-size: 28px;
`;

const Loader = () => ( 
    <Container>
        <span role="img" aria-label="Loding">🤖</span>
    </Container>
);

export default Loader;