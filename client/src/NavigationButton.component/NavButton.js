import React from 'react'
import "./navbutton.css"
export default function NavButton(props) {
    return (
        <button className='navigation__button' {...props}>
            <div className="lines"></div>
            <div className="lines"></div>
            <div className="lines"></div>
        </button>
    )
}
