import React from 'react'
import { Link } from 'react-router-dom'
const FoodContainer = ({food}) => {
    const foodDescription = food.description.length>=200? `${food.description.substring(0,200)}....`: food.description
    const foodNameLink = (food.name).replaceAll(" ","_")
    return (
        <div className="food__container">
            <img alt="" src={food.picture[0]}></img>
            <div className="food__details">
                <h1>{food.name}</h1>
                <h2>{foodDescription}</h2>
                <Link className="read__more_link" to={`/recipe/${foodNameLink}`}>Read more</Link>
            </div>
        </div>
    )
}

export default FoodContainer
