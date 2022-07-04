import React, { memo } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { Description, SectionTitle } from '../../styles/typography';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 70%;
    margin: auto;
    max-height: 90vh;
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
    flex-direction: row;
`;

const BodyWrapper = styled.div`
    max-width: 500px;
    margin-right: 30px;
`;

const Portrait = styled.div`
    width: 325px;
    height: 325px;
    border: 1px solid black;
`;

const text = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 

Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 

Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
`;

const About = () => {
    return (
            <section className='page-section' name='about'>
                <Wrapper>
                    <Heading>
                        <SectionTitle>01. ABOUT ME</SectionTitle>
                        <Border/>
                    </Heading>
                    <InnerWrapper>
                        <BodyWrapper>
                            <Description>{text}</Description>
                        </BodyWrapper>
                        <Portrait/>
                    </InnerWrapper>
                </Wrapper>
            </section>
    );
};

export default memo(About);
