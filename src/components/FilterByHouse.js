const FilterByHouse = (props) => {

    const handleFilterByHouse = (event) => {
        props.handleFilterByHouse(event.target.value);
    }

    return (
        <fieldset className="filter">
            <label
                className="filter__label"
                htmlFor="house">Selecciona la casa:</label>
            <select
                className="filter__input"
                name="house"
                id="house"
                value={props.filterByHouse}
                onChange={handleFilterByHouse}>
                <option value="Gryffindor">Gryffindor</option>
                <option value="Slytherin">Slytherin</option>
                <option value="Hufflepuff">Hufflepuff</option>
                <option value="Ravenclaw">Ravenclaw</option>
                <option value="">Otros</option>
                <option value="all">Todas</option>
            </select>
        </fieldset>

    );

}
export default FilterByHouse;