const getDataApi = () => {
    return fetch("http://hp-api.herokuapp.com/api/characters")
        .then(response => response.json())
        .then((data) => {
            const dataClean = data.map((character,index) => {
                return {
                    id: index,
                    image: character.image,
                    name: character.name,
                    species: character.species,
                    house: character.house,
                    alive: character.alive,
                    gender: character.gender,
                    alternate_names: character.alternate_names,
                    ancestry: character.ancestry,
                    
                }
            });
            return dataClean;
        });
}

export default getDataApi;