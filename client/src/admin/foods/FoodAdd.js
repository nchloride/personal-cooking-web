import React from 'react'
import Modal from "react-modal"

const customStyles = {
    content:{
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        transform             : 'translate(-50%, -50%)'
    }
}
export default function FoodAdd({modalOpen,setModalOpen}) {
    Modal.setAppElement("body");
    return (
        <Modal style={customStyles} isOpen={modalOpen}>
            <button onClick={()=>setModalOpen(!modalOpen)}>X</button>
            <h1>HAL GODMORENGG</h1>
        </Modal>
    )
}
