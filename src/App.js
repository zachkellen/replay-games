import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import { Container } from './components/styles/Container.styled';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './views/Main';
import Services from './views/Services';

const theme = {
  colors: {
    header: 'rgba(0, 0, 0, 0.800)',
    body: 'whitesmoke',
    footer: 'rgba(0, 0, 0, 0.800)'
  }
}

function App() {
  return (
    <ThemeProvider theme = { theme }>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
