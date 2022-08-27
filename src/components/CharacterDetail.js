const CharacterDetail=(props) =>{

    return (
        <section className="character__detail">
            <a href="./">
                <img
                    src={props.character.image}
                    className="character__detail-image"
                    alt={`Foto de ${props.character.name}`}
                    title={`Foto de ${props.character.name}`}>
                </img>
                <h4 className="character__detail-data">{props.character.name}</h4>
                <p className="character__detail-data">{`${props.character.species}`}</p>
            </a>
        </section>)

}

export default CharacterDetail;