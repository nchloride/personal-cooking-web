import React from 'react'
import FoodContainer from '../Foods/FoodContainer'

const FoodsLayout = ({pageTitle,foodList,featuredFood,limitReached,setFoodCounter}) => {
    return (
    <div className="food_page__layout">
        <div className="food__selected">
            <h1>{pageTitle}</h1>
            {foodList.map((food,id)=>(
                <FoodContainer food={food} key={id}/>
            ))
            }
            {!limitReached && <button onClick={()=>setFoodCounter(prevData=>prevData*2)}>Load</button>}
        </div>
        <div className="food__featured">
            <h1>Featured</h1>
            {featuredFood.filter(food=>food.featured==="yes").map((food,id)=>(
                <FoodContainer food={food} key={id}/>
                ))
            }
        </div>
    </div>
    )
}

export default FoodsLayout
