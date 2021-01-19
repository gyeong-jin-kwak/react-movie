import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 100vw;
    justify-content: center;
`;
const Text = styled.span`
    color: #e74c3c;
    font-weight: 600;
`;

const Error = ({ text }) => {
    <Container>
        <Text>{ text }</Text>
    </Container>
}

Error.propTypes = {
    text: PropTypes.string.isRequired
}

export default Error;