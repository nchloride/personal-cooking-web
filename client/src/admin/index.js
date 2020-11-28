import React,{useEffect} from 'react'
import axios from "axios"
import {Switch,Route} from "react-router-dom"
import "./admin.css"
import AdminNav from './AdminNav'
import Foods from './foods/Foods'
import { Settings } from './settings/Settings'
import Messages from './messages/Messages'
import { useDispatch } from 'react-redux'
import { fetchMessages } from '../actions/messagesActions'
const Admin = () => {
    const accessToken = localStorage.getItem("accessToken");
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(fetchMessages(accessToken))
    }, [])
    return (
        <div className="admin">
            <AdminNav/>
 
            <Switch>
                <Route path="/dashboard/admin/foods" component={Foods}/>
                <Route path="/dashboard/admin/settings" component={Settings}/>
                <Route path="/dashboard/admin/messages" component={Messages}/>
            </Switch>
        </div>
    )
}

export default (Admin)
