import { Link } from "react-router-dom";
import '../styles/CharacterDetail.scss';

const CharacterDetail=(props) =>{

    return (
        <section className="detail">
            <Link to='/' className='detail__link'>
                    <p >Volver</p>
                    <i class="fa-solid fa-wand-sparkles"></i>
            </Link>
                <article className="detail__card">
                    <img
                        src={props.character.image}
                        className="detail__card-image"
                        alt={`Foto de ${props.character.name}`}
                        title={`Foto de ${props.character.name}`}>
                    </img>
                    <div className="detail__card-data">
                        <h4>{props.character.name}</h4>
                        <p>{`Casa: ${props.character.house}`}</p>
                        <p>{`Estatus: ${props.character.alive}`}</p>
                        <p>{`Especie: ${props.character.gender}`}</p>
                        <p>{`Género: ${props.character.species}`}</p>
                        <p>{`${props.character.alternate_names}`}</p>
                    </div>
                </article>
        </section>)
}
export default CharacterDetail;