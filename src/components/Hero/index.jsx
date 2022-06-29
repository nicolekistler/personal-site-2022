import React, { memo } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { Title, Subtitle } from '../../styles/typography';

import Nav from '../Nav';
import Socials from '../Socials';

const Wrapper = styled.section`
    display: flex;
    background-color: ${colors.matchaFoam};
`;

const InnerWrapper = styled.div`
    display: flex;
    background-color: blue;
    flex-direction: column;
    justify-content: center;
    margin-left: 5%;
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
