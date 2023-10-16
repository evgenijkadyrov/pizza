import React, {useCallback, useEffect} from 'react';
import {Categories, LoadingBlock, PizzaBlock, SortPopup} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {addPizzaToCart, fetchPizzas, setCategories, setSortBy} from "../redux";


export const Home = () => {
    const {items, isLoaded} = useSelector(({pizzas}) => ({
        items: pizzas.items,
        isLoaded: pizzas.isLoaded
    }))
    const {activeCategory, activeSortBy} = useSelector(({filters}) => ({
        activeCategory: filters.categories,
        activeSortBy: filters.sortBy
    }))
    const cartItems = useSelector((state) => state.cart.items)


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPizzas(activeCategory, activeSortBy))
    }, [activeCategory, activeSortBy])
    const onSelectedCategories = useCallback((index) => {
        dispatch(setCategories(index))
    }, [])
    const onSelectedSort = useCallback((item) => {
        dispatch(setSortBy(item))
    }, [])
    const handleAddPizza = useCallback((obj) => {
        dispatch(addPizzaToCart(obj))
    }, [])


    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
                    onClickItem={onSelectedCategories}
                    activeItem={activeCategory}/>
                <SortPopup items={[{name: 'популярности', type: 'rating', order: 'desc'},
                    {name: 'цене', type: 'price', order: 'desc'},
                    {name: 'алфавиту', type: 'name', order: 'asc'}]}
                           onClickItem={onSelectedSort} activeItem={activeSortBy}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded ? items.map(item => <PizzaBlock key={item.id} {...item}
                                                          onAddPizza={handleAddPizza}
                                                          addedCount={cartItems[item.id] && cartItems[item.id].length}/>) : Array(10).fill(0)
                    .map((i, index) => <LoadingBlock key={index}/>)}
            </div>

        </div>
    );
};

