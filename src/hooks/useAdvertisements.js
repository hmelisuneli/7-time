import { useState, useEffect } from 'react';
import api from './api';

const useAdvertisements = () => {
  const [advertisements, setAdvertisements] = useState([]);

  useEffect(() => {
    // Загрузка объявлений из API при монтировании компонента
    const loadAdvertisements = async () => {
      try {
        const response = await api.get('/advertisements');
        setAdvertisements(response.data);
      } catch (error) {
        console.error('Error loading advertisements:', error);
      }
    };

    loadAdvertisements();

    // Очистка загруженных объявлений при размонтировании компонента
    return () => {
      setAdvertisements([]);
    };
  }, []);

  const addAdvertisement = async (newAdvertisement) => {
    try {
      const response = await api.post('/advertisements', newAdvertisement);
      setAdvertisements([...advertisements, response.data]);
    } catch (error) {
      console.error('Error adding advertisement:', error);
    }
  };

  const deleteAdvertisement = async (id) => {
    try {
      await api.delete(`/advertisements/${id}`);
      setAdvertisements(advertisements.filter(advertisement => advertisement.id !== id));
    } catch (error) {
      console.error('Error deleting advertisement:', error);
    }
  };

  const editAdvertisement = async (updatedAdvertisement) => {
    try {
      const response = await api.put(`/advertisements/${updatedAdvertisement.id}`, updatedAdvertisement);
      setAdvertisements(advertisements.map(advertisement =>
        advertisement.id === updatedAdvertisement.id ? response.data : advertisement
      ));
    } catch (error) {
      console.error('Error editing advertisement:', error);
    }
  };

  return {
    advertisements,
    addAdvertisement,
    deleteAdvertisement,
    editAdvertisement
  };
};

export default useAdvertisements;