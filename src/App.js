import React, { useState } from 'react';
import { Provider } from 'react-redux'
import Navigation from './components/Navigation'
import CharactersContainer from './components/characters/CharactersContainer';
import store from './redux/store';
import { Switch, Route } from 'react-router-dom'
import AdvancedSearch from './components/search/AdvancedSearch';
import Home from './components/Home';

function App() {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/">
          <Navigation search={false} />
          <Home />
        </Route>
        <Route path="/characters">
          <Navigation search={true} onChange={handleChange} />
          <CharactersContainer query="" search={search} />
        </Route>
        <Route path="/advanced-search">
          <Navigation search={false} />
          <AdvancedSearch />
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;
