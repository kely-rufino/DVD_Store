import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props){
    return (
    <div className={classes.display}>
    <li className={classes.item}>
        <Card>
        <div className={classes.image}>
        </div>
        <div className={classes.content}>
            <h3>{props.movie}</h3>
            <p>{props.genre}</p>
            <p>{props.year}</p>
            <p>{props.price}</p>
            <p>Stock: {props.stock}</p>
        </div>
        <div className={classes.actions}>
            <button>Add to Cart</button>
        </div>
        </Card>
    </li>
    </div>
    )
}

export default MeetupItem;