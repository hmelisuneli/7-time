import { LOGIN, LOGOUT } from '../actions/userActions';

const initialState = {
  authenticated: false,
  user: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        authenticated: true,
        user: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        authenticated: false,
        user: null
      };
    default:
      return state;
  }
};

export default userReducer;
