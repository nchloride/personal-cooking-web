import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import defaultBackground from "../background/Cooking-background.jpg"
import defaultBackground2 from "../background/Cooking2-background.jpg"
import Carousel from "react-bootstrap/Carousel"
const CarouselTab = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item className="carousel__item">
                    <h1>Carolyn Gullon</h1>
                    <img alt="1" className="carousel__image" src={defaultBackground}></img>
                </Carousel.Item>
                <Carousel.Item className="carousel__item">
                    <h1>Home Baked Goodies</h1>
                    <img alt="2" className="carousel__image" src={defaultBackground2}></img>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default CarouselTab
