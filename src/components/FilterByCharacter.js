const FilterByCharacter = (props) => {

    const handleFilterByCharacter = (event) => {
        props.handleFilterByCharacter(event.target.value);
    }

    return (
        <fieldset className="filter">
            <label className="filter__label" htmlFor="FilterByCharacter">Buscar por personaje</label>
            <input 
            className="filter__input"
            type="text" 
            id="FilterByCharacter" 
            onChange={handleFilterByCharacter} 
            value={props.filterByCharacter} />
        </fieldset>
    );

}
export default FilterByCharacter;