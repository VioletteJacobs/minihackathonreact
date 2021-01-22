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
            typecolis:"",
            // permet de remettre le form à zéro mais de préserver les données écrites via un spread operator
            items:[...this.state.items, {nom: this.state.nom, age:this.state.age, profession:this.state.profession}]
        });
    }

    nouvelleCard = () => {
        // on mappe via les items qui regroupent ce qu'on a écriot dans les inputs
        return this.state.items.map((items, index) => {
            return(
                <div className="card" key={index}>
                    <div className="cardBody">
                        <p> 
                            Bonjour {items.prneom}, vous avez demandé une livraison de {items.nombreColis} colis à l'adresse suivante: {items.adresse}. Vos colis sont de types {items.typeColis}
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
                    <div className="cardBody">

                        <form onSubmit={this.onSubmit}>

                            <div className="formGroup">

                                <label className="labelForm" htmlFor="preom">Prénom : </label>
                                <input className="inputForm" type="text" name="prenom"
                                onChange={this.onChange}
                                value= {this.state.prenom}
                                />
                            </div>

                            <div className="formGroup">

                                <label className="labelForm" htmlFor="nom">Nom : </label>
                                <input className="inputForm" type="text" name="nom"
                                onChange={this.onChange}
                                value= {this.state.nom}
                                />
                            </div>

                            <div className="formGroup">

                                <label className="labelForm" htmlFor="Adresse">Adresse : </label>
                                <input className="inputForm" type="text" name="adresse"
                                onChange={this.onChange}
                                value= {this.state.adresse}
                                />
                            </div>
                            <div className="formGroup">

                                <label className="labelForm" htmlFor="Adresse">Nombre de colis : </label>
                                <input className="inputForm" type="number" name="nombreColis"
                                onChange={this.onChange}
                                value= {this.state.nombreColis}
                                />
                            </div>
                            <div className="form-group">

                                <label className="labelForm" htmlFor="exampleFormControlSelect1">Type de colis : </label>
                                <select className="form-control selectForm" id="exampleFormControlSelect1">
                                <option>Frais</option>
                                <option>Electroménager</option>
                                <option>Meubles</option>
                                <option>Fragile</option>
                                <option>Urgent</option>
                                </select>
                            </div>

                            <button className="buttonForm">Confirmer votre livraison</button>

                        </form>
                    </div>
                </div>
                {this.nouvelleCard()}
            </div>
        )
    }
}

export default Input
