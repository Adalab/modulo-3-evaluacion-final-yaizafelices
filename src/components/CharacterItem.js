import { Link } from "react-router-dom";

const CharacterItem =(props)=> {

    return (
        <li className="character">
            <Link to={`/character/${props.character.id}`}>
                <img
                    src={props.character.image}
                    className="character__image"
                    alt={`Foto de ${props.character.name}`}
                    title={`Foto de ${props.character.name}`}></img>
                <h4 className="character__data">{props.character.name}</h4>
                <p className="character__data">{`${props.character.species}`}</p>
            </Link>
        </li>)

}

export default CharacterItem;