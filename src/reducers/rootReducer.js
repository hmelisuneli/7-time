import { combineReducers } from 'redux';
import advertisementReducer from './advertisementReducer'; // Предположим, что у вас есть файл advertisementReducer.js с вашим редюсером объявлений

const rootReducer = combineReducers({
  // Здесь вы объединяете все ваши редюсеры
  advertisements: advertisementReducer // Предположим, что вы импортировали именно такой редюсер
});

export default rootReducer;
