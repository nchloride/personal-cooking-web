import React from 'react'
import Modal from "react-modal"
import {useForm} from "react-hook-form"
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import axios from "axios"
const convertBase64 = photo =>{
    return new Promise((resolve,reject)=>{
        const fileReader = new FileReader();
        fileReader.readAsDataURL(photo)

        fileReader.onload = () =>{
            resolve(fileReader.result);
        }

        fileReader.onerror= (error)=>{
            reject(error)
        }
    })
}
export default function FoodModal({modalOpen,setModalOpen}) {
    const {handleSubmit,errors,register,reset} = useForm();
    const notEqualsToPlaceHolder = value => value !=='placeholder'
    const handleAddFood = async data =>{
        const base64Photo = await convertBase64(data.picture[0]);
        data.picture = base64Photo;
        console.log(data.picture);
        await axios.post("/api/foods",data).then(response=>console.log(response));
        reset()
    }
    Modal.setAppElement("body");
    return (
        <Modal  isOpen={modalOpen} className="food__modal" >
            <button onClick={()=>setModalOpen(!modalOpen)}><HighlightOffIcon/></button>
            <form className="food__modal_form" onSubmit={handleSubmit(handleAddFood)}>
                <input type="text" placeholder="Name" name="name" ref={register({required:true})}/>
                <select ref={register({required:true,validate:notEqualsToPlaceHolder})} name="type">
                    <option value="placeholder" >---Type---</option>
                    <option value="pastry">Pastry</option>
                    <option value="specialty">Specialty</option>
                    <option value="desert">Desert</option>
                </select>
                <textarea placeholder="Write a description for the food..."  name="description" ref={register({required:true})}/>
                <textarea placeholder="Ingredients...." name="ingredients" ref={register({required:true})}/>
                <textarea placeholder="Recipe...." name="recipe" ref={register({required:true})}/>
                <select ref={register({required:true,validate:notEqualsToPlaceHolder})} name="featured">
                    <option value="placeholder">Featured?....</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <input type="file" name="picture" ref={register({required:true,validate:{
                    fileSize:value=>value[0].size<=1000000,
                }})}/>
                <input type="submit" value="Add food"></input>
            </form>
        </Modal>
    )
}
