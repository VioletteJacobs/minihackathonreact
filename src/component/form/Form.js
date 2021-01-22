import React, { Component } from 'react'
import "./Form.css"

export class Input extends Component {
    state={
        prenom:"",
        nom:"",
        adresse:"",
        nombreColis:"",
        typeColis:"",
        items:[],
    }
    // event.target.name correspond au name de chaque input, quand on sera dedans, la valeur de l'event changera en fonction de ce qu'on mettra dedans.
    onChange= (event)=>{
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state.nom);
    }
    // soumettre le formulaire
    onSubmit =(event)=>{
        event.preventDefault();
        this.setState({
            prenom:"",
            nom:"",
            adresse:"",
            nombreColis:"",
            typeColis:"",
            // permet de remettre le form à zéro mais de préserver les données écrites via un spread operator
            items:[...this.state.items, {prenom: this.state.prenom, nom: this.state.nom, adresse: this.state.adresse, nombreColis: this.state.nombreColis, typeColis: this.state.typeColis}]
        });
    }

    nouvelleCard = () => {
        // on mappe via les items qui regroupent ce qu'on a écriot dans les inputs
        return this.state.items.map((items, index) => {
            return(
                <div className="card" key={index}>
                    <div className="cardBody w-100">
                        <p className="confirmation"> 
                            Bonjour <span className="spanConfirmation">{items.prenom}</span>, vous avez demandé une livraison de <span className="spanConfirmation">{items.nombreColis}</span> colis à l'adresse suivante: <span className="spanConfirmation">{items.adresse}</span>.
                        </p>
                    </div>
                </div>
            )
        })
    }


    render() {
        return (
            <div>
                <h1 className="titleDelivery">Formulaire de livraison</h1>
                <div className="card">
                    <div className="CardHeader"> 
                        <span className="spanForm">Ajouter une livraison</span> 
                    </div>
                    <div className="cardBody w-100 justify-content-center">

                        <form onSubmit={this.onSubmit}>

                            <div className="formGroup row">
                                <div className=" col-12 d-flex d-sm-block row">
                                    <div className="col-lg-3 col-md-12 col-sm-12 d-flex justicy-content-center align-items-center justify-content-sm-center">
                                        <label className="labelForm " htmlFor="preom">Prénom : </label>
                                    </div>
                                    <div className="col-lg-9 col-md-12 col-sm-12">
                                        <input onClick ={(e)=>{e.target.classList.toggle("bginput")}}className="inputForm"type="text" name="prenom"
                                    onChange={this.onChange}
                                    value= {this.state.prenom}
                                    />
                                    </div>
                                </div>
                            </div>

                            <div className="formGroup">
                                <div className=" col-12 d-flex d-sm-block row">
                                    <div className="col-lg-3 col-md-12 col-sm-12 d-flex justicy-content-center align-items-center justify-content-sm-center">
                                        <label className="labelForm " htmlFor="nom">Nom : </label>
                                    </div>
                                    <div className="col-lg-9 col-md-12 col-sm-12">
                                        <input onClick ={(e)=>{e.target.classList.toggle("bginput")}}className="inputForm"type="text" name="nom"
                                    onChange={this.onChange}
                                    value= {this.state.nom}
                                    />
                                    </div>
                                </div>
                            </div>

                            <div className="formGroup">
                                <div className=" col-12 d-flex d-sm-block row">
                                    <div className="col-lg-3 col-md-12 col-sm-12 d-flex justicy-content-center align-items-center justify-content-sm-center">
                                        <label className="labelForm " htmlFor="adresse">Adresse : </label>
                                    </div>
                                    <div className="col-lg-9 col-md-12 col-sm-12">
                                        <input onClick ={(e)=>{e.target.classList.toggle("bginput")}}className="inputForm"type="text" name="adresse"
                                    onChange={this.onChange}
                                    value= {this.state.adresse}
                                    />
                                    </div>
                                </div>
                            </div>

                            <div className="formGroup">
                                <div className=" col-12 d-flex d-sm-block row">
                                    <div className="col-lg-3 col-md-12 col-sm-12 d-flex justicy-content-center align-items-center justify-content-sm-center">
                                        <label className="labelForm " htmlFor="adresse">Nombre de colis : </label>
                                    </div>
                                    <div className="col-lg-9 col-md-12 col-sm-12">
                                        <input onClick ={(e)=>{e.target.classList.toggle("bginput")}}className="inputForm"type="number" name="nombreColis"
                                    onChange={this.onChange}
                                    value= {this.state.nombreColis}
                                    />
                                    </div>
                                </div>
                            </div>

                            <div className="formGroup">
                                <div className=" col-12 d-flex d-sm-block row">
                                    <div className="col-lg-3 col-md-12 col-sm-12 d-flex justicy-content-center align-items-center justify-content-sm-center">
                                        <label className="labelForm " htmlFor="typeColis">Type de colis : </label>
                                    </div>
                                    <div className="col-lg-9 col-md-12 col-sm-12">
                                    <select onClick ={(e)=>{e.target.classList.toggle("bginput")}} className="form-control selectForm typeColis" id="exampleFormControlSelect1">
                                        <option>Frais</option>
                                        <option>Electroménager</option>
                                        <option>Meubles</option>
                                        <option>Fragile</option>
                                        <option>Urgent</option>
                                    </select>
                                    </div>
                                </div>
                            </div>
                    
                            <div className="buttonDiv">
                                <button className="buttonForm">Confirmer votre livraison</button>
                            </div>

                        </form>
                    </div>
                </div>
                {this.nouvelleCard()}
            </div>
        )
    }
}

export default Input
