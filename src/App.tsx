import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Games from './components/Games';
import About from './components/About';
import Footer from './components/Footer';

import logo from './assets/joystick.png';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <div className="App-logo-container">
            <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
            <a className="back-button" href="https://www.withoutwax.me"><span role="img" aria-label="back-button">◀️</span> to Blog</a>
          </div>
            <nav className="App-nav">
              <ul>
                <div className="Nav-submenu">
                  <li><Link to="/">Games<span role="img" aria-label="joystick">🕹</span></Link></li>
                  <li><Link to="/about">About</Link></li>
                </div>
              </ul>
            </nav>
        </header>

        <Switch>
          <Route exact path="/"><Games/></Route>
          <Route path="/about"><About/></Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
};

export default App;
