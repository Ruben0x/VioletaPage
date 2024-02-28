import { Bailemos } from './components/Bailemos.jsx';
import { ClasesCards } from './components/ClasesCards.jsx';
import { Conocenos } from './components/Conocenos.jsx';
import { Hero } from './components/Hero.jsx';
import { NavBar } from './components/NavBar.jsx';
import GlobalStyle from './styles/globalStyles.js';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Hero />
      {/* <Bailemos /> */}
      {/* <Conocenos /> */}
      <ClasesCards />
    </>
  );
}

export default App;
