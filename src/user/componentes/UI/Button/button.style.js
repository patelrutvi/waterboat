import styled from "styled-components";

const Basebutton = styled.button`
text-transform: uppercase;
font-size: 14px;
letter-spacing: .2rem;
font-family: "Oswald", sans-serif;
border-color: #1089ff;
padding: 6px 48px;
    
`;

export const primaryButton = styled(Basebutton)`
    color: #fff;
    background:${props => props.disabled ? 'gray' : '#1089ff'};
   

    &:hover{
        background: ${props => props.disabled ? 'gray' : '#0076e9'};
        }
        border-color: ${props => props.disabled ? 'gray' : '#0076e9'};
`;
export const secondaryButton = styled(Basebutton)`
    color: #fff;
    background-color: #ff6337;

    &:hover{
        background-color: red;
        }
`;
export const outlinedButton = styled(Basebutton)`
    color: #000
    ;
    border:1px solid black;

    &:hover{
        background-color: #166ab5;
        }
`;