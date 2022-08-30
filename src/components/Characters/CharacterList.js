import CharacterCard from './CharacterCard';
import '../../styles/CharacterList.scss';


const CharacterList=(props) =>{

    const characterElements = props.dataCharater.map((character, index) => {
        return (
            <CharacterCard character={character} key={index}               
            changeImage={props.changeImage}          
            />
        )});
    if (props.dataCharater.length === 0) {
            return (
                <p className="list-false">
                  No hemos encontrado un personaje con las siguientes características:
                </p>
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