import React, { memo } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { Description, SectionTitle } from '../../styles/typography';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    margin: auto;
`;

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 20px 10px 20px;
    background-color: black;
    font-family: dapifer, serif;
    font-weight: 900;
    font-size: 21px;
    color: white;
    margin-top: 3rem;
`;

const Heading = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`;

const Border = styled.div`
    margin-left: 10px;
    border-bottom: .05px solid ${colors.mediumGrey};
    margin: 0 10px 0 10px;
    width: 200px;
`;

const text = `If you're interested in getting to know me further, I'd love to chat!
Although I'm not actively seeking a new role, I'm always open to hearing about exciting opportunities that may be a good fit.
In addition to reaching out about roles, feel free to get in touch about mentorship opportunities—I am currently available to provide mentorship to new devs or anyone looking to learn more about tech.
`;

const Contact = () => {
    const [isVisible, setVisible] = React.useState(true);
    
    const domRef = React.useRef();
    
    React.useEffect(() => {
      
        const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });

      observer.observe(domRef.current);
      
      return () => observer.unobserve(domRef.current);
    }, []);
    
    return (
        <section className='page-section' name='contact' style={{backgroundColor: colors.lavender}}>
            <Wrapper
                className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
                ref={domRef}
            >
                <Heading>
                    <Border/>
                    <SectionTitle>03. CONTACT</SectionTitle>
                    <Border/>
                </Heading>
                <Description>{text}</Description>
                <Button>Reach Out</Button>
            </Wrapper>
        </section>
    );
};

export default memo(Contact);
