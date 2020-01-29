import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from './components/Home';
import GamesList from './components/GamesList';
import About from './components/About';
import HighScores from './components/HighScores';
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
              <li><Link to="/game">Games<span role="img" aria-label="joystick">🕹</span></Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
          <HighScores />
        </header>

        <main>
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/game"><GamesList/></Route>
            <Route path="/about"><About/></Route>
          </Switch>
        </main>
      </Router>

      <Footer />
    </div>
  );
};

export default App;
