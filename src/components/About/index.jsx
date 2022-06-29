import React, { memo } from 'react';
import styled from 'styled-components';
import { Description, SectionTitle } from '../../styles/typography';
import { colors } from '../../styles/colors';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    margin: auto;
`;

const InnerWrapper = styled.div`
    display: flex;
`;

const Portrait = styled.div`
    width: 500px;
    height: 175px;
    border: 1px solid ${colors.darkGrey};
`;

const Heading = styled.div`
    display: flex;
    align-items: center;
`;

const Border = styled.div`
    margin-left: 10px;
    border-bottom: 1px solid ${colors.darkGrey};
    width: 200px;
`;

const text = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 

Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.`;

const About = () => {
    return (
        <Wrapper className='page-section' id='About'>
            <Heading>
                <SectionTitle>01. ABOUT ME</SectionTitle>
                <Border/>
            </Heading>
            <InnerWrapper>
                <Description>{text}</Description>
                <Portrait/>
            </InnerWrapper>
        </Wrapper>
    );
};

export default memo(About);

// <BlurbWrapper>
// <Description>
//     Based out of Brooklyn, I'm passionate about building well-written software and crafting delightful user experiences. Currently, I work at Disney, where I specialize in developing responsive and scalable streaming applications for the web.
// </Description>
// </BlurbWrapper>
