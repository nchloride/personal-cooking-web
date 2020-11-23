import React from 'react';
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from 'axios';
const ContactInformation = () => {
    const {handleSubmit,register,reset} = useForm();
    
    const handleSendingMessage = async(data) =>{
        await axios.post("/api/messages",data).then(res=>{
            reset()
            alert(res.data.message)
        })
    }
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
                <form onSubmit={handleSubmit(handleSendingMessage)}>
                    <h1>Contact us!</h1>
                    <input name="name" ref={register({required:true})} placeholder="Your Name"></input>
                    <input name="email" ref={register({required:true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/  })} placeholder="Email"></input>
                    <textarea name="message" ref={register({required:true})} placeholder="Message...."></textarea>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        </div>
    )
}

export default ContactInformation
