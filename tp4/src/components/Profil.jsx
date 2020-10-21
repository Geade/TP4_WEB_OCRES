import React from "react";
import Bouton from './Bouton';



const Profil = props => {
    console.log(props);
    function ChangerdeStyle (vari) {
    var randomColor = require('randomcolor');
    vari = randomColor();
    return vari;
}
    return(
        <div class="container">
<div class="container" style={{height : "100%", width :"100%", backgroundColor :  props.user.couleur}}>
            <div class="row" >
                <div class="col-sm" style = {{marginLeft : "40%", marginTop : "5%"}}>
                    <img  src={props.user.photo_prof} style={{borderRadius : "50%"}}></img>
                </div>
            </div>
            <div class="row" style = {{marginTop : "10%"}}>
            <div class="col-sm-6" style = {{margin : "auto"}}>
                <p>Prenom : {props.user.prenom}</p>
            </div>
            <div class="col-sm-6" style = {{margin : "auto"}}>
                <p>Nom : {props.user.nom}</p>
            </div>
                
            </div>
            <div class="row" style = {{marginTop : "1%"}}>
                <div class="col-sm-6">
                 <p>Date de Naissance : {props.user.date_naiss}</p>
                </div>
            </div>
            <div class="row" style = {{marginTop : "2%"}}>
                <div class="col-sm-10">
                 <p></p>
                </div>
                <div class="col-sm-2">
                    <a><input type="button" value="Change Style" onClick={props.user.couleur=ChangerdeStyle()}></input></a>
                    <p>{props.user.couleur}</p>
                </div>
            </div>
            <br></br>
        </div>
        <div class="container" style={{marginTop :"10%", width :"100%",backgroundColor :  props.user.couleur}}>
            <p>BONJOUR blablablabla</p>
            <div class="row">
                 <div class="col-sm-10">
                 <p></p>
                </div>
                <div class="col-sm-2">
                    <a><input type="button" value="C'est Super!!"></input></a>
                </div>
            
                </div>
            </div>
           
        </div>
        
        
    );

}

export default Profil;