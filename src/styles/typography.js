import styled from 'styled-components';
import { colors } from './colors';
import { breakpoints } from './breakpoints';

export const Title = styled.h1`
    margin: 0;
    font-family: 'blenny', sans-serif;
    font-weight: 900;
    font-size: 4rem;
    line-height: 1.5;
    font-style: normal;
    color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: black;

    @media (min-width: ${breakpoints.l}px) {
        font-size: 5rem;
    }
`;

export const Subtitle = styled.h2`
    margin: 0 0 50px;
    font-size: 2rem;
    color: ${colors.darkGrey};
    font-family: dapifer, serif;
    font-weight: 900;
    font-style: normal;

    @media (min-width: ${breakpoints.l}px) {
        font-size: 2.5rem;
    }
`;

export const Link = styled.a`
    font-size: 1.3rem;
    font-family: acumin-pro-extra-condensed, sans-serif;
    font-weight: 800;
    font-style: normal;
    color: black;
    text-decoration: underline;
    margin: 0 15px 40px 0;

    @media (min-width: ${breakpoints.l}px) {
        font-size: 1.6rem;
    }
`;

export const LinkDescription = styled.p`
    font-size: 1rem;
    font-family: halyard-text, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: ${colors.darkGrey};
    margin: 0 0 40px 0;

    @media (min-width: ${breakpoints.l}px) {
        font-size: 1.3rem;
    }
`;

export const SectionTitle = styled.h2`
    margin: auto;
    font-size: 1.5rem;
    color: ${colors.black};
    font-family: dapifer, serif;
    font-weight: 900;
    font-style: normal;
    white-space: nowrap; 
    margin: 0;

    @media (min-width: ${breakpoints.l}px) {
        font-size: 1.7rem;
    }
`;

export const Description = styled.div`
    font-size: 1rem;
    font-family: halyard-text, sans-serif;
    font-weight: 400;
    font-style: normal;
    text-align: justify;
    text-justify: inter-word;
    color: ${colors.darkGrey};

    @media (min-width: ${breakpoints.l}px) {
        font-size: 1.25rem;
    }
`;

export const TitleSmall = styled.div`
    font-size: 1.1rem;
    margin-bottom: 10px;
    font-family: dapifer, serif;
    font-weight: 400;
    color: ${colors.darkGrey};
    white-space: nowrap; 

    @media (min-width: ${breakpoints.l}px) {
        font-size: 1.4rem;
    }
`;
export const SubtitleSmall = styled.div`
    font-size: 1.1rem;
    margin-bottom: 10px;
    margin-left: 5px;
    font-family: dapifer, serif;
    font-weight: 400;
    color: ${colors.darkGrey};
    white-space: nowrap; 

    @media (min-width: ${breakpoints.l}px) {
        font-size: 1.4rem;
    }
`;

export const Range = styled.div`
    white-space: nowrap; 
    font-size: 1rem;
    font-family: halyard-text, sans-serif;
    font-weight: 500;
    font-style: normal;
    color: ${colors.black};

    @media (min-width: ${breakpoints.l}px) {
        font-size: 1.2rem;
    }
`;


export const DescriptionSmall = styled.div`
    font-size: 1rem;
    margin: 20px 0 20px 0;
    font-family: halyard-text, sans-serif;
    font-weight: 400;
    text-align: justify;
    text-justify: inter-word;
    color: ${colors.darkGrey};

    @media (min-width: ${breakpoints.l}px) {
        font-size: 1.2rem;
    }
`;

