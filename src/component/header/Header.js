import React from 'react';
import react, {Fragment, useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSortDown} from "@fortawesome/free-solid-svg-icons";

import Form from "../form/Form";
import Temoignages from "../Temoignages/Temoignage"
import Presentation from "../Presentation/Presentation";
import Promesse from "../promesse/Promesse";
import "./Header.css";


export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur,setLargeur] = useState(window.innerWidth);

    const toggleMenuSmallScreen = ()=> {
        setToggleMenu (!toggleMenu)
    }

    useEffect(()=>{
    const changeWidth = () =>{
        setLargeur(window.innerWidth)

        if (window.innerWidth > 500){
            setToggleMenu(false);
        }

    }
    window.addEventListener("resize", changeWidth);
    return() =>{
        window.removeEventListener("resize", changeWidth);
    }
},[])

    return (
        <Fragment>
            <Router>
            <nav>
                {toggleMenu || largeur > 500 && (
                    <ul className="list p-0 m-0">
                        <Link to="/">
                            <li className="items">Présentation</li>
                        </Link>
                        <Link to ="/Promesse">
                            <li className="items">Notre offre</li>
                        </Link>
                        <Link to="/Temoignages">
                            <li className="items">Témoignages</li>
                        </Link>
                        <Link to="/Contacts">
                            <li className="items">Contacts</li>
                        </Link>

                    </ul>
                )}
                <button onClick={toggleMenuSmallScreen} className="buttonNav"><FontAwesomeIcon icon={faSortDown} /></button>
            </nav>
            <section className="sectionHeader">
                <h1 className="titleHeader">Livraison KV</h1>
                <span className="spanheader">Service de livraison partout, quand vous voulez</span>
                <button className="buttonHeader">Vous faire livrer</button>
            </section>
            <Switch>
                <Route path="/Temoignages">
                   <Temoignages />
                </Route>
               <Route path="/Contacts">
                   <Form />
                </Route>
                <Route path="/">
                    <Presentation />
                    <Promesse />
                </Route>

            </Switch>
            </Router>
        </Fragment>
    )
}

