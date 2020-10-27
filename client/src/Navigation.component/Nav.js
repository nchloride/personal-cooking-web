import React,{useState} from 'react';
import {NavLink} from "react-router-dom"
import "./homenav.css"
import NavButton from "../NavigationButton.component/NavButton";
const Nav = () => {
    const [showFoodList,setShowFoodList] = useState(false)
    const handleSideNav = ()=>{
        document.querySelector(".navigation").classList.toggle('nav_button__clicked');
        document.querySelector(".lines:nth-child(1)").classList.toggle("line_1__slant");
        document.querySelector(".lines:nth-child(2)").classList.toggle("line__deactivate");
        document.querySelector(".lines:nth-child(3)").classList.toggle("line_3__slant");
    }
    return (
        <>
        <nav className="navigation">
            <ul className="navigation__links">
                <NavLink to="/" exact activeClassName="navLink__active" className="navLink">Home</NavLink>
                <div onClick={()=>setShowFoodList(prevData=>!prevData)} className="navLink">Foods
                {showFoodList && 
                    <div className="navLink__dropDown_links">
                        <NavLink to="/food/pastry" className="dropDown_links">Pastry</NavLink>
                        <NavLink to="/food/deserts" className="dropDown_links">Deserts</NavLink>
                        <NavLink to="/food/specialty" className="dropDown_links">Specialty</NavLink>
                    </div>}
                </div>
                <NavLink to="/recipe" activeClassName="navLink__active" className="navLink">Recipe</NavLink>
                <NavLink to="/services" activeClassName="navLink__active" className="navLink">Services</NavLink>
            </ul>
        </nav>
        <NavButton onClick = {handleSideNav}/>
        </>
    )
}

export default Nav
