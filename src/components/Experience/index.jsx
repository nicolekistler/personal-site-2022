import React, { memo, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { 
    DescriptionSmall,
    Range,
    SectionTitle,
    SubtitleSmall,
    TitleSmall
} from '../../styles/typography';
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
    margin-bottom: 1.2rem;
`;

const Border = styled.div`
    margin-left: 10px;
    border-bottom: .05px solid ${colors.mediumGrey};
    width: 350px;
`;

const Timeline = styled.div`
    display: flex;
    height: 300px;
`;

const TabWrapper = styled.div`
    display: flex;
    width: 100px;
    height: 300px;
`;

const TabSelector = styled.div`
    display: flex;
    border-left: 2px solid ${colors.mediumGrey};
    flex-direction: column;
    width: 125px;
    height: 245px;
`;

const Tab = styled.div`
    display: flex;
    width: 125px;
    padding: 15px;
    cursor: pointer;
    color: ${({ isActive }) => isActive ? colors.black : colors.darkGrey};
    background-color: ${({ isActive }) => isActive && '#e3e3e3'};
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
    flex-direction: column;
    margin: 10px 0 0 80px;
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
                        <div>
                            {
                                experienceToRender.descriptions.map((item, index) => {
                                    return (
                                        <DescriptionSmall key={`description-${index}`}>
                                            {item}
                                        </DescriptionSmall>
                                    );
                                })
                            }
                        </div>
                    </PanelWrapper>
                </Timeline>
            </Wrapper>
        </section>
    );
};

export default memo(Experience);
