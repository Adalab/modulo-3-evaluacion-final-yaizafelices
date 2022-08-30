const FilterByGender = (props) => {

    const handleFilterByGender = (event) => {
        props.handleFilterByGender(event.target.value)
    }
    return (
        <fieldset className="filter">
            <label
                className="filter__label"
                htmlFor="gender">Género:</label>
            <select
                className="filter__input"
                name="gender"
                id="gender"
                value={props.filterByGender}
                onChange={handleFilterByGender}>
                <option value="all">Todos</option>
                <option value="female">Mujer</option>
                <option value="male">Hombre </option>
            </select>
        </fieldset>
    );



}
export default FilterByGender;