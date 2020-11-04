import React, { useEffect } from 'react'


const FoodListRow = ({foodList}) => {
    const {name,description,featured,ingredients,type,picture,recipe} = foodList
    useEffect(()=>{
        console.log(foodList);
    },[])
    return (
        <tr>
            <td><img src={picture} alt=""></img></td>
            <td>{name}</td>
            <td>{type}</td>
            <td>{description}</td>
            <td>{ingredients}</td>
            <td>{recipe}</td>
            <td>{featured}</td>
            <td>
                <div>
                    <button>DELETE</button>
                    <button>EDIT</button>
                </div>
            </td>
            
        </tr>
    )
}

export default FoodListRow
