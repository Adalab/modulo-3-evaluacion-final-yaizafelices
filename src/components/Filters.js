import FilterByCharacter from "./FilterByCharacter";
import FilterByHouse from "./FilterByHouse";
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
            <button className="btn-reset">
            <i class="fa-solid fa-broom-ball"></i>
                Reset
            </button>
        </form>

    )
}
export default Filters;