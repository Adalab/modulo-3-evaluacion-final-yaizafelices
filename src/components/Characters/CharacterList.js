import CharacterCard from './CharacterCard';
import '../../styles/CharacterList.scss';


const CharacterList=(props) =>{

    const characterElements = props.dataCharater.map((character, index) => {
        return (
            <CharacterCard character={character} key={index}               
            changeImage={props.changeImage}          
            />
        )});


    return (
        <section>
            <ul className='list'>
                {characterElements}
            </ul>
        </section >
    )

    



}
export default CharacterList;