import React from 'react'
import "./Temoignage.css"

export default function Temoignage() {
    return (
        <div className="container-fluid w-100 p-0 m-0">
            <div className="Temoignages row container-fluid m-0">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h2>Romane</h2>
                    <span>Charleroi</span>
                    <p className="paraTemoignage">LIvraison Kv c'est super pratique, quand on veut, où on veut et sans contraite!</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h2>Ela</h2>
                    <span>Namur</span>
                    <p className="paraTemoignage">LIvraison m'a permit de pouvoir offrir mes cadeaxu de Noël à temps malgré que je me suis prise à la dernière minute!! Merci infiniment!!!</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h2>Coralie</h2>
                    <span>Bruxelles</span>
                    <p className="paraTemoignage">Je viens de déménager et Livraison KV m'a permis de reçevoir tous mes achats dans un état impeccable! Les livreuses sont toujours ultra symmpatique et ponctuelles. TOP!</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h2>Rebecca</h2>
                    <span>Arlon</span>
                    <p className="paraTemoignage">Accros à vinted, je reçois et j'envoie des colis tout le temps, livraison KV c'est LA solution facile, agréable et éfficace! Je recommande les yeux fermés!</p>
                </div>
            </div>
        </div>
    )
}
