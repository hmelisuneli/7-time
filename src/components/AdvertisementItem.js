import React from 'react';

function AdvertisementItem({ title, description }) {
  return (
    <div className="advertisement">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default AdvertisementItem;
