import CharacterCard from './CharacterCard';
import '../styles/CharacterList.scss';


const CharacterList=(props) =>{

    const characterElements = props.dataCharater.map((character, index) => {
        return (
            <CharacterCard character={character} key={index}               detailURL={props.detailURL}
            handleDetailURL={props.handleDetailURL} />
        );
    });

    return (
        <section>
            <ul className='list'>
                {characterElements}
            </ul>
        </section >
    )



}
export default CharacterList;