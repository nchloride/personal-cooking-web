import {FETCH_MESSAGES} from "../types";


export const messageReducers =(state={messages:[]},{type,payload})=>{
    switch (type) {
        case FETCH_MESSAGES:
            return payload;
    
        default:
            return state;
    }
}
export default messageReducers