import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Footer from './components/Footer';
import Games from './components/Games';
import About from './components/About';

import logo from './assets/joystick.png';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <div className="App-logo-container">
            <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
          </div>
            <nav className="App-nav">
              <ul>
                <li><a href="https://www.withoutwax.me"><span role="img" aria-label="back-button">◀️</span> to Blog</a></li>
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
}

export default App;
