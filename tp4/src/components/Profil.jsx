import React from "react";
import Bouton from './Bouton';



class Profil extends React.Component  {
    constructor(props){
        super(props);
        this.state = {couleur : this.props.user.couleur};
        this.state = {jaime : this.props.user.jaime};
        this.changerdeStyle=this.changerdeStyle.bind(this);
        this.compteur=this.compteur.bind(this);
    }
    compteur () {
        this.props.user.jaime = this.props.user.jaime+1;
        this.setState({jaime : this.props.user.jaime});
    }
    changerdeStyle () {
    var randomColor = require('randomcolor');
    this.props.user.couleur=randomColor();
    this.setState({couleur : this.props.user.couleur});
}
render(){
    return(
    <div class="container">
    <div class="container" style={{height : "100%", width :"100%", backgroundColor :  this.props.user.couleur}}>
                <div class="row" >
                    <div class="col-sm" style = {{marginLeft : "40%", marginTop : "5%"}}>
                        <img  src={this.props.user.photo_prof} style={{borderRadius : "50%"}}></img>
                    </div>
                </div>
                <div class="row" style = {{marginTop : "10%"}}>
                <div class="col-sm-6" style = {{margin : "auto"}}>
                    <p>Prenom : {this.props.user.prenom}</p>
                </div>
                <div class="col-sm-6" style = {{margin : "auto"}}>
                    <p>Nom : {this.props.user.nom}</p>
                </div>
                    
                </div>
                <div class="row" style = {{marginTop : "1%"}}>
                    <div class="col-sm-6">
                    <p>Date de Naissance : {this.props.user.date_naiss}</p>
                    </div>
                </div>
                <div class="row" style = {{marginTop : "2%"}}>
                    <div class="col-sm-10">
                    <p></p>
                    </div>
                    <div class="col-sm-2">
                        <a><input type="button" value="Change Style" onClick={this.changerdeStyle}></input></a>
                    </div>
                </div>
                <br></br>
            </div>
            <div class="container" style={{marginTop :"10%", width :"100%",backgroundColor :  this.props.user.couleur}}>
                <div class="row">
                    <div class="col-sm-10">
                    <p></p>
                    </div>
                    <div class="col-sm-2">
                        <div class="row">
                            <a><input type="button" value="C'est Super!!" onClick={this.compteur}></input></a>
                        </div>
                        <div class="row">
                            <p>Nombre de j'aime : {this.props.user.jaime}</p>
                        </div>

                        
                    </div>
                
                    </div>
                </div>
            
            </div>
            
            
        );

    }
}
    

export default Profil;