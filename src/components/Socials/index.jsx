import React, { memo } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { 
    codepenIcon,
    githubIcon,
    linkedinIcon,
    twitterIcon
} from '../../assets/icons';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 7%;
    align-items: center;
`;

const Border = styled.div`
    border-left: 1px solid ${colors.darkGrey};
    height: 200px;
`;

const Icon = styled.img`
    margin: 10px 0 10px;
    height: 24px;
`;

const Socials = () => {
    return (
        <Wrapper>
            <Border/>
            <Icon src={codepenIcon}/>
            <Icon src={githubIcon}/>
            <Icon src={linkedinIcon}/>
            <Icon src={twitterIcon}/>
            <Border/>
        </Wrapper>
    );
};

export default memo(Socials);
