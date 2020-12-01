import React,{useState} from 'react';
import {motion,AnimatePresence} from "framer-motion";
import MessageContent from "./MessageContent";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
const MessageContainer = ({message,handleDelete}) => {
    const [isOpen,setIsOpen] = useState(false)
    const handleModalClose = ()=>{
        setIsOpen(!isOpen)
    }
    return (
        <motion.div className={"message__container"}>
            <motion.div  className="message__container_name"  onClick={handleModalClose}>
                <motion.h1  animate={{fontSize:20}} >{message.name}</motion.h1>
                {isOpen ?<ExpandLessIcon className="drop__down"/> : <ExpandMoreIcon className="drop__down"/>}
            </motion.div> 
            <AnimatePresence>
                {isOpen && (
                    <MessageContent message={message} handleDelete={handleDelete}/>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default MessageContainer
