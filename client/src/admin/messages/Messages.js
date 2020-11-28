import React,{useEffect} from "react";
import axios from "axios"
import {motion,AnimateSharedLayout, AnimatePresence} from "framer-motion"
import "./messages.css"
import { useState } from "react";
import MessageContainer from "./MessageContainer";
import {useSelector,useDispatch} from "react-redux";
import { fetchMessages } from "../../actions/messagesActions";

const Messages = ()=>{
    const accessToken = localStorage.getItem("accessToken");
    //const [messages,setMessages] = useState([]);
    const messages = useSelector(state => state.messages);
    const dispatch = useDispatch();
    const [refresh,setRefresh] = useState(false);
    useEffect(()=>{
        dispatch(fetchMessages(accessToken));
        setRefresh(false);
    },[!refresh]);
    const handleDelete = async (_id) =>{
        await axios.delete(`/api/messages/${_id}`,{headers:{"authorization":`Bearer ${accessToken}`}})
        .then(res => setRefresh(true));
    }
    return <div className="messages">
       <h1>Message</h1>
       <AnimateSharedLayout type="crossfade">
            {messages?.map((message,id)=>(
               <MessageContainer key message={message} handleDelete={handleDelete}/>
            ))}
           
        </AnimateSharedLayout>
     
    </div>
}

export default Messages