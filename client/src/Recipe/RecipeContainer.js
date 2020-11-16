import React from 'react'
import {Carousel} from 'react-bootstrap';
const RecipeContainer = ({name,foodDetails}) => {
    return (
            <div className="recipe__container">
                    <Carousel className="recipe__carousel">
                        {foodDetails.picture?.map((image,id)=>(
                            <Carousel.Item className="recipe__img_container" key={id}>
                                <img  src={image} alt={foodDetails.name}/> 
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <div className="recipe__details">
                        <h1>{name}</h1>
                        <p>{foodDetails.description}</p>
                        <ul>
                            { foodDetails.ingredients?.map((ingredient,id)=>
                                <li key={id}>{ingredient}</li>
                            )}
                        </ul>
                        <small>{foodDetails.recipe}</small>
                    </div>
                   
            </div>
    )
}

export default RecipeContainer
