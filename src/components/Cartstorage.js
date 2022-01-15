import './DVDsItemsandlists/DVDsItem.css';
import RemoveItemfunc from './RemoveItemfunc';

function Cartstorage(props) {

    return (
        <div>
            <h1>Your Cart</h1>
                <div>
                    {props.cart === [] ? "" : props.cart.map((item, i) =>
                        <div key={i} className="cartItem">
                            <p>{item}</p>
                        </div>                
                    )}
                </div>
               
            <h1>Total : £{props.totalcost}</h1>
        </div>
    )
}
export default Cartstorage;

//