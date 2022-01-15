import { useState } from 'react';
import AddItemfunc from '../AddItemfunc';
import './DVDsItem.css';

function DVDsItem(props){

const [ cart, setCart ] = useState ([])
const [ totalcost, setTotalcost] = useState(0)

const addtoCart = (props) => {
    setCart([...cart, props.movie])
    setTotalcost(totalcost + props.price )
    console.log(props.movie)
    console.log(props.price)
}
const removeFromCart = (removeTheDvd) => {
    setCart(
        cart.filter((removeDvd) => removeDvd !== removeTheDvd))
        setTotalcost(totalcost - removeTheDvd.price)
}

    return (
    <div className="dvdItem">
        <div className="image">
        </div>
        <div className="content">
            <h3>{props.movie}</h3>
            <p>{props.genre.join(" | ")}</p>
            <p>{props.year}</p>
            <p>£ {props.price.split("£")}</p>
            <p>Stock: {props.stock}</p>
        </div>
        <AddItemfunc movie = {props.movie} price = {props.price} cart = {props.cart} setCart={props.setCart} totalcost = {props.totalcost} setTotalcost={props.setTotalcost} />        
    </div>
    )
    
}
export default DVDsItem;