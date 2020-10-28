import axios from "axios"
import { FETCH_FOODS } from "../types";

export const fetchFoods = ()=> async dispatch => dispatch({type:FETCH_FOODS,payload:["wa","wo","we"]});
    // const response = await axios.get("/api/foods");
    // const data = response.data;

