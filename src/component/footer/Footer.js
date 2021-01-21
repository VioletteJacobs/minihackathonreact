import React from 'react'
import "./Footer.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons"

export default function Footer() {
    return (
        <div>
            <section className="footer">
                <div>
                    <ul className="listeIcon">
                        <a className= "icon" href="">Facebook</a>
                        <a className= "icon" href="">Instagram</a>
                        <a className= "icon" href="">Twitter</a>
                    </ul>
                </div>
                <div>
                    © copyright KevletteDev

                </div>
            </section>
            
        </div>
    )
}
