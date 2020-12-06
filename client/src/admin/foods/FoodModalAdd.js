import React from 'react'
import Modal from "react-modal"
import {useForm} from "react-hook-form"
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import axios from "axios"
import FoodUpdateForm from './FoodUpdateForm';

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

export default function FoodModal({modalOpen,setModalOpen,setRefresh,food}) {
    const {handleSubmit,register,reset} = useForm();
    const notEqualsToPlaceHolder = value => value !=='placeholder'
    const handleAddFood = async data =>{
        data.ingredients = data.ingredients.split(`\n`);
        const accessToken = localStorage.getItem("accessToken")
        const photos =[];   
        Array.prototype.forEach.call(data.picture, file =>{
            photos.push(file)
        })
        Promise.all( photos.map(async photo => await convertBase64(photo))).then(async val=>{
            data.picture=val
            console.log(data.picture);
            await axios.post("/api/foods",data,{headers:{"Authorization":`Bearer ${accessToken}`}}).then(response=>{
                if(response.data.successful){
                    setRefresh(true)
                    reset()
                    alert(response.data.message);
                    return
                }
                alert(response.data.message);
            });
        })    
    }

   
    Modal.setAppElement("body");
    return (
        <Modal  isOpen={modalOpen} className="food__modal" >
            <button onClick={()=>setModalOpen(!modalOpen)}><HighlightOffIcon/></button>
            {food? <FoodUpdateForm setModalOpen={setModalOpen} food={food} setRefresh={setRefresh} base64Convert={convertBase64} notEqualsToPlaceHolder={notEqualsToPlaceHolder}/>
            :
            <form className="food__modal_form" onSubmit={handleSubmit(handleAddFood)}>
                <input type="text" placeholder="Name" name="name" ref={register({required:true})}/>
                <select ref={register({required:true,validate:notEqualsToPlaceHolder})} name="type">
                    <option value="placeholder" >---Type---</option>
                    <option value="pastry">Pastry</option>
                    <option value="specialty">Specialty</option>
                    <option value="deserts">Desert</option>
                    <option value="dinner">dinner</option>
                </select>
                <textarea  placeholder="Write a description for the food..."  name="description" ref={register({required:true})}/>
                <textarea  placeholder="Ingredients...." name="ingredients" ref={register({required:true})}/>
                <textarea  placeholder="Recipe...." name="recipe"  ref={register({required:true})}/>
                <select ref={register({required:true,validate:notEqualsToPlaceHolder})} name="featured">
                    <option value="placeholder">Featured?....</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                
                <input type="file" multiple name="picture" accept="image/x-png,image/gif,image/jpeg" ref={register({required:true})}/>
                <input type="submit" value="Add food"></input>
            </form>}
        </Modal>
    )
}
