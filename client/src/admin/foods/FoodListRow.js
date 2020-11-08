import React from 'react'
import useModalHooks from '../../ModalHooks/useModalHooks'
import FoodModalAdd from './FoodModalAdd';


const FoodListRow = ({foodList,setRefresh,handleDelete}) => {
    const {name,description,featured,ingredients,type,picture,recipe,_id} = foodList
    const [modalOpen,setModalOpen]= useModalHooks(false);
    const onClickedDelete = ()=>{
        handleDelete(_id)
    }
    const onCLickedModalOpen = ()=>{
        setModalOpen(true)
    }
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
                    <button onClick={onClickedDelete} className="delete">DELETE</button>
                    <button onClick={onCLickedModalOpen} className="edit">EDIT</button>
                </div>
            </td>
        </tr>
        <FoodModalAdd
            setModalOpen={setModalOpen}
            setRefresh={setRefresh}
            modalOpen={modalOpen}
            food = {foodList} 
        />
        </>
    )
}

export default FoodListRow
