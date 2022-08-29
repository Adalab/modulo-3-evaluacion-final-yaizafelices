import FilterByCharacter from "./FilterByCharacter";
import FilterByHouse from "./FilterByHouse";

const Filters=(props)=>{
    return(
        <>
            <FilterByCharacter
            characterFilters={props.characterFilters}
            handleFilterByCharacter={props.handleFilterByCharacter}
            filterByCharacter={props.filterByCharacter}
            />
            <FilterByHouse
            characterFilters={props.characterFilters}
            handleFilterByHouse={props.handleFilterByHouse}
            filterByHouse={props.filterByHouse}
            />
        </>
    )
}
export default Filters;