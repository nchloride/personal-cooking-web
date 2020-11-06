import React,{useEffect, useState} from 'react'
import {useForm} from "react-hook-form"
import axios from "axios"
const FoodUpdateForm = ({food,base64Convert,setModalOpen,setRefresh,notEqualsToPlaceHolder}) => {
    const {handleSubmit,errors,register} = useForm();
    const [initialFoodValue,setInitialFoodValue]  = useState( {
        name:food.name,
        type:food.type,
        description:food.description,
        ingredients:food.ingredients.map((ing,id)=>`${ing}\n`),
        recipe:food.recipe,
        featured:food.featured,
        picture:food.picture
    })
    const handleUpdateFood =async data =>{
        data.picture = data.picture.length ===0? food.picture : data.picture
        data._id = food._id
        data.ingredients = data.ingredients.split('\n').filter(ing => ing !== "" && ing !== "," )
        const accessToken = localStorage.getItem("accessToken")
        await  axios.put("/api/foods",data,{headers:{"Authorization":`Bearer ${accessToken}`}}).then(result => console.log(result))
        setRefresh(true);
        setModalOpen(prevData=>!prevData);
    }
    const handleOnchangeFoodState = e =>{
        
        if(e.target.name === 'picture')
        {
            let photos = [];
            Array.prototype.forEach.call(e.target.files, async file =>{
                photos.push(file);
                console.log(file);
            })
            Promise.all(photos.map(async photo=> await base64Convert(photo))).then(val =>{
                
                return setInitialFoodValue({...initialFoodValue,picture:val})
            })
        }
        setInitialFoodValue({...initialFoodValue,[e.target.name]:e.target.value})
    }
    return (
        <form className="food__modal_form" onSubmit={handleSubmit(handleUpdateFood)}>
                <input value={initialFoodValue.name} onChange={handleOnchangeFoodState} type="text" placeholder="Name" name="name" ref={register({required:true})}/>
                <select value={initialFoodValue.type} onChange={handleOnchangeFoodState} ref={register({required:true,validate:notEqualsToPlaceHolder})} name="type">
                    <option value="placeholder" >---Type---</option>
                    <option value="pastry">Pastry</option>
                    <option value="specialty">Specialty</option>
                    <option value="desert">Desert</option>
                </select>
                <textarea value={initialFoodValue.description} onChange={handleOnchangeFoodState} placeholder="Write a description for the food..."  name="description" ref={register({required:true})}/>
                <textarea value={initialFoodValue.ingredients} onChange={handleOnchangeFoodState} placeholder="Ingredients...." name="ingredients" ref={register({required:true})}/>
                <textarea value={initialFoodValue.recipe} onChange={handleOnchangeFoodState} placeholder="Recipe...." name="recipe"  ref={register({required:true})}/>
                <select value={initialFoodValue.featured} onChange={handleOnchangeFoodState} ref={register({required:true,validate:notEqualsToPlaceHolder})} name="featured">
                    <option value="placeholder">Featured?....</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <input type="file" multiple name="picture" onChange={handleOnchangeFoodState}  ref={register({required:food?false:true})}/>
                <div className="images">{food.picture.map((image,id) =>(<img src={image} key={id} alt={initialFoodValue.name}></img>) ) }</div>
                <input type="submit" value="Add food"></input>
        </form>
    )
}

export default FoodUpdateForm
