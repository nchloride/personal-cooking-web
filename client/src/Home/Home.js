import React from 'react'
import "./home.css"
import CarouselTab from "./Carousel"
import RecipeLayout from '../Layout/RecipeLayout'
const Home = () => {

    return (
        <div className="home">
                <CarouselTab/>
                <RecipeLayout/>
        </div>
    )
}

export default Home
