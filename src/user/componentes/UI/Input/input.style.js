import styled from "styled-components";


export const StyledInput = styled.input`
    border:${props => props.errorText !== '' ? '1px solid red' : '1px solid gray'};
`;


