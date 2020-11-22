import React from 'react'
import {Link} from "react-router-dom"
const ContactInformation = () => {
    return (
        <div className="contact">
            <div className="contact__links">
                <ul>
                    <li>
                        <Link className="contact_link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="contact_link" to="/foods">Foods</Link>
                        <ul>
                            <li>
                                <Link className="contact_link" to="/foods/pastry">Pastry</Link>
                            </li>
                            <li>
                                <Link className="contact_link" to="/foods/dinner">Dinner</Link>
                            </li>
                            <li>
                                <Link className="contact_link" to="/foods/specialty">Specialty</Link>
                            </li>
                            <li>
                                <Link className="contact_link" to="/foods/deserts">Deserts</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link className="contact_link" to="/recipe">Recipe</Link>
                    </li>
                    <li>
                        <Link className="contact_link" to="/services">Services</Link>
                    </li>
                </ul>
            </div>
            <div className="contact__message">
                <form>
                    <h1>Contact us!</h1>
                    <input name="name" placeholder="Your Name"></input>
                    <input name="email" placeholder="Email"></input>
                    <textarea name="message" placeholder="Message...."></textarea>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        </div>
    )
}

export default ContactInformation
