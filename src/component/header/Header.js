import React from 'react'
import react, {Fragment} from "react"
import Navbar from "./Navbar"
import "./Header.css"


export default function Header() {
    return (
        <Fragment>
            <Navbar />
            <section className="sectionHeader">
                <h1>Livraison KV</h1>
                <span>Service de livraison partout, quand vous voulez</span>
            </section>
        </Fragment>
    )
}

