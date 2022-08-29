// HOOKS //
import React from "react";
import '../styles/App.scss';
import { useState, useEffect } from "react";
import { matchPath, Route, Routes, useLocation } from "react-router-dom";
//import PropTypes from 'prop-types';



// SERVICES //
import getDataApi from '../services/charactersHarryPotterApi';
import ls from '../services/localStorage';

// COMPONENTS //
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Footer from "./Footer";


function App() {

  // STATE VARIABLES //

  const [dataCharater, setDataCharater] = useState(ls.get('dataCharacterLs',[]));
  const [filterByCharacter, setFilterByCharacter] = useState(ls.get('filterByCharacterLs',''));
  const [filterByHouse, setFilterByHouse] = useState('Gryffindor');
  const [detailURL, setDetailURL] = useState(ls.get('detailURL_LS', {}));


    // API //
    useEffect(() => {
      getDataApi().then((dataFromApi) => {
        setDataCharater(dataFromApi);
      })
    }, []);

     // LOCAL STORAGE //
     useEffect(() => {
       ls.set('dataCharactersLs', dataCharater);
       ls.set('filterByCharacterLs', filterByCharacter);
       ls.set('detailURL_LS', detailURL);

     }, [dataCharater, filterByCharacter, detailURL]);


    // FILTER BY CHARACTER AND BY HOUSE //
    const handleFilterByCharacter = (value)=>{
      setFilterByCharacter(value);
    }

    const handleFilterByHouse = (value)=>{
      setFilterByHouse(value);
    }

    const handleDetailURL = (value) => {
      setDetailURL(value);
    };


    const characterFilters = dataCharater
    .filter((character) => {
      if (filterByCharacter === "all") {
        return true;
      } else {
        return character.name.toLowerCase().includes(filterByCharacter.toLowerCase());
      }
      })
    .filter((character) => {
        if (filterByHouse === 'all') {
          return true;}
        else {return (character.house === filterByHouse);
        }
      })
    

  




      // OBTAIN ID OF THE CHARACTER SELECTED //
  const { pathname } = useLocation();
  const dataPath = matchPath('/character/:characterId', pathname);

  const characterId = dataPath !== null ? dataPath.params.characterId : null;
  const characterFound = dataCharater.find((dataCharater) => { return dataCharater.id === parseInt(characterId) });




         
    


  
  return (
    <div className="completeHtml">
      <Header />
      <main>
      <Routes>
        <Route 
        path="/" 
        element={
          <>
            <Filters 
              handleFilterByCharacter={handleFilterByCharacter}
              filterByCharacter={filterByCharacter}
              handleFilterByHouse={handleFilterByHouse}
              filterByHouse={filterByHouse}
              handleDetailURL={handleDetailURL}
            />
            <CharacterList 
              dataCharater={characterFilters}
              detailURL={detailURL}
              handleDetailURL={handleDetailURL}
            />

          </>
        }/>
        <Route 
        path='/character/:characterId'
        element={
          <CharacterDetail
            character={characterFound}
            detailURL={detailURL}
          />
          }/>
          


      </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App;

