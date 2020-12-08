import React,{useEffect} from "react";
import axios from "axios"
import {AnimateSharedLayout} from "framer-motion"
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
    const [newMessages,setNewMessages] = useState(messages)
    useEffect(()=>{
        dispatch(fetchMessages(accessToken));
        
    },[]);
    const handleDelete = async (_id) =>{
        await axios.delete(`/api/messages/${_id}`,{headers:{"authorization":`Bearer ${accessToken}`}})
        .then(res =>{
            setNewMessages(prevMessages=>prevMessages?.filter(msg=> msg._id !==_id))
        });
    }
    return <div className="messages">
       <h1>Message</h1>
       <AnimateSharedLayout type="crossfade">
            {newMessages?.map((message,id)=>(
               <MessageContainer key={id} message={message} handleDelete={handleDelete}/>
            ))}
           
        </AnimateSharedLayout>
     
    </div>
}

export default Messages