import { Link } from "react-router-dom";

const CharacterDetail=(props) =>{

    return (
        <section className="character__detail">
            <Link to='/' className=''>
                <p className='character__detail-link'>Volver</p>
                <i class="fa-solid fa-wand-sparkles"></i>
            </Link>
                <img
                    src={props.character.image}
                    className="character__detail-image"
                    alt={`Foto de ${props.character.name}`}
                    title={`Foto de ${props.character.name}`}>
                </img>
                <h4 className="character__detail-data">{props.character.name}</h4>
                <p className="character__detail-data">{`${props.character.house}`}</p>
                <p className="character__detail-data">{`${props.character.alive}`}</p>
                <p className="character__detail-data">{`${props.character.gender}`}</p>
                <p className="character__detail-data">{`${props.character.species}`}</p>
                <p className="character__detail-data">{`${props.character.alternate_names}`}</p>
        </section>)
}
export default CharacterDetail;