// import { Link } from "react-router-dom";

function CharacterItem(props) {

    return (
        <li className="character">
                <img
                    src={props.character.image}
                    className="character__image"
                    alt={`Foto de ${props.character.name}`}
                    title={`Foto de ${props.character.name}`}></img>
                <h4 className="character__name">{props.character.name}</h4>
                <p className="character__data">{`${props.character.species}`}</p>
        </li>)

}

export default CharacterItem;