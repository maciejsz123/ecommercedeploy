import React from 'react';
import './styles/App.sass';
import Home from './components/home';
import Man from './components/man';
import Woman from './components/woman';
import Kids from './components/kids';
import Cart from './components/cart';
import Favorites from './components/favorites';
import Details from './components/details';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <div>
            <Router>
              <Switch>
                <Route path={`/man`}>
                  <Man />
                </Route>
                <Route path='/woman'>
                  <Woman />
                </Route>
                <Route path='/kid'>
                  <Kids />
                </Route>
                <Route exact path='/favorites'>
                  <Favorites />
                </Route>
                <Route exact path='/cart'>
                  <Cart />
                </Route>
                <Route exact path='/'>
                  <Home />
                </Route>
                <Route path='/details'>
                  <Details />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </Provider>
  );
}

export default App;
