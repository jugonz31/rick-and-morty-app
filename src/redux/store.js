import { createStore } from "redux";
import CharactersReducer from "./reducers/CharactersReducer";

const store = createStore(
  CharactersReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
