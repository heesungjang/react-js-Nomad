import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    color: #e74c3c;
    font-weight: 600;
`;
const Text = styled.span`
    color: ${(props) => props.color};
`;

const Message = ({ text, color }) => (
    <Container>
        <Text color={color}>{text}</Text>
    </Container>
);

Message.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};
export default Message;
