import axios from "axios"
import {FETCH_MESSAGES} from "../types"

export const fetchMessages = (accessToken) => async dispatch =>{
    const response = await axios.get("/api/messages",{headers:{"authorization":`Bearer ${accessToken}`}});
    const data = await response.data;
    dispatch({type:FETCH_MESSAGES,payload:data})
}