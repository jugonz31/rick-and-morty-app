import React from 'react';
import {Provider} from 'react-redux'
import Navigation from './components/Navigation'
import CharactersContainer from './components/characters/CharactersContainer';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div >
        <Navigation />
        <CharactersContainer />
      </div>
    </Provider>
  );
}

export default App;
