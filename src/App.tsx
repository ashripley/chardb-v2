import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { theme } from './theme';
import { theme as customTheme } from './styles/theme';
import { Home, Gallery, Studio, Dashboard } from './pages';
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import { isMobile } from './config';
import './styles.css';
import styled from 'styled-components';
import { pxToRem } from './utils';

const Container = styled.div`
  padding: ${pxToRem('xs')};
  margin: auto;
  width: 100%;
  height: 100%;
  max-height: 100%;
  background-color: ${customTheme.colors.bg.bgGray15};
`;

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <Router>
        <Center h={isMobile ? '100dvh' : '100vh'} w={'100vw'} display={'block'}>
          <Container>
            <Flex w={'95%'} h={75} justify='center' align='center' m={'auto'}>
              <NavigationBar />
            </Flex>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/gallery' element={<Gallery />} />
              <Route path='/studio' element={<Studio />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
          </Container>
        </Center>
      </Router>
    </MantineProvider>
  );
}
