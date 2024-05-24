import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.14:3001/' // Замените на адрес вашего серверного API
});

export const getAdvertisements = () => api.get('/advertisements');
export const addAdvertisement = (newAdvertisement) => api.post('/advertisements', newAdvertisement);
export const deleteAdvertisement = (id) => api.delete(`/advertisements/${id}`);
export const editAdvertisement = (id, updatedAdvertisement) => api.put(`/advertisements/${id}`, updatedAdvertisement);

// Дополнительные функции для работы с пользовательской аутентификацией и другими ресурсами API могут быть добавлены здесь

export default api;