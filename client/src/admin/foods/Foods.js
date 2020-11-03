import React, { useState } from 'react'
import "./foods.css"
import AddCircleIcon from '@material-ui/icons/AddCircle';
import FoodModal from './FoodModal';
const Foods = () => {
    const [modalOpen,setModalOpen] = useState(false); 
    const handleAddFood = async data =>{
        console.log(data);
    }
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
            <FoodModal modalOpen={modalOpen} handleOperation={handleAddFood} setModalOpen={setModalOpen}/>
        </div>
    )
}

export default Foods
