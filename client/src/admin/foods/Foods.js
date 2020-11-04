import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./foods.css"
import AddCircleIcon from '@material-ui/icons/AddCircle';
import FoodModal from './FoodModal';
import {useSelector,useDispatch} from "react-redux"
import { fetchFoods } from '../../actions/foodActions';
import FoodListRow from './FoodListRow';

const Foods = () => {
    const [modalOpen,setModalOpen] = useState(false); 
    const foodList = useSelector(state => state.foodList);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchFoods());
    },[])
    return (
        <div className="food_tab">
            <div className="food__title">
                <h1>FOODS</h1>
                <button onClick={()=>setModalOpen(true)}><AddCircleIcon/></button>
            </div>
            <table className="food__table">
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
                    {foodList && foodList.map(food =><FoodListRow foodList={food} key={foodList._id}/>)}
                </tbody>
            </table>
            <FoodModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
        </div>
    )
}

export default Foods
