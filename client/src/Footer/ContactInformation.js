import React,{useState} from 'react';
import {NavLink} from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from 'axios';
const ContactInformation = () => {
    const {handleSubmit,register,reset} = useForm();
    const [responseMessage,setResponseMessage] = useState('');
    const handleSendingMessage = async(data) =>{
        await axios.post("/api/messages",data)
            .then(res=>{
                console.log(res.data.message);
                setResponseMessage(res.data.message);
                reset();
            })
            .catch(error=>{
                console.warn(error);
            })
        }
          
    return (
        <div className="contact">
            <div className="contact__links">
                <ul>
                    <li>
                        <NavLink className="contact_link" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="contact_link" to="/foods">Foods</NavLink>
                        <ul>
                            <li>
                                <NavLink className="contact_link" to="/foods/pastry">Pastry</NavLink>
                            </li>
                            <li>
                                <NavLink className="contact_link" to="/foods/dinner">Dinner</NavLink>
                            </li>
                            <li>
                                <NavLink className="contact_link" to="/foods/specialty">Specialty</NavLink>
                            </li>
                            <li>
                                <NavLink className="contact_link" to="/foods/deserts">Deserts</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink className="contact_link" to="/recipe">Recipe</NavLink>
                    </li>
                    <li>
                        <NavLink className="contact_link" to="/services">Services</NavLink>
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
            <div className="contact__response" style={{display:responseMessage ? "block":"none"}}>
                <h1>{responseMessage}</h1>
                <button onClick={()=>setResponseMessage("")}>Okay</button>
            </div>
        </div>
    )
}

export default ContactInformation
