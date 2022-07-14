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
    padding: 0 30px 0 30px;
    align-items: center;

    @media (min-width: ${breakpoints.l}px) {
        flex-direction: column;
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
    height: 25px;
    margin: 0 10px 0 10px;

    @media (min-width: ${breakpoints.l}px) {
        margin: 25px 0 25px 0;
    }
`;


const Socials = ({ isMobile }) => {

    return (
        <Wrapper>
            {!isMobile && <Border/>}
            <Icon src={linkedinIcon}/>
            <Icon src={githubIcon}/>
            <Icon src={codepenIcon}/>
            <Icon src={twitterIcon}/>
            {!isMobile && <BottomBorder/>}
        </Wrapper>
    );
};

export default memo(Socials);
