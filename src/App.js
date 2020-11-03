import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component = {Home} />
          <Route path='/about' component = {About} />
          <Route path='/contact' component = {Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
