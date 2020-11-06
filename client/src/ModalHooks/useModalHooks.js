import React,{useState} from 'react'

const useModalHooks = (initialState) => {
    const [openModal,setModalOpen] = useState(initialState);


    
    return [openModal,setModalOpen]
}

export default useModalHooks
