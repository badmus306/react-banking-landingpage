import React from 'react'
import styled from 'styled-components';

function CtaButton({name}) {
    return (
        <CtaButtonStyled>
            {name}
        </CtaButtonStyled>
    )
}

const CtaButtonStyled = styled.a`
    text-transform: uppercase;
    background: linear-gradient(130deg, #8ee4af , #edf5e1);
    padding: .9rem 1.5rem;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;
    color: #000;
    transition: all .4s ease-in-out;
    &:last-child{
        margin-left: 1.5rem;
    }
    &:hover{
        transition: all .4s ease-in-out;
        background: linear-gradient(120deg,  #EB3FA9, #395FF6);
    }
`;
export default CtaButton;
