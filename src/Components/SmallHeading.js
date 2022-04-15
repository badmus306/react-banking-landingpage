import React from 'react'
import styled from 'styled-components';

function SmallHeading({title, identifier}) {
    return (
        <SmallHeadingStyled>
            <h3 className={identifier}>{title}</h3>
        </SmallHeadingStyled>
    )
}

const SmallHeadingStyled = styled.div`
    h3{
        background: linear-gradient(120deg, #2f2fa2, #f64c72);
        background-clip: text;
        display: inline-block;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        text-align: center;
    }
`;

export default SmallHeading;
