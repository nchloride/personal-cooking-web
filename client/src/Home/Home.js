import React from 'react'
import "./home.css"
import CarouselTab from "./Carousel"
import RecipeLayout from '../Layout/RecipeLayout'
import Service from '../Services/Service'
const Home = () => {

    return (
        <div className="home">
                <CarouselTab/>
                <RecipeLayout/>
                <Service/>
        </div>
    )
}

export default Home
