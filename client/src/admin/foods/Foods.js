import React, { useState } from 'react'
import "./foods.css"
import AddCircleIcon from '@material-ui/icons/AddCircle';
import FoodAdd from "./FoodAdd"
const Foods = () => {
    const [modalOpen,setModalOpen] = useState(false)
    return (
        <div className="food_tab">
            <div className="food__title">
                <h1>FOODS</h1>
                <button onClick={()=>setModalOpen(true)}><AddCircleIcon/></button>
            </div>
            <table className="food__table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Ingredient</th>
                        <th>Recipe</th>
                        <th>Featured</th>
                        <th>Changes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            tanga
                        </td>
                        <td>
                            tanga2
                        </td>
                        <td>
                            tanga3
                        </td>
                        <td>
                            tanga
                        </td>
                        <td>
                            tanga2
                        </td>
                        <td>
                            tanga3
                        </td>
                        <td>
                            tanga3
                        </td>
                    </tr>
                </tbody>
            </table>
            <FoodAdd modalOpen={modalOpen} setModalOpen={setModalOpen}/>
        </div>
    )
}

export default Foods
