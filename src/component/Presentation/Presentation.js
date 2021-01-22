import React from 'react'
import "./Presentation.css"
import Carousel from "./Carousel"

export default function Presentation() {
    return (
        <div className="container-fluid">
            <div className="d-flex row noir Presentation">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <Carousel />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 d-flex flex-column justify-content-center">
                    <h1 className="bleu text-center mb-5">Qui Sommes-Nous ?</h1>
                    <div className="d-flex flex-column justify-content-center">
                        <p className="text-white text-justify mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, soluta inventore! Fugiat iusto mollitia culpa libero ipsa cum obcaecati exercitationem accusamus, et harum repudiandae aut alias quae vero sunt quibusdam pariatur beatae. Possimus esse, reprehenderit corporis facere dolorem officia optio suscipit fugit labore aliquam doloremque, aut ea delectus, ducimus explicabo?</p>
                        <p className="text-white text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque veritatis temporibus eveniet, delectus et deleniti amet. Modi iusto odio minus voluptate corrupti excepturi labore voluptatibus architecto, dolor dolore fugiat maiores asperiores tempora? Nulla architecto asperiores qui eveniet. Minima illum iure commodi quam recusandae? Similique.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
