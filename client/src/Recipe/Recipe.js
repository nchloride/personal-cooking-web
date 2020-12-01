import axios from 'axios';
import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import RecipeLayout from '../Layout/RecipeLayout';
import Loading from '../Loading/Loading';
import NotFound from '../NotFound/NotFound';
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
            foodDetails ? 
                !foodDetails? <Loading/>
                :
                <RecipeContainer name={name} foodDetails={foodDetails}/>
                :
                <NotFound/>
        :
        <RecipeLayout/>
    )
}

export default Recipe
