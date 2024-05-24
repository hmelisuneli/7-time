import { ADD_ADVERTISEMENT, DELETE_ADVERTISEMENT, EDIT_ADVERTISEMENT } from '../actions/advertisementActions';

const initialState = {
  advertisements: []
};

const advertisementReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ADVERTISEMENT:
      return {
        ...state,
        advertisements: [...state.advertisements, action.payload]
      };
    case DELETE_ADVERTISEMENT:
      return {
        ...state,
        advertisements: state.advertisements.filter(advertisement => advertisement.id !== action.payload)
      };
    case EDIT_ADVERTISEMENT:
      return {
        ...state,
        advertisements: state.advertisements.map(advertisement =>
          advertisement.id === action.payload.id ? action.payload : advertisement
        )
      };
    default:
      return state;
  }
};

export default advertisementReducer;
