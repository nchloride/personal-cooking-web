import React, { useEffect } from 'react'
import {useParams} from "react-router-dom"
import * as data from "../JSON-Default-Placeholder/foods.json"
import FoodContainer from './FoodContainer'
import "./foods.css"
const FoodsPage = () => {
    const {category} = useParams();
    const foods = data.default;
    const selectedCategory = data.default.filter(food=>food.type === category);
    const pageTitle = category && `${category[0].toUpperCase()}${category.substring(1,category.length)}` 
    useEffect(()=>{
        console.log(category);
        console.log(data.default);

    });
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
