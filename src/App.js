import styled from 'styled-components';

import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { colors } from './styles/colors';
import { breakpoints } from './styles/breakpoints';

function App() {

  const BackgroundContainer = styled.div`
    position: absolute;
    z-index: 1;
    width: 100vw;
    height: 400vh;
    display: flex;
    flex-direction: column;
  `;

  const SmallSection = styled.div`
    z-index: 1;
    width: 100vw;
    height: 100vh;
    background-color: ${colors.matchaFoam};
  `;

  const LargeSection = styled.div`
    z-index: 1;
    width: 100vw;
    height: 150vh;
    background-color: ${({ color }) => color};
  `;

  const AsymmetricalSection = styled.div`
    position: absolute;
    z-index: 1;
    width: 100vw;
    height: 160vh;
    transform: translateY(180vh);
    background-color: ${colors.offWhite};
    clip-path: polygon(0 14%, 100% 8%, 100% 84%, 0 80%);

    @media (min-width: ${breakpoints.m}px) {
      transform: translateY(170vh);
      height: 170vh;
    }
  `;
  
  return (
    <div className="App">
        <BackgroundContainer>
          <SmallSection/>
          <LargeSection color={colors.white}/>
          <LargeSection color={colors.lavender}/>
        </BackgroundContainer>
        <AsymmetricalSection/>
        <Hero/>
        <About/>
        <Experience/>
        <Contact/>
    </div>
  );
}

export default App;
