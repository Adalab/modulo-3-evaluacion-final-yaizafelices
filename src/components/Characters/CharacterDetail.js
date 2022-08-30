import { Link } from "react-router-dom";
import '../../styles/CharacterDetail.scss';


const CharacterDetail=(props) =>{
    

    return (
        <section className="detail">
            <Link to='/' className='detail__link'>
                    <p >Volver</p>
                    <i className="fa-solid fa-wand-sparkles"></i>
            </Link>
                <article className="detail__card">
                    <img
                        src={props.changeImage(props.characterFound.image) }
                        className="detail__card-image"
                        alt={`Foto de ${props.characterFound.name}`}
                        title={`Foto de ${props.characterFound.name}`}>
                    </img>
                    <div className="detail__card-data">
                        <h4>{props.characterFound.name}</h4>
                        <p>{`Casa: ${props.characterFound.house}`}</p>
                        <p>{`Estatus: ${props.characterFound.alive}`}</p>
                        <p>{`Género: ${props.characterFound.gender}`}</p>
                        <p>{`Especie: ${props.characterFound.species}`}</p>
                        <p>{`Mote: ${props.characterFound.alternate_names}`}</p>
                    </div>
                </article>
        </section>)
}
export default CharacterDetail;