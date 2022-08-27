import CharacterItem from './CharacterItem';
import '../styles/CharacterList.scss';


function CharacterList(props) {

    const characterElements = props.dataCharater.map((item) => {
        return (
            <CharacterItem character={item} key={item.id} />
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