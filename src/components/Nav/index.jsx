import React, { memo } from 'react';
import styled from 'styled-components';
import { LinkDescription, Link } from '../../styles/typography';

const Item = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const Nav = () => {

    return (
        <div>
            <Item>
                <Link>INTRO</Link><LinkDescription>01. Get to know me</LinkDescription>
            </Item>
            <Item>
                <Link>EXPERIENCE</Link><LinkDescription>02. Stuff I've done</LinkDescription>
            </Item>
            <Item>
                <Link>CONTACT</Link><LinkDescription>03. Get in touch</LinkDescription>
            </Item>
        </div>
    );
};

export default memo(Nav);
