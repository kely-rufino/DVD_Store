import DVDsItem from './DVDsItem';

function DVDsList(props){
    return (   
        <ul>
            {props.DVDs.map(DVD => ( <DVDsItem
                key={DVD.id}
                id={DVD.id}
                title={DVD.title}
                movie={DVD.movie}
                genre={DVD.genre}
                year={DVD.year}
                price={DVD.price}
                stock={DVD.stock}
                />
                ))}
        </ul>
        )
}
export default DVDsList;