import styled from 'styled-components';
import { colors } from './colors';

export const Title = styled.h1`
    margin: 0;
    font-size 100px;
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
    font-size: 40px;
    color: ${colors.darkGrey};
    font-family: dapifer, serif;
    font-weight: 900;
    font-style: normal;
`;

export const Link = styled.a`
    font-size: 32px;
    font-family: acumin-pro-extra-condensed, sans-serif;
    font-weight: 800;
    font-style: normal;
    color: black;
    text-decoration: underline;
    margin: 0 15px 40px 0;
`;

export const LinkDescription = styled.p`
    font-size: 24px;
    font-family: halyard-text, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: ${colors.darkGrey};
    margin: 0 0 40px 0;
`;


export const SectionTitle = styled.h2`
    margin: 0;
    font-size: 24px;
    color: ${colors.black};
    font-family: dapifer, serif;
    font-weight: 900;
    font-style: normal;
`;

export const Description = styled.p`
    font-size: 16px;
    font-family: halyard-text, sans-serif;
    font-weight: 400;
    font-style: normal;
    margin: 0;
    color: ${colors.darkGrey};
`;
