import axios from 'axios';
import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import {Carousel} from 'react-bootstrap';
import "./recipe.css";
const Recipe = () => {
    const {foodname:foodName} = useParams();
    const [foodDetails,setFoodDetails] = useState({});
    
    const name = foodName?.replaceAll("_"," ")
    useEffect(() => {
        (async ()=>{
            await axios.get(`/api/foods/${name}`)
                .then(res=>setFoodDetails(res.data))
        })()
    }, [foodName]);
    
    
    return (
        foodName?
            foodDetails ? 
                <div className="recipe">
                    <h1>{name}</h1>
                    <ul>
                        { foodDetails.ingredients?.map((ingredient,id)=>
                            <li key={id}>{ingredient}</li>
                        )}
                    </ul>
                    <p>{foodDetails.description}</p>
                    <Carousel>
                        {foodDetails.picture?.map((image,id)=>(
                            <Carousel.Item key={id}>
                                <img  src={image} alt={foodDetails.name}/>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
                :
                <div>
                    <h1>Not Found</h1>
                </div>
            
        :<h1>Recipe</h1>
    )
}

export default Recipe
