import { useState } from 'react';

const useAuthentication = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    // Здесь может быть логика аутентификации, например, обращение к API для проверки данных пользователя
    // В данном примере просто симулируем успешную аутентификацию для демонстрационных целей
    if (username === 'admin' && password === 'password') {
      setUser({ username });
      setAuthenticated(true);
    }
  };

  const logout = () => {
    // Очистка данных пользователя и установка статуса аутентификации в false
    setUser(null);
    setAuthenticated(false);
  };

  return {
    authenticated,
    user,
    login,
    logout
  };
};

export default useAuthentication;