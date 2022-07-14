import React, { memo } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { Title, Subtitle } from '../../styles/typography';
import { breakpoints } from '../../styles/breakpoints';

import Nav from '../Nav';
import Socials from '../Socials';

const Wrapper = styled.section`
    display: flex;
    animation: fadeInAnimation ease 1.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  
    @keyframes fadeInAnimation {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
         }
    }
`;

const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;

    @media (min-width: ${breakpoints.l}px) {
        margin-left: 5%;
    }
`;

const Hero = () => {
    return (
        <Wrapper className='page-section' id="Hero">
            <Socials/>
            <InnerWrapper>
                <Title>Hello!</Title>
                <Subtitle>I'm Nicole. I spend my days writing code.</Subtitle>
                <Nav/>
            </InnerWrapper>
        </Wrapper>
    );
};

export default memo(Hero);
