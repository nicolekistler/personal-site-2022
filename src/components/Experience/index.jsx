import React, { memo } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { Description, SectionTitle } from '../../styles/typography';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    margin: auto;
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

const Experience = () => {
    return (
        <section className='page-section' id='Experience' style={{backgroundColor: colors.offWhite}}>
            <Wrapper>
                <Heading>
                    <SectionTitle>02. EXPERIENCE</SectionTitle>
                    <Border/>
                </Heading>
                <Description>{text}</Description>
            </Wrapper>
        </section>
    );
};

export default memo(Experience);
