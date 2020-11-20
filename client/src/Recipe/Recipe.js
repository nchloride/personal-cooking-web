import axios from 'axios';
import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import RecipeLayout from '../Layout/RecipeLayout';
import Loading from '../Loading/Loading';
import "./recipe.css";
import RecipeContainer from './RecipeContainer';
const Recipe = () => {
    const {foodname:foodName} = useParams();
    const [foodDetails,setFoodDetails] = useState({});
    
    const name = foodName?.replaceAll("_"," ")
    useEffect(() => {
        (async ()=>{
            await axios.get(`/api/foods/${name}`)
                .then(res=>setFoodDetails(res.data))
        })()
    }, [name]);
    
    
    return (
        foodName?
            !foodDetails ? 
                <div>
                    <h1>Not Found</h1>
                </div>
                :
                foodDetails? <RecipeContainer name={name} foodDetails={foodDetails} />
                :<Loading/>
        :
        <RecipeLayout/>
    )
}

export default Recipe
