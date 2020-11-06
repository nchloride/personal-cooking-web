import React, { useEffect } from 'react'
import useModalHooks from '../../ModalHooks/useModalHooks'
import FoodModalAdd from './FoodModalAdd';


const FoodListRow = ({foodList,setRefresh}) => {
    const {name,description,featured,ingredients,type,picture,recipe,_id} = foodList
    const [modalOpen,setModalOpen]= useModalHooks(false);
    useEffect(()=>{
        console.log(foodList);
    },[])
    return (
        <>
        <tr>
            <td><img src={picture[0]} alt=""></img></td>
            <td>{name}</td>
            <td>{type}</td>
            <td>{description}</td>
            <td><ul>{ingredients.map((ing,id)=>(<li key={id}>{ing}</li>))}</ul></td>
            <td>{recipe}</td>
            <td>{featured}</td>
            <td>
                <div>
                    <button>DELETE</button>
                    <button onClick={()=>{setModalOpen(true)}}>EDIT</button>
                </div>
            </td>
        </tr>
        <FoodModalAdd
            setModalOpen={setModalOpen}
            setRefresh={setRefresh}
            modalOpen={modalOpen}
            food = {{name,description,featured,ingredients,type,picture,recipe,_id}} 
        />
        </>
    )
}

export default FoodListRow
