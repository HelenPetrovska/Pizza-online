import React, { useContext, useEffect, useState } from 'react';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import Sort from '../components/Sort';
import { SearchContext } from '../App';

export const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  const { searchValue } = useContext(SearchContext);

  useEffect(() => {
    setIsLoading(true);

    const category = categoryId ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    fetch(
      `https://62c6af9574e1381c0a66142d.mockapi.io/items?${category}&sortBy=${sortType.sortProperty}&order=desc${search}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue]);

  const onClickCategory = (id) => {
    setCategoryId(id);
  };

  const onClickSort = (id) => {
    setSortType(id);
  };

  const pizzas = items
    .filter((obj) =>
      searchValue ? obj.title.toLowerCase().includes(searchValue.toLowerCase()) : obj,
    )
    .map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryId={categoryId} onClickCategory={onClickCategory} />
        <Sort sortType={sortType} onClickSort={onClickSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? [...new Array(6)].map((_, i) => <Skeleton key={i} />) : pizzas}
      </div>
    </div>
  );
};
