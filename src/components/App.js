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
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Footer from "./Footer";


function App() {

  //STATE VARIABLES//

  const [dataCharater, setDataCharater] = useState([]);
  const [filterByCharacter, setFilterByCharacter] = useState("");

    // FETCH //
    useEffect(() => {
      getDataApi().then((dataFromApi) => {
        console.log(dataFromApi);
        setDataCharater(dataFromApi);
      })
    }, []);


    //FILTER BY CHARACTER//
    const handleFilterByCharacter = (value)=>{
      setFilterByCharacter(value);
    }

    const characterFilters = dataCharater
    .filter((character) => {
      if (filterByCharacter === "all") {
        return true;
      } else {
        return character.name.toLowerCase().includes(filterByCharacter.toLowerCase());
      }
      })



      //OBTAIN ID OF THE CHARACTER SELECTED//
  const { pathname } = useLocation();
  console.log(pathname);
  const dataPath = matchPath("/character/:characterId", pathname);

  const characterId = dataPath !== null ? dataPath.params.characterId : null;
  const characterFound = dataCharater.find(dataCharater => { return dataCharater.id === characterId });




         
    


  
  return (
    <div className="completeHtml">
      <Header />
      <Routes>
        <Route 
        path="/" 
        element={
          <>
            <Filters 
              characterFilters={characterFilters}
              handleFilterByCharacter={handleFilterByCharacter}
            />
            <CharacterList dataCharater={characterFilters}/>

          </>
        }/>
        <Route 
        path="/character/:characterId" 
        element={
          <CharacterDetail character={characterFound}/>
          }/>
          


      </Routes>
      <Footer />
    </div>
  );
}
export default App;

