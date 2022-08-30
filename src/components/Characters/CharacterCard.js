import { Link } from "react-router-dom";


const CharacterCard =(props)=> {

    return (
        <li className="character" >
            <Link to={`/character/${props.character.id}`}>
                <article>
                    <img
                        src={props.changeImage(props.character.image) }
                        className="character__image"
                        alt={`Foto de ${props.character.name}`}
                        title={`Foto de ${props.character.name}`}></img>
                    <h4 className="character__data">{props.character.name}</h4>
                    <p className="character__data">{`${props.character.species}`}</p>
                </article>               
            </Link>
        </li>)

}

export default CharacterCard;