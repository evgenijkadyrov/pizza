const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE'
const ADD_PIZZA_TO_CART = 'ADD_PIZZA_TO_CART'
const CLEAR_CART = 'CLEAR-CART'
const DELETE_ITEM = 'DELETE_ITEM'
const DECREMENT_ITEM = 'DECREMENT_ITEM'

const initialState = {
    items: [],
    totalCount: 0,
    totalPrice: 0
}

export const setTotalCount = (items) => {
    return {
        type: SET_TOTAL_COUNT,
        payload: items
    }
}
export const setTotalPrice = (items) => {
    return {
        type: SET_TOTAL_PRICE,
        payload: items
    }
}
export const addPizzaToCart = (pizzaObj) => {
    return {
        type: ADD_PIZZA_TO_CART,
        payload: pizzaObj
    }
}
export const clearCart = () => {
    return {
        type: CLEAR_CART,
    }
}
export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        payload: id
    }
}
export const decrementItem = (obj) => {
    return {
        type: DECREMENT_ITEM,
        payload: obj
    }
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOTAL_COUNT:
            return {...state, totalCount: action.payload}
        case SET_TOTAL_PRICE:
            return {...state, totalPrice: action.payload}
        case ADD_PIZZA_TO_CART : {
            const newItems = [...state.items, action.payload]
            return {
                ...state,
                items: newItems,
                totalCount: newItems.length,
                totalPrice: newItems.reduce((acc, item) => item.price + acc, 0)
            }
        }
        case CLEAR_CART:
            return {
                ...state,
                items: [],
                totalCount: 0,
                totalPrice: 0
            }
        case DELETE_ITEM: {
            let newItems = [...state.items.filter(el => el.id !== action.payload)]

            return {
                ...state,
                items: newItems,
                totalCount: newItems.length,
                totalPrice: newItems.reduce((acc, item) => item.price + acc, 0)
            }
        }
        case DECREMENT_ITEM:{
            let copyState = [...state.items]
            let deleteIndexItem = copyState.findIndex(el => (el.id === action.payload.id) && (el.size === action.payload.size) && (el.name === action.payload.name) && (el.type === action.payload.type))
            copyState.splice(deleteIndexItem, 1)
            return {
                ...state,
                items: copyState,
                totalCount: copyState.length,
                totalPrice: copyState.reduce((acc, item) => item.price + acc, 0)
            }}

        default:
            return state
    }
}

