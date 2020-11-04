import axios from "axios"
import { FETCH_FOODS } from "../types";

export const fetchFoods = () => async dispatch => 
{
    const response = await axios.get("/api/foods");
    const data = response.data;
    dispatch({type:FETCH_FOODS,payload:data});
}
