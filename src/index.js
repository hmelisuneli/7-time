import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Импортируем Provider из react-redux
import store from './store/store'; // Предполагается, что у вас есть файл store.js с вашим хранилищем Redux
import App from './App';

ReactDOM.render(
  <Provider store={store}> {/* Обертываем ваше приложение в Provider и передаем ему store */}
    <App />
  </Provider>,
  document.getElementById('root')
);
