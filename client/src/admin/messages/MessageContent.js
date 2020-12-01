import React from 'react'
import {motion} from "framer-motion"
import DeleteIcon from '@material-ui/icons/Delete';
const MessageContent = ({message,handleDelete:Delete}) => {
    const handleDelete = ()=>{
        Delete(message._id);
    }
    return (
        <motion.div layout className="message__content">
            <motion.div  initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} >
                <motion.h2>{message.email}</motion.h2>
                <motion.p>{message.message}</motion.p>
            </motion.div>   
            <motion.button whileTap={{scale:1.1}} onClick={handleDelete}><DeleteIcon/></motion.button>
        </motion.div>   
    )
}

export default MessageContent
