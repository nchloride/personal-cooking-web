import {createStore,compose, applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"
import  foodReducers  from "./reducers/foodReducers"
const initialState = {}

const reducers = combineReducers({
    foodList:foodReducers
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,initialState,applyMiddleware(thunk));
export default store;