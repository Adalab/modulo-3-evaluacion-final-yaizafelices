//HOOKS//
import React from "react";
import '../styles/App.scss';
import { useState, useEffect } from "react";
import { matchPath, Route, Routes, useLocation } from "react-router-dom";
//import PropTypes from 'prop-types';



//SERVICES//
import getDataApi from '../services/charactersHarryPotterApi';

//COMPONENTS//
import Header from "./Header";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
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

      //OBTAIN ID OF THE CHARACTER SELECTED//
  const { pathname } = useLocation();
  console.log(pathname);
  const dataPath = matchPath("/character/:characterId", pathname);

  const characterId = dataPath !== null ? dataPath.params.characterId : null;
  const characterFound = dataCharater.find(user => { return dataCharater.id === characterId });

         
    


  
  return (
    <div className="completeHtml">
      <Header />
      <Routes>
        <Route path="/" element={
          <CharacterList dataCharater={dataCharater}/>
        }/>
        <Route path="/character/:characterId" element={
          <CharacterDetail character={characterFound}/>
          }/>
          


      </Routes>
      <Footer />
    </div>
  );
}
export default App;

