import './DVDsItemsandlists/DVDsItem.css';
import RemoveItemfunc from './RemoveItemfunc';

function Cartstorage(props) {

    return (
        <div>
            <h1>Your Cart</h1>
                <div>
                    {props.cart.map((item, i) =>
                        <div key={i} className="cartItem">
                            <p>{item}</p>
                            <RemoveItemfunc cart = {props.cart} setCart = {props.setCart} totalcost = {props.totalcost} setTotalcost = {props.setTotalcost} selecteditem = {item}/>
                        </div>
                                   
                    )}
                    
                </div>
               
            <h1>Total : £{props.totalcost}</h1>
        </div>
    )
}
export default Cartstorage;
