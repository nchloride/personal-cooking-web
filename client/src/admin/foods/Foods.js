import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./foods.css"
import AddCircleIcon from '@material-ui/icons/AddCircle';
import FoodModal from './FoodModalAdd';
import {useSelector,useDispatch} from "react-redux"
import { fetchFoods } from '../../actions/foodActions';
import FoodListRow from './FoodListRow';
import useModalHooks from '../../ModalHooks/useModalHooks';

const Foods = () => {
    const accessToken = localStorage.getItem("accessToken")
    const [modalOpen,setModalOpen] = useModalHooks(false); 
    const [refresh,setRefresh] = useState();
    const foodList = useSelector(state => state.foodList);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchFoods());
        setRefresh(false)
    },[!refresh])
    const handleDelete = async(Id) =>{
        await axios.delete(`/api/foods/${Id}`,{headers:{'Authorization':`Bearer ${accessToken}`}})
                .then(response =>setRefresh(true))
    }
    return (
        <div className="food_tab">
            <div className="food__title">
                <h1>FOODS</h1>
                <button onClick={()=>setModalOpen(true)}><AddCircleIcon/></button>
            </div>
            <table className="food__table" >
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Ingredient</th>
                        <th>Recipe</th>
                        <th>Featured</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {foodList && foodList.map(food =><FoodListRow handleDelete={handleDelete} setRefresh={setRefresh} foodList={food} key={food._id}/>)}
                </tbody>
            </table>
            <FoodModal modalOpen={modalOpen} setRefresh={setRefresh} setModalOpen={setModalOpen}/>
        </div>
    )
}

export default Foods
