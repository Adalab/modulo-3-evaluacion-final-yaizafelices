const FilterByHouse = (props) => {

    const handleFilterByHouse = (event) => {
        props.handleFilterByHouse(event.target.value);
    }

    return (
        <>
            <label
                className=""
                htmlFor="house">Selecciona la casa:</label>
            <select
                className=""
                name="house"
                id="house"
                value={props.filterByHouse}
                onChange={handleFilterByHouse}>
                <option value="Gryffindor" selected>Gryffindor</option>
                <option value="Slytherin">Slytherin</option>
                <option value="Hufflepuff">Hufflepuff</option>
                <option value="Ravenclaw">Ravenclaw</option>
                <option value="">Otros</option>
                <option value="all">Todas</option>
            </select>
        </>

    );

}
export default FilterByHouse;