import CharacterItem from './CharacterItem';


function CharacterList(props) {

    const characterElements = props.dataCharater.map((item) => {
        return (
            <CharacterItem character={item} key={item.id} />
        );
    });

    return (
        <section>
            <ul >
                {characterElements}
            </ul>
        </section >
    )



}
export default CharacterList;