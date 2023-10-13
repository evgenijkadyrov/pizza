import axios from "axios";

export const pizzasAPI = {
    getPizzas(activeCategory,activeSortBy) {
        return axios.get(`?${activeCategory!==null?`category=${activeCategory}`:''}&_sort=${activeSortBy.type}&_order=${activeSortBy.order}`)
    }
}