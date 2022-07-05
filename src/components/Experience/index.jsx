import React, { memo, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { SectionTitle } from '../../styles/typography';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    margin: auto;
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

const Timeline = styled.div`
    display: flex;
    width: 700px;
    height: 300px;
`;

const TabWrapper = styled.div`
    display: flex;
    width: 100px;
    height: 300px;
`;

const TabSelector = styled.div`
    display: flex;
    border-left: 2px solid ${colors.lightGrey};
    flex-direction: column;
    width: 100px;
    height: 200px;
`;

const Tab = styled.div`
    display: flex;
    width: 100px;
    padding: 15px;
    cursor: pointer;
`;

const TabHighlight = styled.div`
    border-left: 2px solid black;
    transform: translate(2px, ${({ translateYValue }) => translateYValue}px);
    height: 50px;
    transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-delay: 0.1s;
`;

const PanelWrapper = styled.div`
    display: flex;
    margin: 15px 0 0 15px;
    width: 600px;
    height: 300px;
`;

const text = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 

Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.`;

const Experience = () => {

    const [activeTabId, setActiveTab] = useState(0);

    const translateYValue = 50 * activeTabId;

    return (
        <section className='page-section' name='experience' style={{backgroundColor: colors.offWhite}}>
            <Wrapper>
                <Heading>
                    <SectionTitle>02. EXPERIENCE</SectionTitle>
                    <Border/>
                </Heading>
                <Timeline>
                    <TabWrapper>
                        <TabHighlight translateYValue={translateYValue}/>
                        <TabSelector>
                            <Tab onClick={() => { setActiveTab(0)}}>Disney</Tab>
                            <Tab onClick={() => { setActiveTab(1)}}>Focus</Tab>
                        </TabSelector>
                    </TabWrapper>
                    <PanelWrapper>
                        {text}
                    </PanelWrapper>
                </Timeline>
            </Wrapper>
        </section>
    );
};

export default memo(Experience);
