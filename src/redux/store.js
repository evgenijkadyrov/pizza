import {
    applyMiddleware,
    combineReducers,
    compose,
    legacy_createStore as createStore
} from "redux";
import thunk from "redux-thunk";
import {cart, filters, pizzas} from './index'

const rootReducer = combineReducers({
        filters,
        pizzas,
        cart
    }
)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));
window.store = store