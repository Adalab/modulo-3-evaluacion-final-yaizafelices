import FilterByCharacter from "./FilterByCharacter";
import FilterByHouse from "./FilterByHouse";
import Reset from "./Reset";
import '../styles/Filters.scss';

const Filters=(props)=>{
    return(
        <form className="form">
            <FilterByCharacter
                handleFilterByCharacter={props.handleFilterByCharacter}
                filterByCharacter={props.filterByCharacter}
            />
            <FilterByHouse
                handleFilterByHouse={props.handleFilterByHouse}
                filterByHouse={props.filterByHouse}
            />
            <Reset
                handleFilterByCharacter={props.handleFilterByCharacter} 
                handleFilterByHouse={props.handleFilterByHouse}
                handleDetailUrl={props.handleDetailUrl}
            />
        </form>

    )
}
export default Filters;