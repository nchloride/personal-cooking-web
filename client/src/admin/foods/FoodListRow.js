import React from 'react'
import useModalHooks from '../../ModalHooks/useModalHooks'
import FoodModalAdd from './FoodModalAdd';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
const {useEffect,useState} = React;
const FoodListRow = ({foodList,setRefresh,handleDelete}) => {
    const {name,description,featured,ingredients,type,picture,recipe,_id} = foodList
    const [modalOpen,setModalOpen]= useModalHooks(false);
    const [isResized,setIsResized] = useState(false);
    const onClickedDelete = ()=>{
        handleDelete(_id)
    }
    const onCLickedModalOpen = ()=>{
        setModalOpen(true)
    }
    useEffect(() => {
        window.addEventListener('resize',()=>{
           console.log(window.innerWidth) 
            if(window.innerWidth <= 1080){
                console.log(true);
                setIsResized(true);
                return
            }
            setIsResized(false);
            return
        })
     
        return()=>{
            window.removeEventListener('resize',()=>{
                console.log(window.innerWidth) 
             })
        }
    }, [])
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
                    <button onClick={onClickedDelete} className="delete"><DeleteIcon style={{height:"10%"}}/>{!isResized && `DELETE`}</button>
                    <button onClick={onCLickedModalOpen} className="edit"><EditIcon style={{height:"10%"}}/>{!isResized && `EDIT`}</button>
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
