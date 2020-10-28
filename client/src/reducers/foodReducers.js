import {FETCH_FOODS} from "../types";

export default function foodReducers(state = {foods:[]}, {type,payload}){
    switch (type) {
        case FETCH_FOODS:
            return payload;
        default:
            return state
    }
}