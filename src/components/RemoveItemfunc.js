function RemoveItemfunc(props) {

    const removeFromCart = (props) => {
        props.setCart(props.cart.filter((item) => item !== props.selecteditem))
        //const number = Number(props.price.replace(/[^0-9.-]+/g,"")); 
        //props.setTotalcost(props.totalcost - number) 
    }
    return(
    <div className="actions">
        <button onClick={()=>removeFromCart(props)}>Remove</button>
    </div>
    )
}
export default RemoveItemfunc;


