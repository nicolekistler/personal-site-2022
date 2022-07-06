import React, { memo, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { SectionTitle } from '../../styles/typography';
import { timelineData } from './data';

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
    width: 125px;
    height: 245px;
`;

const Tab = styled.div`
    display: flex;
    width: 125px;
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
    flex-direction: row;
    margin: 15px 0 0 50px;
    width: 600px;
    height: 300px;
`;

const Experience = () => {

    const [activeTabId, setActiveTab] = useState(0);

    const translateYValue = 65 * activeTabId;

    const experienceToRender = timelineData[activeTabId];

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
                        {
                            timelineData.map((item) => {
                                return (
                                    <Tab onClick={() => { setActiveTab(item.id)}}>{item.tabTitle}</Tab>
                                );
                            })
                        }
                        </TabSelector>
                    </TabWrapper>
                    <PanelWrapper>
                        {experienceToRender.panelTitle}
                        {experienceToRender.panelSubtitle}
                        {experienceToRender.range}
                        {experienceToRender.descriptions[0]}
                    </PanelWrapper>
                </Timeline>
            </Wrapper>
        </section>
    );
};

export default memo(Experience);
