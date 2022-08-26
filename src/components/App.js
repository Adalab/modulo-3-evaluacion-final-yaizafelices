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
import Footer from "./Footer";

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
      <Footer />
    </div>
  );
}
export default App;

