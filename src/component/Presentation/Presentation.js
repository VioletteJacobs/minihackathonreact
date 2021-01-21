import React from 'react'
import "./Presentation.css"
import Carousel from "./Carousel"

export default function Presentation() {
    return (
        <div className="d-flex row noir Presentation">
            <div className="col-6">
                <Carousel />
            </div>
            <div className="col-6 text-center d-flex flex-column justify-content-center">
                <h1 className="bleu mb-5">Qui sommes-nous</h1>
                <div className="text-center d-flex flex-column justify-content-center">
                    <p className="text-white mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, soluta inventore! Fugiat iusto mollitia culpa libero ipsa cum obcaecati exercitationem accusamus, et harum repudiandae aut alias quae vero sunt quibusdam pariatur beatae. Possimus esse, reprehenderit corporis facere dolorem officia optio suscipit fugit labore aliquam doloremque, aut ea delectus, ducimus explicabo?</p>
                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque veritatis temporibus eveniet, delectus et deleniti amet. Modi iusto odio minus voluptate corrupti excepturi labore voluptatibus architecto, dolor dolore fugiat maiores asperiores tempora? Nulla architecto asperiores qui eveniet. Minima illum iure commodi quam recusandae? Similique, alias.</p>
                </div>
            </div>
        </div>
    )
}
