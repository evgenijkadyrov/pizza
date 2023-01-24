const SET_SORT_BY = 'SET-SORT-BY'
const SET_CATEGORIES = 'SET-CATEGORIES'

const initialState = {
    categories: null,
    sortBy: {name:'популярная', type:'popular'}
}

export const setSortBy = (item) => {
    return {
        type: SET_SORT_BY,
        payload: item
    }
}
export const setCategories = (indexCategory) => {
    return {
        type: SET_CATEGORIES,
        payload: indexCategory
    }
}
export const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORT_BY:
            return {...state, sortBy: action.payload}
        case SET_CATEGORIES:
        return {...state, categories:action.payload}
        default:
            return state
    }
}
