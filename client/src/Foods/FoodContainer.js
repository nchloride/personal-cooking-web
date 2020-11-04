import React from 'react'
import foodImage from "../background/sample.jpg"
const FoodContainer = ({food}) => {
    const foodDescription = food.description.length>=200? `${food.description.substring(0,200)}....`: food.description
    return (
        <div className="food__container">
            <img alt="" src={food.picture}></img>
            <div className="food__details">
                <h1>{food.name}</h1>
                <h2>{foodDescription}</h2>
                <button>Read recipe</button>
            </div>
        </div>
    )
}

export default FoodContainer
