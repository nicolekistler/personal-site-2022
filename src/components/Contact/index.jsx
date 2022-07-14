import React, { memo } from 'react';
import styled from 'styled-components';
import { Description, SectionTitle } from '../../styles/typography';
import { breakpoints } from '../../styles/breakpoints';
import { colors } from '../../styles/colors';
import FadeWrapper from '../FadeWrapper';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    margin: auto;

    @media (min-width: ${breakpoints.l}px) {
        width: 40%;
    }
`;

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 15px 10px 15px;
    background-color: black;
    font-family: dapifer, serif;
    font-weight: 900;
    font-size: 1.2rem;
    color: white;
    margin-top: 2rem;

    @media (min-width: ${breakpoints.l}px) {
        font-size: 1.6rem;
        padding: 15px 25px 15px 25px;
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
    margin: 0 10px 0 10px;
    width: 50px;

    @media (min-width: ${breakpoints.l}px) {
        width: 200px;
    }
`;

const text = `If you're interested in getting to know me further, I'd love to chat!
Although I'm not actively seeking a new role, I'm always open to hearing about exciting opportunities that may be a good fit.
In addition to reaching out about roles, feel free to get in touch about mentorship—I am currently available to provide mentorship to new devs or anyone looking to learn more about tech.
`;

const Contact = () => {
    const { width } = useWindowDimensions();

    const content = 
        <>
            <TextWrapper>
                <Heading>
                    <Border/>
                    <SectionTitle>03. CONTACT</SectionTitle>
                    <Border/>
                </Heading>
                <Description>{text}</Description>
                <Button onClick={() => window.location.assign('mailto:njrockower@gmail.com')}>Reach Out</Button>
            </TextWrapper>
        </>;
    
    return (
        <section className='page-section' name='contact' style={{height: '90vh'}}>
                <Wrapper>
                    <FadeWrapper contentToFade={content}/> 
                </Wrapper>
        </section>
    );
};

export default memo(Contact);
