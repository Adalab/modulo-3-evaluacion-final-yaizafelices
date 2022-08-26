//HOOKS//
import React from "react";
import '../styles/App.scss';
import { useState, useEffect } from "react";
// import {Link, Route, Routes} from 'react-router-dom';
//import PropTypes from 'prop-types';



//SERVICES//
import getDataApi from '../services/charactersHarryPotterApi';

//COMPONENTS//
import Header from "./Header";
import Footer from "./Footer";
// import CharacterList from "./CharacterList";

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

    //PAINT ALL THE CHARACTER FROM DE API


      
    


  
  return (
    <div className="completeHtml">
      <Header />
      <main>
      <section>
        <ul>
          <li className="character">
                  <img
                      className="character__img"
                      src={dataCharater.image}
                      alt={`Foto de ${dataCharater.name}`}
                      title={`Foto de ${dataCharater.name}`}></img>
                  <h4 className="character__name">{dataCharater.name}</h4>
                  <p className="character__description">{`${dataCharater.species}`}</p>
            </li>
        </ul>
      </section>

      </main>
      <Footer />
    </div>
  );
}
export default App;

