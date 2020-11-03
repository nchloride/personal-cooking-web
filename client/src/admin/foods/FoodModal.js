import React from 'react'
import Modal from "react-modal"
import {useForm} from "react-hook-form"

export default function FoodModal({modalOpen,setModalOpen,handleOperation}) {
    const {handleSubmit,errors,register,reset} = useForm();
    
    Modal.setAppElement("body");
    return (
        <Modal  isOpen={modalOpen} className="food__modal" >
            <button onClick={()=>setModalOpen(!modalOpen)}>X</button>
            <form className="food__modal_form" onSubmit={handleSubmit(handleOperation)}>
                <input type="text" placeholder="Name" name="name" ref={register({required:true})}/>
                <select ref={register({required:true})} name="type">
                    <option >---Type---</option>
                    <option value="pastry">Pastry</option>
                    <option value="specialty">Specialty</option>
                    <option value="desert">Desert</option>
                </select>
                <textarea placeholder="Write a description for the food..."  name="description" ref={register({required:true})}/>
                <textarea placeholder="Ingredients...." name="ingredients" ref={register({required:true})}/>
                <textarea placeholder="Recipe...." name="recipe" ref={register({required:true})}/>
                <select ref={register({required:true})} name="featured">
                    <option >Featured?....</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <input type="file" name="picture" ref={register({required:true})}/>
                <input type="submit" value="Submit"></input>
            </form>
        </Modal>
    )
}
