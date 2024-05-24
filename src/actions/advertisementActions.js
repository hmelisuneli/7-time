// advertisementActions.js

export const ADD_ADVERTISEMENT = 'ADD_ADVERTISEMENT';
export const DELETE_ADVERTISEMENT = 'DELETE_ADVERTISEMENT';
export const EDIT_ADVERTISEMENT = 'EDIT_ADVERTISEMENT';
export const UPDATE_ADVERTISEMENT = 'UPDATE_ADVERTISEMENT'; // Добавлен экспорт для обновления объявления

export const addAdvertisement = (advertisement) => {
  return {
    type: ADD_ADVERTISEMENT,
    payload: advertisement
  };
};

export const deleteAdvertisement = (id) => {
  return {
    type: DELETE_ADVERTISEMENT,
    payload: id
  };
};

export const editAdvertisement = (id, advertisement) => {
  return {
    type: EDIT_ADVERTISEMENT,
    payload: { id, advertisement }
  };
};

export const updateAdvertisement = (id, updatedAdvertisement) => {
  return {
    type: UPDATE_ADVERTISEMENT,
    payload: { id, updatedAdvertisement }
  };
};
