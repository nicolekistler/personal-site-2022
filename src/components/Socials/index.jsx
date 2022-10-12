import React, { memo } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { 
    bookIcon,
    codepenIcon,
    githubIcon,
    linkedinIcon
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
            <a href='https://www.linkedin.com/in/nicolejkistler/'><Icon alt='linked in logo' src={linkedinIcon}/></a>
            <a href='https://github.com/nicolekistler'><Icon alt='git hub logo' src={githubIcon}/></a>
            <a href='https://www.goodreads.com/user/show/148638856-nicole-rockower'>
                <Icon alt='good reads logo' src={bookIcon}/>
            </a>
            <a href='https://codepen.io/nrckwr'><Icon alt='code pen logo' src={codepenIcon}/></a>
            {!isMobile && <BottomBorder/>}
        </Wrapper>
    );
};

export default memo(Socials);
