import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bouton from './components/Bouton';
import Profil from './components/Profil';

const profils = [
  {
    nom: "bob",
    prenom : "Jeanne",
    date_naiss : "21 Mai",
    photo_prof : "https://picsum.photos/200",
    couleur : "red",
    jaime : 0,
  },
  {
    nom: "martine",
    prenom : "Martine",
    date_naiss : "23 Mai",
    photo_prof : "https://picsum.photos/200",
    couleur : "blue",
    jaime : 0,
  },
  {
    nom: "camille",
    prenom: "Claude",
    date_naiss : "26 Mai",
    photo_prof : "https://picsum.photos/200",
    couleur : "purple",
    jaime : 0,

  }
];

function App() {
  console.log(window.location.pathname); //si on peut voir l'url en haut
  var id=window.location.pathname[1] === undefined ? 0 : window.location.pathname[1]
  console.log(id)
  return (
    <div class ="container">
    <div class="row">
      <div class="col-sm-6"> </div>
     <div class="col-sm-2"><Bouton name="Jeanne" id="0" /></div>
     <div class="col-sm-2"><Bouton name="Martine" id="1" /></div>
     <div class="col-sm-2"><Bouton name="Claude" id="2" /></div>
    </div>
    <Profil user= {profils[id]} />
      </div>
   
     
    
  );
}

export default App;
