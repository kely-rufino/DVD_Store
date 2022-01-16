function AddItemfunc(props) {

    const addtoCart = (props) => {
        props.setCart([...props.cart, props.DVD])
        props.setTotalcost(props.totalcost + Number(props.DVD.price.replace(/[^0-9.-]+/g,"")))
    }

    return (
        <div className="actions">
        <button onClick={() => addtoCart(props)}>Add to Cart</button>
        </div> 
    )
}
export default AddItemfunc;