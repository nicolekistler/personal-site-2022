import React, { memo } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { 
    codepenIcon,
    githubIcon,
    linkedinIcon,
    twitterIcon
} from '../../assets/icons';
import { breakpoints } from '../../styles/breakpoints';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 30px 0 30px;
    align-items: center;
    visibility: hidden;

    @media (min-width: ${breakpoints.m}px) {
        visibility: visible;
    }
`;

const Border = styled.div`
    border-left: .15rem solid ${colors.mediumGrey};
    height: 30vh;
`;

const BottomBorder = styled.div`
    border-left: .15rem solid ${colors.mediumGrey};
    height: 45vh;
`;

const Icon = styled.img`
    margin: 10px 0 10px;
    height: 25px;
`;


const Socials = () => {
    return (
        <Wrapper>
            <Border/>
            <Icon src={linkedinIcon}/>
            <Icon src={githubIcon}/>
            <Icon src={codepenIcon}/>
            <Icon src={twitterIcon}/>
            <BottomBorder/>
        </Wrapper>
    );
};

export default memo(Socials);
