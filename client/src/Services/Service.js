import React from 'react'
import "./service.css"
import defaultBackground from '../background/Cooking-background.jpg'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
const Service = () => {
    return (
        <div className="services">
            <section className="sevice__container">
                <h1>The home of fresh baking.</h1>
                <div className="scroll_down">
                    <p>Scroll DOWN!</p>
                    <ArrowDownwardIcon/>
                </div>
            </section>
            <section className="sevice__container">
                <h1>Made fresh for YOU!</h1>
                <div className="scroll_down">
                    <p>Scroll DOWN!</p>
                    <ArrowDownwardIcon/>
                </div>
            </section>
            <section className="sevice__container">
                <div>
                    <h1>Home baked stuff of your choice</h1>
                    <h2>Schedule us the day before you want to receive the product</h2>
                    <ul>
                        <li>Maximum of 50 orders</li>
                        <li>Home Delivery</li>
                        <li>Payment first</li>
                    </ul>
                </div>
                <img src={defaultBackground} alt="test"></img>
                <div className="scroll_down">
                    <p>Scroll DOWN!</p>
                    <ArrowDownwardIcon/>
                </div>
            </section>
            <section className="sevice__container"><h1>Hooray for today</h1></section>
        </div>
    )
}

export default Service
