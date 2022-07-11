import React, { memo } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { Description, SectionTitle } from '../../styles/typography';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 70%;
    margin: auto;
    max-height: 90vh;
`;

const Heading = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`;

const Border = styled.div`
    margin-left: 10px;
    border-bottom: .05px solid ${colors.mediumGrey};
    width: 350px;
`;

const InnerWrapper = styled.div`
    word-wrap: break-word;
    display: flex;
    flex-direction: row;
`;

const BodyWrapper = styled.div`
    max-width: 500px;
    margin-right: 30px;
`;

const Portrait = styled.div`
    width: 325px;
    height: 325px;
    border: 1px solid black;
`;

const text = `Based in Brooklyn, New York, I'm a Software Engineer with six years of experience building applications for the Web.
I've worked on everything from small projects at startups to global products with hundreds of millions of subscribers.
Furthermore, I have a wide breadth of knowledge throughout the stack, although lately, I've mainly focused on writing frontend.
For the past two years, I've worked for the Walt Disney Company, where I bring new and exciting features to life on our streaming platform, Disney+.
Before my current role, I spent over three years in the education tech space, writing software to serve school districts around the US.
Outside of work, my hobbies include cooking, spending time with my two dogs, trying new food around the city, hiking, reading, and playing video games.  
`;

const About = () => {
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
            <section className='page-section' name='about'>
                <Wrapper
                    className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
                    ref={domRef}
                >
                    <Heading>
                        <SectionTitle>01. ABOUT ME</SectionTitle>
                        <Border/>
                    </Heading>
                    <InnerWrapper>
                        <BodyWrapper>
                            <Description>{text}</Description>
                        </BodyWrapper>
                        <Portrait/>
                    </InnerWrapper>
                </Wrapper>
            </section>
    );
};

export default memo(About);
