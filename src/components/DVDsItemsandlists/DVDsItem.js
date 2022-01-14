import classes from './DVDsItem.css';

function DVDsItem(props){
    return (
    <div>
    <ul>
    <li>
        <div className={classes.image}>
        </div>
        <div className={classes.content}>
            <h3>{props.movie}</h3>
            <p>{props.genre.join(" | ")}</p>
            <p>{props.year}</p>
            <p>{props.price}</p>
            <p>Stock: {props.stock}</p>
        </div>
        <div className={classes.actions}>
        </div>        
    </li>
    </ul>
    </div>
    )
}

export default DVDsItem;