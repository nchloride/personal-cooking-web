import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import "./foods.css"
import axios from 'axios'
import FoodsLayout from '../Layout/FoodsLayout'
const FoodsPage = () => {
    const {category} = useParams();
    const [foodList,setFoodList] = useState([]);
    const [foodLimitCounter,setFoodLimitCounter] =useState(1);
    const foodLimit = 5;
    const newFoodList = foodList.slice(0,foodLimitCounter * foodLimit);
    const limitReached = foodLimitCounter >= newFoodList.length && foodLimitCounter !== newFoodList.length;
    const selectedFood = foodList && foodList.filter(food=>food.type === category);
    const newSelectedFood = selectedFood.slice(0,foodLimitCounter*foodLimit)
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
                    {<FoodsLayout pageTitle={pageTitle} foodList={newSelectedFood} featuredFood={selectedFood} limitReached={limitReached} setFoodLimitCounter={setFoodLimitCounter}/>}
                </>
                :
                <>
                    {<FoodsLayout pageTitle={'Foods'} foodList={newFoodList} featuredFood={foodList} limitReached={limitReached} setFoodLimitCounter={setFoodLimitCounter}/>}
                </>
            }
        </div>
    )
}

export default FoodsPage
