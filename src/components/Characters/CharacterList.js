import CharacterCard from './CharacterCard';
import '../../styles/CharacterList.scss';


const CharacterList=(props) =>{

    const characterElements = props.dataCharater.map((character, index) => {
        return (
            <CharacterCard character={character} key={index}               
            changeImage={props.changeImage} characterFound={props.characterFound}         
            />
        )});
    if (props.dataCharater.length === 0) {
            return (
                <div className="list__false">
                    <p className="list__false-text1">
                    El personaje que buscas no se encuentra en el mapa del merodeador.</p>
                    <p className="list__false-text2">Pincha en reset y pronuncia travesura realizada</p>
                </div>
            );
          }    


    return (
        <section>
            <ul className='list'>
                {characterElements}
            </ul>
        </section >
    )

    



}
export default CharacterList;