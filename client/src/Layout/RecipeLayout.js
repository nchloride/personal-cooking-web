import React, { useEffect, useState } from 'react'
import RecipeCard from '../Recipe/RecipeCard'
import axios from "axios"
import Loading from '../Loading/Loading';
const RecipeLayout = () => {
    const [foods,setFoods] = useState();
    useEffect(()=>{
        (async()=>{
            await axios.get("/api/foods")
                .then(response =>setFoods(response.data))
                    .catch(err=>console.log(err));
        })()
    },[])
    return (
        <div className="recipe__page">
            <h1>Recipe</h1>
            { foods?
                <div className="recipe__container_layout">
                    {foods?.map(food=>(
                        <RecipeCard
                        key={food._id}
                        name={food.name}
                        description={food.description}
                        picture={food.picture[0]}
                        />
                    ))}
                </div>: <Loading/>}
         
        </div>
    )
}

export default RecipeLayout
