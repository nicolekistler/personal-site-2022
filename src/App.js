import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import styled from 'styled-components';
import { colors } from './styles/colors';

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
    height: 170vh;
    transform: translateY(170vh);
    background-color: ${colors.offWhite};
    clip-path: polygon(0 14%, 100% 8%, 100% 84%, 0 80%);
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
