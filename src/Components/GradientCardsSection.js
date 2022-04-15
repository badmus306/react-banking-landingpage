import React from 'react'
import { SectionStyled } from '../Layouts';
import GradientCard from './GradientCard';
import MainTitle from './MainTitle';
import avatar from '../img/icon3.png';
import styled from 'styled-components';
import CtaButton from './CtaButton';
import matrix1 from '../img/matrix1.jpg';
import matrix2 from '../img/matrix2.jpg';
import matrix3 from '../img/matrix3.jpg';

function GradientCardsSection() {
    return (
        <GradientCardsSectionStyled>
            <SectionStyled>
                <div className="title-con">
                    <MainTitle title={'New Upcoming Items'} subtitle={'Discover Upcoming Items'} para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'} />
                </div>
                <div className="gradient-cards-con">
                    <GradientCard image={matrix1} avatar={avatar} name={'John Deu'} price={'67$'} title={'Just a dummy title'} />
                    <GradientCard image={matrix2} avatar={avatar} name={'Micheal Tur'} price={'50$'} title={'Just a dummy title'}  />
                    <GradientCard image={matrix3} avatar={avatar} name={'Leers Prey'} price={'0.78$'} title={'Just a dummy title'}  />

                </div>
                <div className="load">
                    <CtaButton name={'View More'} />
                </div>
            </SectionStyled>
        </GradientCardsSectionStyled>
    )
}

const GradientCardsSectionStyled = styled.div`
    .load{
        padding-top: 3rem;
        text-align: center;
    }
`;

export default GradientCardsSection;
