import React from 'react'
import "./Promesse.css"
import { faHome,faTruck,faTruckLoading,faBoxes, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Promesse() {
    return (
        <div className="Promesse row d-flex justify-content-center">
            <h1 className="bleu m-5">Plus Qu'un Engagement</h1>
            <div className="col-lg-10 col-md-12 col-sm-12 d-flex justify-content-around mb-5">
                <div className="iconPromesse brun">
                    <FontAwesomeIcon icon={faBoxes} />
                </div>
                <div className="iconPromesse">
                    <FontAwesomeIcon icon={faTruckLoading} />
                </div>
                <div className="iconPromesse">
                    <FontAwesomeIcon icon={faTruck} />
                </div>
                <div className="iconPromesse maison">
                    <FontAwesomeIcon icon={faHome} />
                </div>
            </div>
            <div className="Promesse">
                <p className="text-white text-center mb-5">Plus qu'un engagement, cela reste notre priorité envers vous que vous recevez votre colis dans les 24h qui suivent votre commande. Nous mettons tous en oeuvre pour que votre expérience n'est que plus satisfaisante envers notre compagnie.</p>
            </div>
        </div>
    )
}
