import React, { useEffect, useState } from 'react'
import {Switch,Route, Redirect} from "react-router-dom"
import Login from '../Login'
import axios from "axios"
import Admin from "../admin"
const Dashboard = ({setEnableNav}) => {
    const [loggedIn,setLoggedIn] = useState(false);
    useEffect(()=>{
        setEnableNav(false)
        const stillLogin = async ()=>{
                await axios.get("/isLogin").then(response=>{
                    if(response.data.authenticated) setLoggedIn(true)
                    else{
                        localStorage.removeItem("accessToken")
                    }
                })
            }
        stillLogin()
     
    },[])
    if(!loggedIn){ return (
        <Switch>
            <Route path="/dashboard" exact children={<Login setLoggedIn={setLoggedIn}/>}/>
            <Redirect to="/dashboard"/>
        </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/dashboard/admin/:tab?" exact children={<Admin setLoggedIn={setLoggedIn}/>}/>
            <Redirect to="/dashboard/admin"/>
        </Switch>
    )
}

export default Dashboard
