import React, { useEffect, useState } from 'react';

import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import Sort from '../components/Sort';

export const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://62c6af9574e1381c0a66142d.mockapi.io/items')
    .then((res) => res.json())
    .then((arr) => {
      setItems(arr);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">
        Все пиццы
      </h2>
      <div className="content__items">
        {
          isLoading 
            ? [...new Array(6)].map((_, i) => 
              <Skeleton
                key={i} 
              />
            )
            : items.map(pizza => (
            <PizzaBlock
              key={pizza.id}
              {...pizza}
            />
          ))
        }
      </div>
    </>
  );
}
