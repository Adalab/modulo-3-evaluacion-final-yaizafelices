//HOOKS//
import React from "react";
import '../styles/App.scss';
import { useState, useEffect } from "react";
import {Link, Route, Routes} from 'react-router-dom';
//import PropTypes from 'prop-types';


//IMAGES//
import logoHeader from '../images/header-hp.png';
import logoFooter from '../images/deathly-hallows.png';


//SERVICES//
import getDataApi from '../services/charactersHarryPotterApi';


function App() {

  //VARIABLES DE ESTADO//

  const [dataCharater, setDataCharater] = useState([]);

    // FETCH //
    useEffect(() => {
      getDataApi().then((dataFromApi) => {
        console.log(dataFromApi);
        setDataCharater(dataFromApi);
      })
    }, []);
  
  return (
    <div>
      <header>
        <image src={logoHeader} alt="Harry Potter"></image>
      </header>
      <main>
        <section></section>

      </main>
      <footer>
        <image src={logoFooter} alt="Logo las reliquias de la muerte"></image>
        <div>
          <p>Created by Yaiza Soria Felices 2022</p>
          
          <span>Examen final módulo 3 ADALAB</span>
        </div>
      </footer>
    </div>
  );
}
export default App;

