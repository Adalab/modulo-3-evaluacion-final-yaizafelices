import FilterByCharacter from "./FilterByCharacter";
import FilterByHouse from "./FilterByHouse";
import Reset from "./Reset";
import '../styles/Filters.scss';

const Filters=(props)=>{
    const handleSubmit = (event) => {
        event.preventDefault();
      };
    return(
        <form className="form" onSubmit={handleSubmit}>
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
                handleDetailURL={props.handleDetailURL}
            />
        </form>

    )
}
export default Filters;