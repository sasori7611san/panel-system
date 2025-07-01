import styled from 'styled-components';
import './App.css';
import { Home } from './components/pages/Home';
import { PanelProvider } from './provider/PanelProvider';

function App() {
  return (
    <AppHome>
      <PanelProvider>
        <Home />
      </PanelProvider>
    </AppHome>
  );
}
export default App;
const AppHome = styled.div`
  text-align: center;
`;
