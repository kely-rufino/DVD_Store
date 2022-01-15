import './DVDsItem.css';
import DVDsItem from './DVDsItem';

function DVDsList(props){
    return (
        <div className="dvdContainer">
        {props.DVDs.map(DVD => (
            <DVDsItem
                key={DVD.id}
                id={DVD.id}
                title={DVD.title}
                movie={DVD.movie}
                genre={DVD.genre}
                year={DVD.year}
                price={DVD.price}
                stock={DVD.stock}
                cart = {props.cart} 
                setCart={props.setCart} 
                totalcost = {props.totalcost} 
                setTotalcost={props.setTotalcost}
                />
                ))}
        </div>
        )
}
export default DVDsList;