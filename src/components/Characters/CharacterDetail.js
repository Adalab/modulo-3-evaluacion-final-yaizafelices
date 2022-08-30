import { Link } from "react-router-dom";
import '../../styles/CharacterDetail.scss';


const CharacterDetail=(props) =>{

    const characterAlive = (value) => {
        if (value === true) {
            return (<p>Estatus: Vivo <i className="fa-solid fa-heart icon-alive"></i></p>)
        }
        else {
            return <p>Estatus: Muerto <i className="fa-solid fa-skull-crossbones icon-dead"></i></p>
        }
    }

    const characterGender = () => {
        if (props.characterFound.gender === 'female') {
            return <p>Género: Femenino <i className="fa-solid fa-venus icon-genre"></i></p>
        }
        else {
            return <p>Género: Masculino <i className="fa-solid fa-mars icon-genre"></i></p>
        }
    }

    if (!props.characterFound) {
        return (
          <>
            <Link to='/' className='detail__link'>
                    <p >Volver</p>
                    <i className="fa-solid fa-wand-sparkles icon-return"></i>
            </Link>
            <p className="detail__error">Personaje No Encontrado</p>
          </>
        );
      }

      else{
    return (
        <section className="detail">
            <Link to='/' className='detail__link'>
                    <p >Volver</p>
                    <i className="fa-solid fa-wand-sparkles icon-return"></i>
            </Link>
                <article className={`detail__card detail__card__${props.characterFound.house}`}>
                    <img
                        src={props.changeImage(props.characterFound.image) }
                        className="detail__card-image"
                        alt={`Foto de ${props.characterFound.name}`}
                        title={`Foto de ${props.characterFound.name}`}>
                    </img>
                    <div className="detail__card-data">
                        <h4>{props.characterFound.name}</h4>
                        <p>{`Casa: ${props.characterFound.house}`}</p>
                        {characterAlive(props.characterFound.alive)}
                        {characterGender(props.characterFound.gender)}
                        <p>{`Especie: ${props.characterFound.species}`}</p>
                        <p>{`Mote: ${props.characterFound.alternate_names}`}</p>
                    </div>
                </article>
        </section>)}
}
export default CharacterDetail;