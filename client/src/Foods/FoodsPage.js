import React, { useEffect } from 'react'
import {useParams} from "react-router-dom"
import * as data from "../JSON-Default-Placeholder/foods.json"
import "./foods.css"
const FoodsPage = () => {
    const {category} = useParams();
    const foods = data.default;
    const selectedCategory = data.default.filter(food=>food.type === category);
    const pageTitle = `${category[0].toUpperCase()}${category.substring(1,category.length)}` 
    useEffect(()=>{
        console.log(category);
        console.log(data.default);
        console.log(category[0].toUpperCase());

    },[]);
    return (
        <div className="foods">
            {category ?
                <> 
                    <h1>{pageTitle}</h1>
                    {selectedCategory.map((food,id)=>(
                        <div key={id} className="food__container">
                            <h1>{food.name}</h1>
                            <h2>{food.description}</h2>
                        </div>))
                    }
                </>:
                <>
                    <h1>Foods</h1>
                    {foods.map((food,id)=>(
                        <div key={id} className="food__container">
                            <h1>{food.name}</h1>
                            <h2>{food.description}</h2>
                        </div>))
                    }
                </>
            }
        </div>
    )
}

export default FoodsPage
