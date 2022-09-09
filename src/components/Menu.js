import { useState } from 'react';
import NavBar from './NavBar';
import foodData from '../data/data.js';
import FoodItem from './FoodItem';
import { Flex, Spacer } from '@chakra-ui/react'

export default function Menu() {
  return (
    <>
      <NavBar />
      <div>Menu</div>
      {foodData.map((e) => {
        return (
          <FoodItem
            title={e.title}
            image={e.image}
            price={e.pricePerServing}
          ></FoodItem>
        );
      })}
    </>
  );
}
