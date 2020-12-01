import React from 'react'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import "./notfound.css"
const NotFound = () => {
    return (
        <div className="notfound">
            <div className="notfound__logo">
                <p>4</p>
                <ErrorOutlineIcon className="sign"/>
                <p>4</p>
            </div>
            <p className="notfound__text">Page not found</p>
        </div>
    )
}

export default NotFound
