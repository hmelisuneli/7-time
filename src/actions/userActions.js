// Types
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

// Action creators
export const login = (userData) => ({
  type: LOGIN,
  payload: userData
});

export const logout = () => ({
  type: LOGOUT
});
