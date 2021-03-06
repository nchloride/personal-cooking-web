import React, { useEffect, useState } from 'react'
import {useForm} from "react-hook-form"
import "./login.css"
import { TextField } from '@material-ui/core';
import axios from 'axios';
const Login = ({setLoggedIn}) => {
    const {handleSubmit,register,errors} = useForm()
    const [message,setMessage] = useState();
    const handleLogin = async (data) =>{
        const resp = await axios.post("/login",data);
        const responseData = resp.data;
        if(responseData.accessToken !== undefined && responseData.accessToken !== null)
        {
            localStorage.setItem("accessToken",responseData.accessToken);
            setLoggedIn(true);
        }
        else
            setMessage("Incorrect password or username");
    }
   
    return (
        <div className="login">
           <form className="login__form"  onSubmit={handleSubmit(handleLogin)}>
                <h1>Login</h1>
                <TextField 
                    inputRef={register({required:true})}
                    error={errors.username}
                    name="username"
                    size="medium"
                    label="Username"
                    variant="outlined"
                    margin="normal"
                    />
                <TextField 
                    inputRef={register({required:true})} 
                    error={errors.password}  
                    type="password"  
                    name="password" 
                    size="medium" 
                    label="Password" 
                    variant="outlined" 
                    margin="normal"
                   />
                <input type="submit"></input>
                 <h2 style={{color:"red",fontSize:"15px", fontWeight:"lighter"}}>{message}</h2>
           </form>
           
        </div>
    )
}

export default Login
