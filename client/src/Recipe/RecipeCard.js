import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const RecipeCard = ({picture,name,description}) => {
    const [hover,hasHover] = useState(false)
    const linkName = name.replace(" ","_")
    const handleHover = ()=>{
        hasHover(true);
    }
    const handleHoverLeave = ()=>{
        hasHover(false);
    }
    return (
        <div className="recipe__card" onMouseEnter={handleHover} onMouseLeave={handleHoverLeave} >
            <img alt="name" src={picture} ></img>
            {/* <div className="card__texts" > */}
            <div className={`card__texts ${hover && 'card__hovered'}`}>
                <div>
                    <h1 className={`recipe__name ${hover ?'text__hovered' :""}` }>{name}</h1>
                    <small className={`recipe__description ${hover ?'text__hovered' :""}` }>{description}</small>
                    <NavLink className={`recipe__link ${hover ?'text__hovered' :""}` } to={{pathname:`/recipe/${linkName}`}}>Read more</NavLink>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard
