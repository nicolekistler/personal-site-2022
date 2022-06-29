import React, { memo } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { Description, SectionTitle } from '../../styles/typography';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin: auto;
`;

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px 10px 20px;
    background-color: black;
    font-family: dapifer, serif;
    font-weight: 900;
    font-size: 21px;
    color: white;
    margin-top: 30px;
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

const Contact = () => {
    return (
        <section className='page-section' id='Contact' style={{backgroundColor: colors.lavender}}>
            <Wrapper>
                <Heading>
                    <Border/>
                    <SectionTitle>03. CONTACT</SectionTitle>
                    <Border/>
                </Heading>
                <Description>{text}</Description>
                <Button>Reach Out</Button>
            </Wrapper>
        </section>
    );
};

export default memo(Contact);
