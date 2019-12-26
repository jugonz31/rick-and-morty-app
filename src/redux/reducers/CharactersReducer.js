import {
  SELECT_NEW_CHARACTER,
  SELECT_SAVED_CHARACTER,
  UNSELECT_CHARACTER
} from "../actions/CharacterActions";

const initialState = {
  selectedCharacter: {},
  savedCharacters: []
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_NEW_CHARACTER:
      return {
        selectedCharacter: action.payload.character,
        savedCharacters: [...state.savedCharacters, action.payload.character]
      };
    case SELECT_SAVED_CHARACTER:
      return {
        ...state,
        selectedCharacter: state.savedCharacters.find(
          character => character.id === action.payload.id
        )
      };
    case UNSELECT_CHARACTER:
      return {
        ...state,
        selectedCharacter: {}
      };
    default:
      return state;
  }
};

export default charactersReducer;
