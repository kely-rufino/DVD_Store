function RemoveItemfunc(props) {

    const removeFromCart = (props) => {
        props.setCart(props.cart.filter((removeDvd) => removeDvd !== props.movie))
        //setTotalcost(props.totalcost - props.price)
    }
    <div className="actions">
        <button >Remove</button>
    </div>
}
export default RemoveItemfunc;

//<--onClick={() => removeFromCart(props)--/>


