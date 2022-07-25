import React, { memo } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { breakpoints } from '../../styles/breakpoints';
import { Description, SectionTitle } from '../../styles/typography';
import FadeWrapper from '../FadeWrapper';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 80%;
    margin: auto;
    height: 60vh;

    @media (min-width: ${breakpoints.l}px) {
        max-height: 90vh;
    }
`;

const Heading = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`;

const Border = styled.div`
    margin-left: 10px;
    border-bottom: .05px solid ${colors.mediumGrey};
    width: 350px;
`;

const InnerWrapper = styled.div`
    word-wrap: break-word;
    display: flex;
    height: 400px;
    overflow-y: auto;

    @media (min-width: ${breakpoints.l}px) {
        flex-direction: row;
        height: 500px;
    }

`;

const BodyWrapper = styled.div`

    @media (min-width: ${breakpoints.l}px) {
        width: 600px;
    }
`;

const text = `Based out of Brooklyn, I'm a Software Engineer with six years of experience building applications for the Web.
I've worked on everything from small projects at startups to global products with hundreds of millions of subscribers.
Furthermore, I have a wide breadth of knowledge throughout the stack, although lately, I've mainly focused on writing frontend.
For the past two years, I've worked for the Walt Disney Company, where I bring new and exciting features to life on our streaming platform, Disney+.
Before my current role, I spent over three years in the education tech space, writing software to serve school districts around the US.
Outside of work, my hobbies include cooking, spending time with my two dogs, trying new food around the city, hiking, reading, and playing video games.  
`;

const About = () => {
    const content = 
        <>
            <Heading>
                <SectionTitle>01. ABOUT ME</SectionTitle>
                <Border/>
            </Heading>
            <InnerWrapper>
                <BodyWrapper>
                    <Description>{text}</Description>
                </BodyWrapper>
            </InnerWrapper>
        </>

    return (
        <section className='page-section' name='about'>
            <Wrapper>
                <FadeWrapper contentToFade={content}/>
            </Wrapper>
        </section>
    );
};

export default memo(About);
