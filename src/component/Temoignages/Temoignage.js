import React from 'react'
import react, {useState} from "react"
// import style
import "./Temoignage.css"
// import icone
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";


export default function Temoignage() {
    const [temoin1, setTemoin1] = useState("Praticité")
    const [temoin2, setTemoin2] = useState("Rapidité")
    const [temoin3, setTemoin3] = useState("Amabilité")
    const [temoin4, setTemoin4] = useState("Flexibilité")

    return (
        <div className="container-fluid w-100 p-0 m-0">
            <div className="Temoignages row container-fluid m-0">

                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h2>Romane</h2>
                    <span>Charleroi</span>
                    <p onMouseOver={()=>{
                            setTemoin1(" 5 étoiles sans hésiter!")
                        }} 
                        onMouseOut={()=>{
                        setTemoin1("Livraison Kv c'est super pratique, quand on veut, où on veut et sans contraite! ")
                        }}className="paraTemoignage">{temoin1}</p>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h2>Ela</h2>
                    <span>Namur</span>
                    <p onMouseOver={()=>{
                            setTemoin2(" 4,5 étoiles!")
                        }} 
                        onMouseOut={()=>{
                        setTemoin2("Livraison KV m'a permis de pouvoir offrir mes cadeaux de Noël à temps malgré mon propre retard!! Merci infiniment!!!")
                        }}className="paraTemoignage">{temoin2}</p>

                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h2>Coralie</h2>
                    <span>Bruxelles</span>
                    <p onMouseOver={()=>{
                            setTemoin3(" 5 étoiles!")
                        }} 
                        onMouseOut={()=>{
                        setTemoin3("Je viens de déménager et Livraison KV m'a permis de reçevoir tous mes achats dans un état impeccable! Les livreuses sont toujours ultra symmpatique et ponctuelles. TOP!")}}className="paraTemoignage">{temoin3}</p>

                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h2>Rebecca</h2>
                    <span>Arlon</span>
                    <p onMouseOver={()=>{
                            setTemoin4(" 5 étoiles! Et bien plus si je pouvais!")
                        }} 
                        onMouseOut={()=>{
                        setTemoin4("Accros à vinted, je reçois et j'envoie des colis tout le temps, livraison KV c'est LA solution facile, agréable et éfficace! Je recommande les yeux fermés!")}}className="paraTemoignage">{temoin4}</p>

                </div>
            </div>
        </div>
    )
}
