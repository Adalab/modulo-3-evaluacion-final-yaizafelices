import FilterByCharacter from "./FilterByCharacter";
import FilterByHouse from "./FilterByHouse";

const Filters=(props)=>{
    return(
        <>
            <FilterByCharacter
            handleFilterByCharacter={props.handleFilterByCharacter}
            filterByCharacter={props.filterByCharacter}
            />
            <FilterByHouse
            handleFilterByHouse={props.handleFilterByHouse}
            filterByHouse={props.filterByHouse}
            />
        </>
    )
}
export default Filters;