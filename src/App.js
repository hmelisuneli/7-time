import React, { useState } from 'react';
import AdvertisementList from './components/AdvertisementList';
import AdvertisementForm from './components/AdvertisementForm'; // Обновленный импорт
import './App.css';

function App() {
  const [advertisements, setAdvertisements] = useState([]);

  const handleAddAdvertisement = (newAdvertisement) => {
    setAdvertisements([...advertisements, newAdvertisement]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Advertisement Board</h1>
      </header>
      <main>
        {/* Используем AdvertisementForm вместо AddAdvertisementForm */}
        <AdvertisementForm onSubmit={handleAddAdvertisement} />
        <AdvertisementList advertisements={advertisements} />
      </main>
    </div>
  );
}

export default App;
