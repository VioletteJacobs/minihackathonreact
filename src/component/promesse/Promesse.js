import { React,useState } from 'react'
import "./Promesse.css"
import { faHome,faTruck,faTruckLoading,faBoxes, } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Promesse() {

    let icon = document.getElementsByClassName("iconPromesse")

    const animOverIcon = ( () => {
        icon[0].classList.toggle("animOver")
        icon[0].classList.remove("animOut")
        setTimeout(() => {
            icon[1].classList.toggle("animOver")
            icon[1].classList.remove("animOut")
        }, 1000);

        setTimeout(() => {
            icon[2].classList.toggle("animCamionOver")
            icon[2].classList.remove("animCamionOut")
        }, 2000);

    })
    
    const animOutIcon = ( () => {
        icon[0].classList.toggle("animOut")
        icon[0].classList.toggle("animOver")
        setTimeout(() => {
            icon[1].classList.toggle("animOut")
            icon[1].classList.toggle("animOver")
        }, 1000);

        setTimeout(() => {
            icon[2].classList.toggle("animCamionOut")
            icon[2].classList.toggle("animCamionOver")
        }, 2000);

    })
    
    return (
        <div className="container-fluid">
            <div className="Promesse row d-flex justify-content-center">
                <h1 className="bleu m-5">Plus Qu'un Engagement</h1>
                <div onMouseOut={animOutIcon} onMouseOver={animOverIcon} className="col-lg-10 col-md-12 col-sm-12 d-flex justify-content-around mb-5">
                    <div className="iconPromesse">
                        <FontAwesomeIcon icon={faBoxes} />
                    </div>
                    <div className="iconPromesse">
                        <FontAwesomeIcon icon={faTruckLoading} />
                    </div>
                    <div className="iconPromesse">
                        <FontAwesomeIcon icon={faTruck} />
                    </div>
                    <div className="iconPromesse">
                        <FontAwesomeIcon icon={faHome} />
                    </div>
                </div>
                <div className="Promesse">
                    <p className="text-white text-center mb-5">Plus qu'un engagement, cela reste notre priorité envers vous que vous recevez votre colis dans les 24h qui suivent votre commande. Nous mettons tous en oeuvre pour que votre expérience n'est que plus satisfaisante envers notre compagnie.</p>
                </div>
            </div>
        </div>
    )
}
