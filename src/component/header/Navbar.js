import React from 'react';
import "./Navbar.css";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import react, {Fragment, useState, useEffect} from "react";



export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [Largeur, setLargeur] = useState(window.innerWidth)
    const toggleNavSmallScreen  = () => {
        setToggleMenu(!toggleMenu);
    }
    useEffect(()=>{
        const changeWidth= () => {
            setLargeur(window.innerWidth);
            if(window.innerWidth >500){
                setToggleMenu(false);
            }

        }
        window.addEventListener("resize",changeWidth);
        return () =>{
            window.removeEventListener("resize",changeWidth);
        }
    }, [])
    return (
        <Fragment>
            <nav>
                {/* shortcircuitoperator */}
                {toggleMenu && (
                    <ul>
                        <li>Présentation</li>
                        <li>Notre promesse</li>
                        <li>Témoignages</li>
                        <div>
                            <button>Menu</button>
                            <fontAwesome icon icon= {faChevronDown} />
                        </div>
                    </ul>

                )}
                <button onClick={toggleNavSmallScreen} className="btn">Faites-vous livrer</button>
            </nav>
            {/* <nav className="navbar navbar-expand-lg nav">
                <a className="navbar-brand" href="#">
                    <img className="logo" src="/img/logo.png" width={30} height={30} alt="logo" />
                </a>
                <div className="collapse navbar-collapse burger" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                    <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Présentation</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Notre promesse</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Témoignages</a>
                    </li>
                </ul>
                </div> 
                <nav />*/}
        </Fragment>
    )
}
