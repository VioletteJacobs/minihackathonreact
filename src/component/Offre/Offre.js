import React from 'react'
import "./Offre.css"
import {faCheckCircle, faTimes} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Offre() {
    return (
        <div className="Offre noir text-center p-3">
            <div className="bleu">
                <h1 className="mt-5">Nos Offres</h1>
            </div>
            <div className="container-fuild">
                <div className="row d-flex justify-content-center mt-5 text-white">
                    <div className="col-lg-3 col-md-4 col-sm-12 border-right border-left">
                        <h3 className="mt-5">Free</h3>
                        <div className="d-flex row mb-5">
                            <div className="d-flex flex-column col-12 text-left">
                                <div className="d-flex justify-content-between">
                                    <span className="m-2">Livraivson 1 à 30 jours</span>
                                    <span className="text-success m-2"><FontAwesomeIcon icon={faCheckCircle} /></span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span className="m-2">Suivis de livraison</span>
                                    <span className="text-success m-2"><FontAwesomeIcon icon={faCheckCircle} /></span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span className="m-2">Compte personnel</span>
                                    <span className="text-success m-2"><FontAwesomeIcon icon={faCheckCircle} /></span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span className="m-2">Retours et remboursements</span>
                                    <span className="text-success m-2"><FontAwesomeIcon icon={faCheckCircle} /></span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span className="m-2">Services après vente</span>
                                    <span className="text-success m-2"><FontAwesomeIcon icon={faCheckCircle} /></span>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <span className="m-2">Livraison 1 à 7 jours</span>
                                    <span className="text-danger m-2"><FontAwesomeIcon icon={faTimes} /></span>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <span className="m-2">Réduction Membre</span>
                                    <span className="text-danger m-2"><FontAwesomeIcon icon={faTimes} /></span>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <span className="m-2">Accès à la boutique Privée</span>
                                    <span className="text-danger m-2"><FontAwesomeIcon icon={faTimes} /></span>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <span className="m-2">Livraison en 24H</span>
                                    <span className="text-danger m-2"><FontAwesomeIcon icon={faTimes} /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12 border-right border-left">
                        <h3 className="mt-5">Membre</h3>
                        <div className="d-flex row mb-5">
                            <div className="d-flex flex-column col-12 text-left">
                                <div className="d-flex justify-content-between">
                                    <span className="m-2">Livraivson 1 à 30 jours</span>
                                    <span className="text-success m-2"><FontAwesomeIcon icon={faCheckCircle} /></span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span className="m-2">Suivis de livraison</span>
                                    <span className="text-success m-2"><FontAwesomeIcon icon={faCheckCircle} /></span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span className="m-2">Compte personnel</span>
                                    <span className="text-success m-2"><FontAwesomeIcon icon={faCheckCircle} /></span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span className="m-2">Retours et remboursements</span>
                                    <span className="text-success m-2"><FontAwesomeIcon icon={faCheckCircle} /></span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span className="m-2">Services après vente</span>
                                    <span className="text-success m-2"><FontAwesomeIcon icon={faCheckCircle} /></span>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <span className="m-2">Livraison 1 à 7 jours</span>
                                    <span className="text-success m-2"><FontAwesomeIcon icon={faCheckCircle} /></span>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <span className="m-2">Réduction Membre</span>
                                    <span className="text-success m-2"><FontAwesomeIcon icon={faCheckCircle} /></span>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <span className="m-2">Accès à la boutique Privée</span>
                                    <span className="text-danger m-2"><FontAwesomeIcon icon={faTimes} /></span>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <span className="m-2">Livraison en 24H</span>
                                    <span className="text-danger m-2"><FontAwesomeIcon icon={faTimes} /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12 border-right border-left">
                        <h3 className="mt-5">Premium</h3>
                        <div className="d-flex row mb-5">
                            <div className="d-flex flex-column col-12 text-left">
                                <div className="d-flex justify-content-between">
                                    <span className="m-2">Livraivson 1 à 30 jours</span>
                                    <span className="text-success m-2"><FontAwesomeIcon icon={faCheckCircle} /></span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span className="m-2">Suivis de livraison</span>
                                    <span className="text-success m-2"><FontAwesomeIcon icon={faCheckCircle} /></span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span className="m-2">Compte personnel</span>
                                    <span className="text-success m-2"><FontAwesomeIcon icon={faCheckCircle} /></span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span className="m-2">Retours et remboursements</span>
                                    <span className="text-success m-2"><FontAwesomeIcon icon={faCheckCircle} /></span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span className="m-2">Services après vente</span>
                                    <span className="text-success m-2"><FontAwesomeIcon icon={faCheckCircle} /></span>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <span className="m-2">Livraison 1 à 7 jours</span>
                                    <span className="text-success m-2"><FontAwesomeIcon icon={faCheckCircle} /></span>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <span className="m-2">Réduction Membre</span>
                                    <span className="text-success m-2"><FontAwesomeIcon icon={faCheckCircle} /></span>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <span className="m-2">Accès à la boutique Privée</span>
                                    <span className="text-success m-2"><FontAwesomeIcon icon={faCheckCircle} /></span>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <span className="m-2">Livraison en 24H</span>
                                    <span className="text-success m-2"><FontAwesomeIcon icon={faCheckCircle} /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
