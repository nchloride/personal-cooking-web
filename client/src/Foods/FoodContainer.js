import React from 'react'
import foodImage from "../background/sample.jpg"
const FoodContainer = ({food}) => {
    return (
        <div className="food__container">
            <img alt="" src={foodImage}></img>
            <div className="food__details">
                <h1>{food.name}</h1>
                <h2>{food.description}</h2>
                <button>Read recipe</button>
            </div>
        </div>
    )
}

export default FoodContainer
