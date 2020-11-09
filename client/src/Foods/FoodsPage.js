import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import * as data from "../JSON-Default-Placeholder/foods.json"
import FoodContainer from './FoodContainer'
import {useDispatch,useSelector} from "react-redux"
import "./foods.css"
import { fetchFoods } from '../actions/foodActions'
import axios from 'axios'
const FoodsPage = () => {
    const {category} = useParams();
    const [foodList,setFoodList] = useState([]);
    const selectedCategory = foodList && foodList.filter(food=>food.type === category);
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
                    <div className="food_page__layout">
                        <div className="food__selected">
                            <h1>{pageTitle}</h1>
                            {foodList && selectedCategory.map((food,id)=>(
                                <FoodContainer food={food} key={id}/>
                            ))
                            }
                        </div>
                        <div className="food__featured">
                            <h1>Featured</h1>
                            {selectedCategory.filter(food=>food.featured==="yes").map((food,id)=>(
                                <FoodContainer food={food} key={id}/>
                                ))
                            }
                            tite
                        </div>
                    </div>
                </>:
                <>
                    <div className="food_page__layout">    
                        <div className="food__selected">
                            <h1>Foods</h1>
                            {foodList.map((food,id)=>(
                                <FoodContainer food={food} key={id}/>
                                ))
                            }
                        </div>
                        <div className="food__featured">
                            <h1>Featured</h1>
                            {foodList.filter(food=>food.featured==="yes").map((food,id)=>(
                                <FoodContainer food={food} key={id}/>
                                ))
                            }
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default FoodsPage
