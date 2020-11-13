import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import "./foods.css"
import axios from 'axios'
import FoodsLayout from '../Layout/FoodsLayout'
const FoodsPage = () => {
    const {category} = useParams();
    const [foodList,setFoodList] = useState([]);
    const [foodCounter,setFoodCounter] =useState(1);
    const foodLimit = 1;
    const newFoodList = foodList.slice(0,foodCounter * foodLimit);
    const limitReached = foodList.length <= newFoodList.length;
    const selectedFood = foodList && foodList.filter(food=>food.type === category);
    const newSelectedFood = selectedFood.slice(0,foodCounter*foodLimit)
    const pageTitle = category && `${category[0].toUpperCase()}${category.substring(1,category.length)}` 
    useEffect(()=>{
        (async ()=>{
            await axios.get("/api/foods").then(result=>{
                setFoodList(result.data);
            })
        })()
    },[]);
    return (
        <div className="foods">
            {category ? 
                <> 
                    {<FoodsLayout pageTitle={pageTitle} foodList={newSelectedFood} featuredFood={selectedFood} limitReached={limitReached} setFoodCounter={setFoodCounter}/>}
                </>
                :
                <>
                    {<FoodsLayout pageTitle={'Foods'} foodList={newFoodList} featuredFood={foodList} limitReached={limitReached} setFoodCounter={setFoodCounter}/>}
                </>
            }
        </div>
    )
}

export default FoodsPage
