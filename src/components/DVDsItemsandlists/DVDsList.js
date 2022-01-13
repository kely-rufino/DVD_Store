import DVDsItem from './DVDsItem';
import classes from './DVDsList.css';

function DVDsList(props){
    return (   
        <ul className={classes.list}>
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