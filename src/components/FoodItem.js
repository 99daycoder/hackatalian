import React from 'react';
import FoodModal from './FoodModal';

export default function FoodItem({ title, image, price }) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt='food'></img>
      <p>{price}</p>
      <FoodModal title={title} price={price} />
    </div>
  );
}
