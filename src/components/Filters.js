import FilterByCharacter from "./FilterByCharacter";
//import FilterByHouse from "./FilterByHouse";

const Filters=(props)=>{
    return(
        <FilterByCharacter
        characterFilters={props.characterFilters}
        handleFilterByCharacter={props.handleFilterByCharacter}
        />
    )
}
export default Filters;