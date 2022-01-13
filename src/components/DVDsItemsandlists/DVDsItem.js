import Card from '../ui/Card';
import classes from './DVDsItem.css';

function DVDsItem(props){
    return (
    <div>
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
            </div>
        </Card>
    </li>
    </div>
    )
}

export default DVDsItem;