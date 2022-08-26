//HOOKS//
import React from "react";
import '../styles/App.scss';
import { useState, useEffect } from "react";
import {Link, Route, Routes} from 'react-router-dom';
//import PropTypes from 'prop-types';



//SERVICES//
import getDataApi from '../services/charactersHarryPotterApi';

//COMPONENTS//
import Header from "./Header";

function App() {

  //STATE VARIABLES//

  const [dataCharater, setDataCharater] = useState([]);

    // FETCH //
    useEffect(() => {
      getDataApi().then((dataFromApi) => {
        console.log(dataFromApi);
        setDataCharater(dataFromApi);
      })
    }, []);
  
  return (
    <div className="completeHtml">
      <Header />
      <main>
        <section></section>

      </main>
      <footer>
        <div>
          <p>Created by Yaiza Soria Felices 2022</p>
          
          <span>Examen final módulo 3 ADALAB</span>
        </div>
      </footer>
    </div>
  );
}
export default App;

