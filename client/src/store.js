import {createStore, applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"
import  foodReducers  from "./reducers/foodReducers"
import  messageReducers from "./reducers/messagesReducers"
const initialState = {}

const reducers = combineReducers({
    foodList:foodReducers,
    messages:messageReducers
})
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,initialState,applyMiddleware(thunk));
export default store;