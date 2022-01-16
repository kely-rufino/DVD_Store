import AddItemfunc from '../AddItemfunc';
import './DVDsItem.css';

function DVDsItem(props){

    return (
    <div className="dvdItem">
        <div className="image">
        </div>
        <div key={props.DVD.id} className="content">
            <h3>{props.DVD.movie}</h3>
            <p>{props.DVD.genre.join(" | ")}</p>
            <p>{props.DVD.year}</p>
            <p>{props.DVD.price}</p>
            <p>Stock: {props.DVD.stock}</p>
        </div>
        <AddItemfunc DVD = {props.DVD}
                     cart = {props.cart}
                     setCart={props.setCart}
                     totalcost = {props.totalcost}
                     setTotalcost={props.setTotalcost} />
    </div>
    )    
}
export default DVDsItem;