import React, { memo } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { Description, SectionTitle } from '../../styles/typography';

const Wrapper = styled.div`
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
    padding: 8px 20px 10px 20px;
    background-color: black;
    font-family: dapifer, serif;
    font-weight: 900;
    font-size: 21px;
    color: white;
    margin-top: 3rem;
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
    width: 200px;
`;

const text = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 

Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.`;

const Contact = () => {
    return (
        <section className='page-section' name='contact' style={{backgroundColor: colors.lavender}}>
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
