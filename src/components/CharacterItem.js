// import { Link } from "react-router-dom";

function CharacterItem(props) {

    return (
        <li >
                <img
                    src={props.character.image}
                    alt={`Foto de ${props.character.name}`}
                    title={`Foto de ${props.character.name}`}></img>
                <h4 >{props.character.name}</h4>
                <p >{`${props.character.species}`}</p>
        </li>)

}

export default CharacterItem;