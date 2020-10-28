import React, { useEffect } from 'react'
import {useParams} from "react-router-dom"
import * as data from "../JSON-Default-Placeholder/foods.json"
import FoodContainer from './FoodContainer'
import {useDispatch,useSelector} from "react-redux"
import "./foods.css"
import { fetchFoods } from '../actions/foodActions'
const FoodsPage = () => {
    const {category} = useParams();
    const foodList = useSelector(state=> state.foodList);
    const dispatch = useDispatch()
    const foods = data.default;
    const selectedCategory = data.default.filter(food=>food.type === category);
    const pageTitle = category && `${category[0].toUpperCase()}${category.substring(1,category.length)}` 
    useEffect(()=>{
        console.log(category);
        console.log(data.default);
        dispatch(fetchFoods());
        console.log(foodList);
    },[]);
    return (
        <div className="foods">
            {category ?
                <> 
                    <h1>{pageTitle}</h1>
                    {selectedCategory.map((food,id)=>(
                        <FoodContainer food={food} key={id}/>
                    ))
                    }
                </>:
                <>
                    <h1>Foods</h1>
                    <div className="food_page__layout">
                        <div className="food__selected">
                            {foods.map((food,id)=>(
                                <FoodContainer food={food} key={id}/>
                                ))
                            }
                        </div>
                        <div className="food__featured">
                            <h1>Featured</h1>
                            {foods.filter(food=>food.featured===true).map((food,id)=>(
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
