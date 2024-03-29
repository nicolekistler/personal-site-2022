import React, { memo, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { breakpoints } from '../../styles/breakpoints';
import { 
    DescriptionSmall,
    Range,
    SectionTitle,
    SubtitleSmall,
    TitleSmall
} from '../../styles/typography';
import FadeWrapper from '../FadeWrapper';
import { timelineData } from './data';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: auto 20px auto 20px;
    height: 500px;

    @media (min-width: ${breakpoints.l}px) {
        width: auto;
        margin: auto;
    }
`;

const Heading = styled.div`
    display: flex;
    margin-bottom: 1.2rem;
    align-items: center;
    justify-content: center;

    @media (min-width: ${breakpoints.l}px) {
        justify-content: flex-start;
    }
`;

const Border = styled.div`
    margin-left: 10px;
    border-bottom: .05px solid ${colors.mediumGrey};
    width: 50px;

    @media (min-width: ${breakpoints.l}px) {
        width: 350px;
    }
`;

const Timeline = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: ${breakpoints.l}px) {
        flex-direction: row;
    }
`;

const TabWrapper = styled.div`
    display: flex;
    height: 100px;
    justify-content: center;

    @media (min-width: ${breakpoints.l}px) {
        width: 100px;
        height: 300px;
        flex-direction: row;
    }
`;

const TabSelector = styled.div`
    display: flex;
    height: 50px;

    @media (min-width: ${breakpoints.l}px) {
        border-left: 2px solid ${colors.mediumGrey};
        flex-direction: column;
        width: 125px;
        height: 280px;
    }
`;

const Tab = styled.div`
    display: flex;
    height: 72px;
    width: 70px;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    color: ${({ isActive }) => isActive ? colors.black : colors.darkGrey};
    font-size: .9rem;
    background-color: ${({ isActive }) => isActive && '#e3e3e3'};

    @media (min-width: ${breakpoints.l}px) {
        height: 70px;
        width: 100px;
        font-size: 1.2rem;
    }
`;

const TabHighlight = styled.div`
    height: 70px;
    transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-delay: 0.1s;

    @media (min-width: ${breakpoints.l}px) {
        border-left: 2px solid black;
        transform: translate(2px, ${({ translateYValue }) => translateYValue}px);
    }
`;

const PanelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 280px;

    @media (min-width: ${breakpoints.l}px) {
        margin: 10px 0 0 80px;
        width: 40vw;
    }
`;

const DescriptionContainer = styled.div`
    height: 400px;
    overflow-y: scroll;
    scrollbar-width: none;

    @media (min-width: ${breakpoints.l}px) {
        height: 500px;
    }
`;

const Experience = () => {
    const [activeTabId, setActiveTab] = useState(0);

    const translateYValue = 70 * activeTabId;

    const experienceToRender = timelineData[activeTabId];

    const content = 
        <>
            <Heading>
                <SectionTitle>02. EXPERIENCE</SectionTitle>
                <Border/>
            </Heading>
            <Timeline>
                <TabWrapper>
                    <TabHighlight translateYValue={translateYValue}/>
                    <TabSelector>
                    {
                        timelineData.map((item, index) => {
                            return (
                                <Tab
                                    isActive={activeTabId === index}
                                    key={`tab-${index}`}
                                    onClick={() => { setActiveTab(index)}}
                                >
                                    {item.tabTitle}
                                </Tab>
                            );
                        })
                    }
                    </TabSelector>
                </TabWrapper>
                <PanelWrapper>
                    <div style={{flexDirection: 'row', display: 'flex'}}>
                        <TitleSmall>{experienceToRender.panelTitle}</TitleSmall>
                        <SubtitleSmall>{experienceToRender.panelSubtitle}</SubtitleSmall>
                    </div>
                    <Range>{experienceToRender.range}</Range>
                    <DescriptionContainer className='description-container'>
                        {
                            experienceToRender.descriptions.map((item, index) => {
                                return (
                                    <DescriptionSmall key={`description-${index}`}>
                                        {item}
                                    </DescriptionSmall>
                                );
                            })
                        }
                    </DescriptionContainer>
                </PanelWrapper>
            </Timeline>
        </>;

    return (
        <section className='page-section' name='experience'>
            <Wrapper>
                <FadeWrapper contentToFade={content}/>
            </Wrapper>
        </section>
    );
};

export default memo(Experience);
