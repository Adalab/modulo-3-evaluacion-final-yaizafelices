const getDataApi = () => {
    return fetch("http://hp-api.herokuapp.com/api/characters")
        .then(response => response.json())
        .then(data => {
            //limpiar los datos y solo quedarme con lo que interesa
            const dataClean = data.results.map((character, index) => {
                return {
                    id: index,
                    image: character.image,
                    name: character.name,
                    species: character.species,
                }
            });
            return dataClean;
        });
}

export default getDataApi;