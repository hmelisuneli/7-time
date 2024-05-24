import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAdvertisement, updateAdvertisement } from '../actions/advertisementActions';
import { v4 as uuid } from 'uuid';

const AdvertisementForm = ({ advertisementToEdit, onCancel }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(advertisementToEdit ? advertisementToEdit.title : '');
  const [description, setDescription] = useState(advertisementToEdit ? advertisementToEdit.description : '');

  const handleAdd = () => {
    dispatch(addAdvertisement({ title, description, id: uuid() }));
    setTitle('');
    setDescription('');
  };

  const handleUpdate = () => {
    const updatedAdvertisement = {
      id: advertisementToEdit.id,
      title,
      description
    };
    dispatch(updateAdvertisement(advertisementToEdit.id, updatedAdvertisement));
    setTitle('');
    setDescription('');
    onCancel();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (advertisementToEdit) {
      handleUpdate();
    } else {
      handleAdd();
    }
  };

  return (
    <div>
      <h2>{advertisementToEdit ? 'Edit Advertisement' : 'Add Advertisement'}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button type="submit">{advertisementToEdit ? 'Update' : 'Add'}</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default AdvertisementForm;
