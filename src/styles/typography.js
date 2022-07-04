import styled from 'styled-components';
import { colors } from './colors';

export const Title = styled.h1`
    margin: 0;
    font-size 5rem;
    font-family: 'blenny', sans-serif;
    font-weight: 900;
    line-height: 1.5;
    font-style: normal;
    color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: black;
`;

export const Subtitle = styled.h2`
    margin: 0 0 50px;
    font-size: 2.5rem;
    color: ${colors.darkGrey};
    font-family: dapifer, serif;
    font-weight: 900;
    font-style: normal;
`;

export const Link = styled.a`
    font-size: 1.6rem;
    font-family: acumin-pro-extra-condensed, sans-serif;
    font-weight: 800;
    font-style: normal;
    color: black;
    text-decoration: underline;
    margin: 0 15px 40px 0;
`;

export const LinkDescription = styled.p`
    font-size: 1.3rem;
    font-family: halyard-text, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: ${colors.darkGrey};
    margin: 0 0 40px 0;
`;

export const SectionTitle = styled.h2`
    margin: 0;
    font-size: 1.3rem;
    color: ${colors.black};
    font-family: dapifer, serif;
    font-weight: 900;
    font-style: normal;
`;

export const Description = styled.div`
    font-size: 1rem;
    font-family: halyard-text, sans-serif;
    font-weight: 400;
    font-style: normal;
    text-align: justify;
    text-justify: inter-word;
    color: ${colors.darkGrey};
`;
