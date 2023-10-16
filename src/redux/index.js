export {filtersReducer as filters, setCategories, setSortBy} from "./filters-reducer";
export {pizzasReducer as pizzas, fetchPizzas, setPizzas} from "./pizzas-reducer";
export {
    cartReducer as cart,
    deleteItem,
    clearCart,
    addPizzaToCart,
    setTotalPrice,
    setTotalCount,
    decrementItem
} from "./cart-reducer";
