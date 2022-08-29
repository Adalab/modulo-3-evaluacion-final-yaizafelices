const FilterByCharacter = (props) => {

    const handleFilterByCharacter = (event) => {
        props.handleFilterByCharacter(event.target.value);
    }

    return (
        <form>
            <label className="label-character" htmlFor="FilterByCharacter">Buscar por personaje</label>
            <input 
            className="inputCharacter"
            type="text" 
            id="FilterByCharacter" 
            onChange={handleFilterByCharacter} 
            value={props.filterByCharacter} />
        </form>
    );

}
export default FilterByCharacter;