import React from 'react'
import ContactInformation from './ContactInformation'
import "./footer.css"
const Footer = () => {
    return (
        <footer className="footer">
            <ContactInformation/>
           <small>
                © Copyright 2020, All Rights Reserved | Carolyn Gullon | Developed by <a href="https://www.facebook.com/noelcarlo.lopez.3" target="_blank">Carlo Lopez</a>
           </small>
        </footer>
    )
}

export default Footer
