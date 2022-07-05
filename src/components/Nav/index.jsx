import React, { memo } from 'react';
import styled from 'styled-components';
import { LinkDescription, Link } from '../../styles/typography';
import { scroller } from 'react-scroll';

const Item = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const Nav = () => {
    
    const scrollTo = ((sectionName) => {
        scroller.scrollTo(sectionName, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    });

    return (
        <div>
            <Item>
                <Link>INTRO</Link>
                <LinkDescription onClick={() => { scrollTo('about') }}>
                    01. Get to know me
                </LinkDescription>
            </Item>
            <Item>
                <Link>EXPERIENCE</Link>
                <LinkDescription onClick={() => { scrollTo('experience') }}>
                    02. Stuff I've done
                </LinkDescription>
            </Item>
            <Item>
                <Link>CONTACT</Link>
                <LinkDescription onClick={() => { scrollTo('contact') }}>
                    03. Get in touch
                </LinkDescription>
            </Item>
        </div>
    );
};

export default memo(Nav);
