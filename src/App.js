import React from 'react';
import { Provider } from 'react-redux'
import Navigation from './components/Navigation'
import CharactersContainer from './components/characters/CharactersContainer';
import store from './redux/store';
import { Switch, Route } from 'react-router-dom'
import AdvancedSearch from './components/search/AdvancedSearch';
import Home from './components/Home';

function App() {
  return (
    <Provider store={store}>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/characters">
            <CharactersContainer />
          </Route>
          <Route path="/advanced-search">
            <AdvancedSearch />
          </Route>
        </Switch>
    </Provider>
  );
}


export default App;
