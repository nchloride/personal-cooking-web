import React,{useEffect} from 'react'
import axios from "axios"
import {Switch,Route} from "react-router-dom"
import "./admin.css"
import AdminNav from './AdminNav'
import Foods from './foods/Foods'
import NavButton from '../NavigationButton.component/NavButton'
const Admin = () => {
    
    return (
        <div className="admin">
            <AdminNav/>
 
            <Switch>
                <Route path="/dashboard/admin/foods" component={Foods}/>
            </Switch>
        </div>
    )
}

export default (Admin)
