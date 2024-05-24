import React from 'react';
import AdvertisementItem from './AdvertisementItem';

function AdvertisementList({ advertisements }) {
  return (
    <div className="advertisement-list">
      {advertisements.map((ad, index) => (
        <AdvertisementItem key={index} title={ad.title} description={ad.description} />
      ))}
    </div>
  );
}

export default AdvertisementList;
