import React,{useState} from 'react';
import {NavLink} from "react-router-dom"
import "./homenav.css"
import NavButton from "../NavigationButton.component/NavButton";
import Menu from "@material-ui/core/"
const HomeNav = () => {
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
                <NavLink to="/home" activeClassName="navLink__active" className="navLink">Home</NavLink>
                <NavLink to="/#" onClick={()=>setShowFoodList(prevData=>!prevData)} className="navLink">FoodS
                {showFoodList && 
                    <div style={{display:"flex",flexDirection:"column",position:"absolute",backgroundColor:"white",width:"100px",textAlign:"left"}}>
                        <NavLink to="/food/pastry">Pastry</NavLink>
                        <NavLink to="/food/deserts">Deserts</NavLink>
                        <NavLink to="/food/specialty">Specialty</NavLink>
                    </div>}
                </NavLink>
                <NavLink to="/recipe" activeClassName="navLink__active" className="navLink">Recipe</NavLink>
                <NavLink to="/services" activeClassName="navLink__active" className="navLink">Services</NavLink>
            </ul>
        </nav>
        <NavButton onClick = {handleSideNav}/>
        </>
    )
}

export default HomeNav
