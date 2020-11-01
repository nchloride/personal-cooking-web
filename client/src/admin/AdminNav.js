import React from 'react'
import {NavLink} from "react-router-dom"
import NavButton from '../NavigationButton.component/NavButton'
const AdminNav = () => {
    const openNav = ()=>{
        document.querySelector(".admin__navLinks").classList.toggle('admin__navLinks_open');
        document.querySelector(".lines:nth-child(1)").classList.toggle("line_1__slant");
        document.querySelector(".lines:nth-child(2)").classList.toggle("line__deactivate");
        document.querySelector(".lines:nth-child(3)").classList.toggle("line_3__slant");
    }
    return (
        <>
            <ul className="admin__navLinks">
                <NavLink to="/dashboard/admin/foods" className="navLink" activeClassName="navLink__active">Foods</NavLink>
                <NavLink to="/dashboard/admin/settings" className="navLink" activeClassName="navLink__active">Settings</NavLink>
                <NavLink to="/dashboard/admin/messages"className="navLink" activeClassName="navLink__active">Messages</NavLink>
            </ul>
            <NavButton onClick={openNav}/>
        </>
    )
}

export default AdminNav
