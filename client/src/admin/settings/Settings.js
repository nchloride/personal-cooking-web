import axios from 'axios';
import React, { useEffect } from 'react'
import "./settings.css"
export const Settings = () => {
    const accessToken = localStorage.getItem("accessToken");
    useEffect(()=>{
        (async()=>{
            await axios.get("/api/messages",{headers:{'authorization':`Bearer ${accessToken}`}}).then(res=>console.log(res.data))
        })()
    },[])
    return (
        <div className="settings">
            <h1>Settings mofo</h1>
        </div>
    )
}
