import React from 'react';
import "./Footer.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";


export default function Footer() {

    function  paddingOn (e){
        e.target.classList.toggle("paddingOn")
    }
    function  paddingOff (e){
        e.target.classList.remove("paddingOn")
    }

    return (
        <div>
            <section className="footer">
                <div>
                    <ul className="listeIcon">
                        <a onMouseOver= {paddingOn} onMouseOut={paddingOff} className= "icon" href=""><FontAwesomeIcon icon={faFacebook} /></a>
                        <a onMouseOver= {paddingOn} onMouseOut={paddingOff} className= "icon" href=""><FontAwesomeIcon icon={faInstagram} /></a>
                        <a onMouseOver= {paddingOn} onMouseOut={paddingOff} className= "icon" href=""><FontAwesomeIcon icon={faTwitter} /></a>
                    </ul>
                </div>
                <div>
                    <span className= "copyright">
                        © copyright KevletteDev
                    </span> 
                </div>
            </section>
            
        </div>
    )
}
